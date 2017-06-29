import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';

class TripIndexItem extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.deleteTrip(this.props.trip);
  }

  render() {
    const {trip} = this.props;
    return (
      <div className='trip-card'>
        <div className='trip-padding'>
          <div className='trip-text'>

            <div className='trip-time'>
              <div className='scheduled-box'>
                <div className='address-box'>{trip.home.address}</div>
                <div>{trip.start_date} · {trip.num_guests} guests</div>
                <div>{trip.home.description}</div>
              </div>
            </div>

            <div className='trip-actions-wrap'>
              <div className='trip-actions'>View Receipt</div>
            </div>

            <div className='trip-actions-wrap'>
              <div className='trip-actions'>Make a Review</div>
            </div>

            <div className="trip-actions-wrap" onClick={this.handleClick}>
              Cancel Trip
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default TripIndexItem;
