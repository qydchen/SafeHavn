import React from 'react';
import { Link } from 'react-router';

class HomeDetail extends React.Component{

  summaryIcons() {
    return (
      <div className="details-row">
        <div className="detail-roomtype">
          <div className="room-type-icon sicon"/>
          <div className="summary-icon-desc"> {this.props.listing.space.room_type}</div>
        </div>
        <div className="detail-max_guests">
          <div className="max_guests-type-icon sicon"/>
          <div className="summary-icon-desc"> {this.props.listing.space.max_guests}</div>
        </div>
        <div className="detail-bedrooms">
          <div className="bedrooms-type-icon sicon"/>
          <div className="summary-icon-desc"> {this.props.listing.space.bedrooms}</div>
        </div>
        <div className="detail-beds">
          <div className="beds-icon sicon"/>
          <div className="summary-icon-desc"> {this.props.listing.space.beds}</div>
        </div>
      </div>
    )
  }

  space() {
    const spaceArray = asArray(this.props.listing.space);
    const spaceFeats = spaceArray.map((el) => (
      <div className="space-el">{el}</div>
    ))
    return (
      <div className="details-row">
        <div className="space-col1">The space</div>
        <div className="space-col2">
          {spaceFeats}
        </div>
      </div>
    )
  }

  render() {
    return (
      <div>
        <div className="single-listing-container">
          <div className="summary-box">
            <div className="hcol">
              <div className="details-row title">{this.props.listing.title}</div>
              <div className="details-row address">{this.props.listing.address}</div>
              {summaryIcons()}
            </div>
          </div>

          <div className="details-box">
            <div className="hcol">
              <div className="details-row">
                <div className="details-title">About this home</div>
                <div className="details-text">{this.props.listing.description}</div>
              </div>
              {space()}

            </div>
          </div>

          <div className="detail-box">
          </div>
        </div>
      </div>
    )
  }

}

export default HomeDetail
