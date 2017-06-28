import React from 'react';
import { connect } from 'react-redux';
import { fetchTrip } from '../../actions/trip_actions';
import BookTripForm from './book_trip_form';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, {match}) => {
  const tripid = match.params.tripid;
  const trip = state.trip[tripid];

  return {
    tripid,
    trip,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTrip: id => dispatch(fetchTrip(id)),
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(BookTripForm));
