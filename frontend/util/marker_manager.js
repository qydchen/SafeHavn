export default class MarkerManager {
  constructor(map, handleClick) {
    this.map = map;
    this.handleClick = handleClick;
    this.markers = {};
  }

  updateMarkers(homes) {
    const homesObj = {};
    homes.forEach(home => homesObj[home.id] = home);

    homes
      .filter(home => !this.markers[home.id])
      .forEach(newHome => { this.createMarkerFromHome(newHome, this.handleClick);
    });

    Object.keys(this.markers)
      .filter(homeid => !homesObj[homeid])
      .forEach((homeid) => this.removeMarker(this.markers[homeid]))
  }
// layout.scss for styling
  createMarkerFromHome(home) {
    const lat = home.lat;
    const lng = home.lng;
    let marker = new google.maps.Marker({
      position: {lat, lng},
      label: "$"+String(home.price),
      // labelClass: "maplabels",
      // icon: }
    	// 	url: asset-url('dialogue-box.png')
    	// },
      animation: google.maps.Animation.DROP,
      map: this.map,
      homeid: home.id
    });
    marker.addListener('click', this.toggleBounce.bind(marker));

    marker.addListener('click', () => this.handleClick(home));
    this.markers[marker.homeid] = marker;
  }

  removeMarker(marker) {
    this.markers[marker.homeid].setMap(null);
    delete this.markers[marker.homeid];
  }

  toggleBounce() {
    if (this.getAnimation() !== null) {
      this.setAnimation(null);
    } else {
      this.setAnimation(google.maps.Animation.BOUNCE);
    }
  }

}
