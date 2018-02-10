import React from 'react';
import MarkerManager from '../../util/marker_manager';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';

const getCoordsObj = latLng => ({
  lat: latLng.lat(),
  lng: latLng.lng()
});

class HomeMap extends React.Component {

  componentDidMount() {
    const map = this.refs.map;
    this.map = new google.maps.Map(this.mapNode, this.mapOptions());
    this.MarkerManager = new MarkerManager(this.map, this.handleMarkerClick.bind(this));
    if (this.props.homeid) {
      this.props.fetchHome(this.props.homeid);
    } else {
      this.registerListeners();
      this.MarkerManager.updateMarkers(this.props.homes);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.mapState) {
      this.map.setCenter(nextProps.mapState.results[0].geometry.location)
    }
  }

  mapOptions() {
    let options = {
      center: { lat: 40.7128, lng: -74.0059 }, // this is NY
      zoom: 11,
      scrollwheel: false,
      styles: [
        { featureType: "water", stylers: [{hue: "#A4DDF5"}]}
      ]
    }
    if (this.props.mapState) {
      options.center = this.props.mapState.results[0].geometry.location
    }
    return options;
  };

  registerListeners() {
    google.maps.event.addListener(this.map, 'idle', () => {
      const { north, south, east, west } = this.map.getBounds().toJSON();
      const bounds = {
        northeast: { lat: north, lng: east },
        southwest: { lat: south, lng: west }
      };
      this.props.updateFilter('bounds', bounds);
    });
    google.maps.event.addListener(this.map, 'click', (event) => {
      const coords = getCoordsObj(event.latLng);
      this.handleClick(coords);
    });
  }

  componentWillUnmount() {
    google.maps.event.clearListeners(this.map);
  }

  handleMarkerClick(home) {
    this.props.history.push(`homes/${home.id}`);
  }

  componentDidUpdate() {
    if (this.props.homeid) {
      const targetHomeKey = Object.keys(this.props.homes)[0];
      const targetHome = this.props.homes[targetHomeKey];
      this.MarkerManager.updateMarkers([targetHome]);
    } else {
      this.MarkerManager.updateMarkers(this.props.homes);
    }
  }

  handleClick(coords) {
    this.props.history.push({
      pathname: '/homes',
      search: `lat=${coords.lat}&lng=${coords.lng})`
    })
  }

  render() {
    return (
      <div id='map-container' ref={ map => this.mapNode = map } />
    );
  }

}

export default withRouter(HomeMap);
