export default class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};
  }

  updateMarkers(homes) {
    let markers = this.markers;
    homes.forEach(home => {
      markers[home.id] = this.createMarkerFromBench(home);
    });

  }
// layout.scss for styling
  createMarkerFromBench(home) {
    const lat = home.lat;
    const lng = home.lng;
    let marker = new google.maps.Marker({
      position: {lat, lng},
      label: "$"+String(home.price),
      // labelClass: "maplabels",
      // icon: {
    	// 	url: asset-url('dialogue-box.png')
    	// },
      animation: google.maps.Animation.DROP,
      map: this.map
    });
    marker.addListener('click', this.toggleBounce.bind(marker));
  }

  toggleBounce() {
    if (this.getAnimation() !== null) {
      this.setAnimation(null);
    } else {
      this.setAnimation(google.maps.Animation.BOUNCE);
    }
  }

}
