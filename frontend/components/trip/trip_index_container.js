import React from 'react';
import { connect } from 'react-redux';
import TripIndex from './trip_index.jsx';
import { withRouter } from 'react-router-dom';
import { fetchTrips, deleteTrip } from '../../actions/trip_actions';
import { openModal } from '../../actions/modal_actions';
import { selectAll } from '../../reducers/selectors.js';

const mapStateToProps = ({trips, session}) => {
  return {
    trips: selectAll(trips),
    currentUser: session.currentUser,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    openModal: (component) => dispatch(openModal(component)),
    fetchTrips: () => dispatch(fetchTrips()),
    deleteTrip: trip => dispatch(deleteTrip(trip)),
  }
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(TripIndex));
