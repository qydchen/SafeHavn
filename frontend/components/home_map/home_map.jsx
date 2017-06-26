// import React from 'react';
// import MarkerManager from '../../util/marker_manager';
//
// class BenchMap extends React.Component {
//
//   componentDidMount() {
//     // this.props.fetchBenches();
//    // set the map to show NY
//     const mapOptions = {
//       center: { lat: 40.7831, lng: -73.9712 }, // this is NY
//       zoom: 2
//    };
//    // wrap the mapDOMNode in a Google Map
//    this.map = new google.maps.Map(this.mapNode, mapOptions);
//    this.MarkerManager = new MarkerManager(this.map);
//  }
//
//   componentDidUpdate() {
//     this.MarkerManager.updateMarkers(this.props.benches);
//   }
//
//   render() {
//     return (
//       <div id='map-container' ref={ map => this.mapNode = map } />
//     );
//   }
//
// }
//
// export default BenchMap;
