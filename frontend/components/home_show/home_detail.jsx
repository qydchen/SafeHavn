import React from 'react';
import { Link } from 'react-router';
import { trueAmenities } from '../../reducers/selectors.js';

const cancellationText = {
  Strict: "Cancel up to 7 days before your trip and get a 50% refund plus service fees back.",
  Moderate: "Cancel up to 5 days before your trip and get a full refund, including service fees.",
  Flexible: "Cancel up to 24 hours before your trip and get a full refund, including service fees."
}

const spaceText = {
  max_guests: "Accommodates",
  bathrooms: "Bathrooms",
  bedrooms: "Bedrooms",
  beds: "Beds",
  property_type: "Property Type",
  room_type: "Room Type"
}

const amenityText = {
  internet: "Internet",
  family: "Family/kid friendly",
  parking: "Free parking on premises",
  kitchen: "Kitchen"
}

class HomeDetail extends React.Component{
  constructor(props) {
    super(props)
    this.space = this.props.listing.space
    this.amenities = this.props.listing.amenities
  }
  summaryIcons() {
    return (
      <div className="details-row">
        <div className="detail-roomtype">
          <div className="room-type-icon sicon"/>
          <div className="summary-icon-desc">{this.space.room_type}</div>
        </div>
        <div className="detail-max_guests">
          <div className="max_guests-type-icon sicon"/>
          <div className="summary-icon-desc">{this.space.max_guests} Guests</div>
        </div>
        <div className="detail-bedrooms">
          <div className="bedrooms-type-icon sicon"/>
          <div className="summary-icon-desc">{this.space.bedrooms} Bedrooms</div>
        </div>
        <div className="detail-beds">
          <div className="beds-icon sicon"/>
          <div className="summary-icon-desc">{this.space.beds} Beds</div>
        </div>
      </div>
    )
  }

  theSpace() {
    var s = this.space;
    var spaceArray = [];
    for (var key in s) {
      spaceArray.push([key, s[key]])
    }
    const spaceFeats = spaceArray.map((el, idx) => (
      <div key={idx} className="space-el">{[spaceText[el[0]], el[1]].join(": ")}</div>
    ))
    return (
      <div className="details-row">
        <div className="details-sub-col1">The space</div>
        <div className="details-sub-col2">
          {spaceFeats}
        </div>
      </div>
    )
  }

  theAmenities() {
    const amenitiesArray = trueAmenities(this.amenities)
    const confirmedAmenities = []; // confirms if amenity should be crossed out or bolded in Styling
    let idx = 0; // give unique keys
    for (var key in amenityText) {
      idx++;
      if (amenitiesArray.indexOf(key) > -1) {
        confirmedAmenities.push(<div key={idx} className="amenity-true">{amenityText[key]}</div>)
      } else {
        confirmedAmenities.push(<div key={idx} className="amenity-false">{amenityText[key]}</div>)
      }
    }
    return (
      <div className="details-row">
        <div className="details-sub-col1">Amenities</div>
        <div className="details-sub-col2">
          {confirmedAmenities}
        </div>
      </div>
    )
  }

  cancellationPolicy() {
    return (
      <div className="details-row">
        <div className="details-title">{this.props.listing.cancellation}</div>
        <div className="details-text">{cancellationText[this.props.listing.cancellation]}</div>
      </div>
    )
  }

  render() {
    return (
      <div className="single-listing-container">
        <div className="summary-box">
          <div className="hcol">
            <div className="details-row title">{this.props.listing.title}</div>
            <div className="details-row address">{this.props.listing.address}</div>
            {this.summaryIcons()}
          </div>
        </div>

        <div className="details-box">
          <div className="hcol">
            <div className="details-row">
              <div className="details-title">About this home</div>
              <div className="details-text">{this.props.listing.description}</div>
            </div>
            {this.theSpace()}
            {this.theAmenities()}
            {this.cancellationPolicy()}
          </div>
        </div>

      </div>
    )
  }

}

export default HomeDetail
