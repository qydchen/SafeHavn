// export default class MarkerManager {
//   constructor(map) {
//     this.map = map;
//     this.markers = {};
//   }
//
//   updateMarkers(benches) {
//     let markers = this.markers;
//     benches.forEach(bench => {
//       markers[bench.id] = this.createMarkerFromBench(bench);
//     });
//
//   }
//
//   createMarkerFromBench(bench) {
//     const lat = bench.lat;
//     const lng = bench.lng;
//     let marker = new google.maps.Marker({
//       position: {lat, lng},
//       title: bench.description,
//       animation: google.maps.Animation.DROP,
//       map: this.map
//     });
//     marker.addListener('click', this.toggleBounce.bind(marker));
//   }
//
//   toggleBounce() {
//     if (this.getAnimation() !== null) {
//       this.setAnimation(null);
//     } else {
//       this.setAnimation(google.maps.Animation.BOUNCE);
//     }
//   }
//
// }
