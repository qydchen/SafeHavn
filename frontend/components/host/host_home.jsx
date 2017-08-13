import React from 'react';
import Dropzone from 'react-dropzone';
import { withRouter } from 'react-router-dom';
import * as textUtil from '../../util/home_detail_descriptions';
import { findLatLng } from '../../util/home_api_util';

class HostHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: null,
      lng: null,
      price: 0,
      title: "",
      description: "",
      address: "",
      max_guests: 2,
      bathrooms: 1,
      property_type: "House",
      room_type: "Entire home/apt",
      internet: false,
      family: false,
      kitchen: false,
      beds: 2,
      bedrooms: 1,
      cancellation: "Flexible",
      num_guests: 2,
      imageFile: null,
      imageUrl: null,
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAddressSubmit = this.handleAddressSubmit.bind(this);
    this.update = this.update.bind(this);
    this.updateFile = this.updateFile.bind(this);
    this.updateDraggedFile = this.updateDraggedFile.bind(this);
  }

  componentDidMount() {
    const input = document.getElementById("address-field");
    this.autocomplete = new google.maps.places.Autocomplete(input);
  }

  handleSubmit(e) {
    e.preventDefault();
    let home = Object.assign({}, this.state);
    let formData = new FormData();
    if (this.state.imageFile) {
      formData.append("home[image]", this.state.imageFile);
    }
    this.props.createHome({home});
  }

  handleAddressSubmit(e) {
    e.preventDefault();

  }

  updateFile(e) {
    let file = e.currentTarget.files[0];
    let fileReader = new FileReader();
     fileReader.onloadend = function() {
       this.setState({ imageFile: file, imageUrl: fileReader.result });
     }.bind(this);
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  updateDraggedFile(e) {
    let file = e[0];
    let fileReader = new FileReader();
    fileReader.onloadend = function() {
      this.setState({imageFile: file, imageUrl: fileReader.result });
    }.bind(this);
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  selectRoom(array) {
    const options = [];
    for (let i = 0; i < array.length; i++) {
      options.push(
        <option value={i}
        key={i}
        >{array[i]}</option>
      )
    };
    return (
      <div className="host-column">
        <div className='select-container book-txt host-dd'>
          <div className='select-dd-container'>
            <select className='select-dropdown select-bk-dd' value={this.state.room_type}
              onChange={this.update('room_type')}
            >{options}</select>
            <span className="dropdown-arrow"></span>
          </div>
        </div>
      </div>
    );
  }

  selectGuests() {
    const options = [
      <option value="1" key={1}>for 1 guest</option>
    ];
    for (let i = 2; i <= 12; i++) {
      options.push(
        <option value={i}
        key={i}
        >for {i} guests</option>
      )
    };
    return (
      <div className="host-column">
        <div className='select-container book-txt host-dd'>
          <div className='select-dd-container'>
            <select className='select-dropdown select-bk-dd' value={this.state.num_guests}
              onChange={this.update('num_guests')}
            >{options}</select>
            <span className="dropdown-arrow"></span>
          </div>
        </div>
      </div>
    );
  }

  addressInput() {
    return (
      <form className="search-container address-container" ref={form => this.form = form} onSubmit={this.handleAddressSubmit}>
        <input
          type="search"
          id="address-field"
          placeholder="Address"
          ref={input => this.input = input}
          onChange={this.update('address')}
        />
      </form>
    )
  }

  render() {
    if (this.props.currentUser) {
      return (
        <div className="step1">
          <div className="step1-form-cont">
            <div className="inner-form">
              <span className="inner-landing-tit">Hi, {this.props.currentUser.first}! Lets get started listing your space.</span>
              <span className="step1-span">STEP 1</span>
              <span className="step1-blurb">What kind of place do you have?</span>
              <div className="host-row">
                {this.selectRoom(textUtil.roomText)}
                {this.selectGuests()}
              </div>
              <div className="host-row">
                {this.addressInput()}
              </div>
            </div>
          </div>
          <div className="step1-img"></div>
        </div>
      )
    } else {
      return (
        <Redirect to="/"/>
      )
    }
  }

}

export default withRouter(HostHome);
