export default class MarkerManager {
  constructor(map, handleClick) {
    this.map = map;
    this.handleClick = handleClick;
    this.markers = {};
  }

  updateMarkers(homes) {
    const homesObj = {};

    homes.forEach(home => {
      homesObj[home.id] = home;
      if (!this.markers[home.id]) this.createMarkerFromHome(home, this.handleClick);
    });

    for (let key in this.markers) {
      let { id } = this.markers[key];
      if (!homesObj[id]) this.removeMarker(this.markers[id]);
    }
  }

  createMarkerFromHome(home) {
    const {lat, lng, price, id} = home;
    let marker = new google.maps.Marker({
      position: {lat, lng},
      label: {
        color: "#ffffff",
        fontFamily: "Helvetica",
        text: "$"+String(price),
        fontSize: "14.5px",
        fontWeight: "700",
      },
      icon: "https://s3.amazonaws.com/safehavns-dev/mark.png",
      animation: google.maps.Animation.DROP,
      map: this.map,
      id
    });
    marker.addListener('click', () => this.handleClick(home));
    this.markers[marker.id] = marker;
  }

  removeMarker(marker) {
    this.markers[marker.id].setMap(null);
    delete this.markers[marker.id];
  }

}
