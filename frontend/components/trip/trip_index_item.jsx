import React from 'react';
import ReviewFormContainer from '../review/review_form_container.js';
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
          <div className='trip-image-container'>
            <Link to={`/homes/${trip.home.id}`} >
              <img className='trip-image' src={trip.image_url}/>
            </Link>
          </div>
          <div className='trip-text'>
            <div className='trip-time'>
              <div className='scheduled-box'>
                <div className='address-box'>{trip.home.title}</div>
                <div className="space-top">{trip.start_date} to {trip.end_date} · {trip.num_guests} guests</div>
                <div className="space-top">{trip.home.address}</div>
              </div>
            </div>
            <div className="trip-div"/>
            <div className="trip-actions-wrap">
              <div className='trip-actions trip-hov' onClick={() => this.props.openModal(<ReviewFormContainer homeid={trip.home.id}/>)}>Write a Review</div>
            </div>
            <div className="trip-div"/>
            <div className='trip-actions-wrap'>
              <div className='trip-actions'>Paid ${trip.total_cost}</div>
            </div>
            <div className="trip-div"/>
            <div className="trip-actions-wrap">
              <div className='trip-actions trip-hov' onClick={this.handleClick}>Cancel Trip</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default TripIndexItem;
