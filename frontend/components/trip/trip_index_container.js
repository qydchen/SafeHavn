import React from 'react';
import { connect } from 'react-redux';
import TripIndex from './book_trip';
import { withRouter } from 'react-router-dom';
import { fetchTrips } from '../../actions/trip_actions';
import { selectAll } from '../../reducers/selectors.js';

const mapStateToProps = ({trips, session}) => {
  return {
    trips: selectAll(trips),
    currentUser: session.currentUser,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTrips: () => dispatch(fetchTrips()),
    deleteTrip: id => dispatch(deleteTrips(id)),
  }
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(TripIndex));
