import React from 'react';
import MarkerManager from '../../util/marker_manager';

class HomeMap extends React.Component {

  componentDidMount() {
   // set the map to show NY
    const mapOptions = {
      center: { lat: 40.8, lng: -74.0 }, // this is NY
      zoom: 10,
      scrollwheel: false,
      styles: [
        { featureType: "water", stylers: [{hue: "#4cd2ff"}]}
      ]
    };
   // wrap the mapDOMNode in a Google Map
   this.map = new google.maps.Map(this.mapNode, mapOptions);
//     scrollwheel: false,
//     navigationControl: false,
//     mapTypeControl: false,
//     scaleControl: false,
//     draggable: false,
//     mapTypeId: google.maps.MapTypeId.ROADMAP

   this.MarkerManager = new MarkerManager(this.map);
 }

  componentDidUpdate() {
    this.MarkerManager.updateMarkers(this.props.homes);
  }

  render() {
    return (
      <div id='map-container' ref={ map => this.mapNode = map } />
    );
  }

}

export default HomeMap;
