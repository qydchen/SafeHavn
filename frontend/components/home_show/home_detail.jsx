import React from 'react';
import { Element } from 'react-scroll';
import { trueAmenities } from '../../reducers/selectors.js';
import Reviews from '../review/reviews';

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
  internet: ["Internet", "wifi-img"],
  family: ["Family/kid friendly", "family-img"],
  parking: ["Free parking on premises", "parking-img"],
  kitchen: ["Kitchen", "cutlery-img"],
}

class HomeDetail extends React.Component{

  summaryIcons() {
    return (
      <div className="sum-col">
        <div className="sum-detail-cols">
          <i className="room-type-icon sicon"></i>
          <div className="summary-icon-desc">{this.props.listing.space.room_type}</div>
        </div>
        <div className="sum-detail-cols">
          <i className="guests-type-icon sicon"></i>
          <div className="summary-icon-desc">{this.props.listing.space.max_guests} Guests</div>
        </div>
        <div className="sum-detail-cols">
          <i className="bedrooms-type-icon sicon"></i>
          <div className="summary-icon-desc">{this.props.listing.space.bedrooms} Bedrooms</div>
        </div>
        <div className="sum-detail-cols">
          <i className="beds-icon sicon"></i>
          <div className="summary-icon-desc">{this.props.listing.space.beds} Beds</div>
        </div>
      </div>
    )
  }

  theSpace() {
    var s = this.props.listing.space;
    var sArr = [];
    for (var key in s) {
      sArr.push([key, s[key]])
    }

    const spaceFeats = sArr.map((el, idx) => (
      <div key={idx} className="space-el">
        <div>{spaceText[el[0]]}: </div>
        <div className="strong">{el[1]}</div>
      </div>
    ))

    return (
      <div className="details-row space-box">
        <div className="details-sub-col1">The space</div>
        <div className="details-sub-col2">
          <div className="details-sub-col3">
            {spaceFeats.slice(0,4)}
          </div>
          <div className="details-sub-col3">
            {spaceFeats.slice(4)}
          </div>
        </div>
      </div>
    )
  }

  theAmenities() {
    const amenitiesArray = trueAmenities(this.props.listing.amenities)
    const confirmedAmenities = []; // confirms if amenity should be crossed out or bolded in Styling
    let idx = 0; // give unique keys
    for (var key in amenityText) {
      idx++;
      if (amenitiesArray.indexOf(key) > -1) {
        confirmedAmenities.push(
          <div key={idx} className="amenity-container">
            <div className={"amen-ico " + amenityText[key][1]}></div>
            <div className="amenity-true">{amenityText[key][0]}</div>
          </div>
        )
      } else {
        confirmedAmenities.push(
          <div key={idx} className="amenity-container">
            <div className={"amen-ico " + amenityText[key][1]}></div>
            <div key={idx} className="amenity-false">{amenityText[key][0]}</div>
          </div>
        )
      }
    }
    return (
      <div className="details-row space-box">
        <div className="details-sub-col1">Amenities</div>
        <div className="details-sub-col2">
          <div className="details-sub-col3">
            {confirmedAmenities.slice(0, Math.ceil(confirmedAmenities.length/2))}
          </div>
          <div className="details-sub-col3">
            {confirmedAmenities.slice(Math.ceil(confirmedAmenities.length/2))}
          </div>
        </div>
      </div>
    )
  }

  cancellationPolicy() {
    return (
      <div className="details-row space-box">
        <div className="details-sub-col1">Cancellations</div>
        <div className="details-sub-col2">
          <div className="details-cancellation">{this.props.listing.cancellation}</div>
          <div className="details-text">{cancellationText[this.props.listing.cancellation]}</div>
        </div>
      </div>
    )
  }

  render() {
    const { reviews, listing } = this.props;
    return (
      <Element name="scroll-to-overview" className="single-listing-container">
        <div className="summary-box">
          <div className="hcol">
            <div className="top-row-sum">
              <div className="sum-title">{listing.title}</div>
              <div className="sum-abs">
                <img className="show-pfpic" src={listing.host_image_url}></img>
                <div className="show-name">{listing.host.first}</div>
              </div>
            </div>
            <div className="sum-address">{listing.address}</div>

            <hr className="rowDivider"/>
            {this.summaryIcons()}

            <hr className="rowDivider"/>

          </div>
        </div>

        <div className="details-box">
          <div className="hcol">
            <div className="details-row about-listing">
              <div className="details-title">About this home</div>
              <div className="details-text">{listing.description}</div>
            </div>

            <hr className="rowDivider"/>
            {this.theSpace()}
            <hr className="rowDivider hr-abbrev"/>
            {this.theAmenities()}
            <hr className="rowDivider hr-abbrev"/>
            {this.cancellationPolicy()}
            <hr className="rowDivider"/>
          </div>
        </div>

        <Element name="scroll-to-review" className="review-divider">
          <div className="review-stats">
            <div className="rev">{listing.revcount} Total Reviews</div>
            <div className="rev">Rated<span className="stronger green">{listing.avg} </span>out of 10</div>
          </div>

          <Reviews reviews={reviews}/>
        </Element>

      </Element>

    )
  }

}

export default HomeDetail
