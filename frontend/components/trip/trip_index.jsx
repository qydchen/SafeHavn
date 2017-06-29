import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';
import TripIndexItem from './trip_index_item';

class TripIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchTrips();
  }

  render() {;
    const tripsIndex = this.props.trips.map((trip, idx) => {
      return (
        <div className="trip-card-container" key={idx}>
          <TripIndexItem trip={trip} deleteTrip={deleteTrip}/>
        </div>
      )
    });

    return (
      <div className="trip-slider">
        <span className="trip-tit">Trips</span>
        <div className="trip-cards">
        {tripsIndex}
        </div>
      </div>
    )
  }
}

export default TripIndex;
