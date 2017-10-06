// import React from 'react';
//
// export default class LocationPicker extends React.Component {
//   constructor(props) {
//     super(props);
//
//     this.handler = this.props.handler;
//   }
//
//   componentDidMount() {
//     this.setupAutocomplete();
//   }
//
//   componentWillUnmount() {
//     google.maps.event.clearInstanceListeners(this.autocomplete);
//   }
//
//   setupAutocomplete() {
//     this.autocomplete = new google.maps.places.Autocomplete(this.place);
//     google.maps.event.addListener(this.autocomplete, 'place_changed', () => {
//       const place = this.autocomplete.getPlace();
//       const lat = place.geometry.location.lat();
//       const lng = place.geometry.location.lng();
//       this.handler({lat, lng, address: this.place.value}, place);
//     });
//   }
//
//   render() {
//     return (
//       <label>
//         <input
//           ref={ref => this.place = ref}
//           placeholder={this.props.address || this.props.placeholder || 'Address'}
//           className={this.props.errors && this.props.errors.lng ? 'invalid' : null}
//         />
//         <span className="errors" >{this.props.errors ? this.props.errors.lng : ''}</span>
//       </label>
//     );
//   }
//
// }
