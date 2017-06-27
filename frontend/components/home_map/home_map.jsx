import React from 'react';
import MarkerManager from '../../util/marker_manager';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';

const getCoordsObj = latLng => ({
  lat: latLng.lat(),
  lng: latLng.lng()
});
// set the map to show NY
const mapOptions = {
  center: { lat: 40.7128, lng: -74.0059 }, // this is NY
  zoom: 9,
  scrollwheel: false, // turn off scroll wheel
  styles: [
    { featureType: "water", stylers: [{hue: "#A4DDF5"}]}
  ]
};

class HomeMap extends React.Component {

  componentDidMount() {
    const map = this.refs.map;
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map, this.handleMarkerClick.bind(this));

    this.registerListeners();
    this.MarkerManager.updateMarkers(this.props.homes);
    }
   // wrap the mapDOMNode in a Google Ma
  //     scrollwheel: false,
  //     navigationControl: false,
  //     mapTypeControl: false,
  //     scaleControl: false,
  //     draggable: false,
  //     mapTypeId: google.maps.MapTypeId.ROADMAP

  registerListeners() {
    google.maps.event.addListener(this.map, 'idle', () => {
      const { north, south, east, west } = this.map.getBounds().toJSON();
      const bounds = {
        northEast: { lat: north, lng: east },
        southWest: { lat: south, lng: west } };
      this.props.updateFilter('bounds', bounds);
    });
    google.maps.event.addListener(this.map, 'click', (event) => {
      const coords = getCoordsObj(event.latLng);
      this.handleClick(coords);
    });
  }

  handleMarkerClick(bench) {
    this.props.history.push(`homes/${home.id}`);
  }

  componentDidUpdate() {
    this.MarkerManager.updateMarkers(this.props.homes);
  }

  handleClick(coords) {
    this.props.history.push({
      pathname: '/',
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
