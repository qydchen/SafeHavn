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
      <Link to={`/homes/${trip.home.id}`} className='trip-card'>
        <div className='trip-padding'>
          <div className='trip-image-container'>
            <img className='trip-image' src={trip.image_url}/>
          </div>
          <div className='trip-text'>

            <div className='trip-time'>
              <div className='scheduled-box'>
                <div className='address-box'>{trip.home.title}</div>
                <div className="space-top">{trip.start_date} to {trip.end_date} · {trip.num_guests} guests</div>
                <div className="space-top">{trip.home.address}</div>
              </div>
            </div>

            <div className='trip-actions-wrap'>
              <div className='trip-actions'>Paid ${trip.totalcost}</div>
            </div>


            <div className="trip-actions-wrap" onClick={this.handleClick}>
              Cancel Trip
            </div>
          </div>
        </div>
      </Link>
    )
  }
}
// <div className='trip-actions-wrap'>
// <div className='trip-actions'>Make a Review</div>
// </div>

export default TripIndexItem;
