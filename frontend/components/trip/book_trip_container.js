import React from 'react';
import { connect } from 'react-redux';
import { receiveInput } from '../../actions/input_actions';
import BookTrip from './book_trip';
import { withRouter } from 'react-router-dom';
import { fetchHome } from '../../actions/home_actions';
import { createTrip } from '../../actions/trip_actions';

const mapStateToProps = ({session, homes, inputs}, {match}) => {
  const homeid = match.params.homeid;
  const listing = homes[homeid];
  return {
    currentUser: session.currentUser,
    homeid,
    listing,
    inputs
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    createTrip: trip => dispatch(createTrip(trip)),
    fetchHome: id => dispatch(fetchHome(id))
  }
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(BookTrip));
