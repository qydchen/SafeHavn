import React from 'react';
import { connect } from 'react-redux';
import { createTrip } from '../../actions/trip_actions';
import { fetchHome } from '../../actions/home_actions';
import { receiveInput } from '../../actions/input_actions';
import BookIt from './book_it';
import BookTrip from './book_trip';
import { withRouter } from 'react-router-dom';

const mapStateToProps = ({home, inputs, trips, session}, {match}) => {
  const homeid = match.params.homeid;
  const listing = home[homeid];
  return {
    inputs,
    listing,
    trips,
    homeid,
    currentUser: session.currentUser
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    createTrip: trip => dispatch(createTrip(trip)),
    receiveInput: inputs => dispatch(receiveInput(inputs)),
    fetchHome: id => dispatch(fetchHome(id)),
  }
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(BookIt));
