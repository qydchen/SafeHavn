import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';
import TripIndexItem from './trip_index_item';
import isEmpty from 'lodash/isEmpty';

class TripIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    if (isEmpty(this.props.trips)) {
      this.props.fetchTrips();
    }
  }

  componentDidUpdate() {
    if (!this.props.currentUser) {
      this.props.history.push(`/homes`);
    }
  }

  render() {
    const { deleteTrip, openModal, trips } = this.props;
    if (trips.length > 0) {
      const tripsIndex = trips.map((trip, idx) => {
        return (
          <div className="trip-card-container" key={idx}>
          <TripIndexItem trip={trip} deleteTrip={deleteTrip} openModal={openModal}/>
          </div>
        )
      });
      return (
        <div className="trip-slider">
        <span className="trip-tit">Your Trips</span>
          <div className="trip-cards">
          {tripsIndex}
          </div>
        </div>
      )
    } else {
      return (
        <div className="trip-slider">
        <span className="trip-tit">Your Trips</span>
          <div className="trip-cards-txt">
          You have no upcoming trips.
          </div>
          <Link to={`/homes`} className="pinkButton book-btn trip-button">Book a trip!</Link>
        </div>
      )
    }
  }
}

export default withRouter(TripIndex);
