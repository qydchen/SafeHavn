import React from 'react';
import { connect } from 'react-redux';
import { createTrip } from '../../actions/trip_actions';
import { fetchHome } from '../../actions/home_actions';
// import { receiveInput } from '../../actions/input_actions';
import BookIt from './book_it';
import { withRouter } from 'react-router-dom';

const mapStateToProps = ({home}, {match}) => {
  const homeid = match.params.homeid;
  const listing = home[homeid];
  debugger
  return {
    inputs,
    listing
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    createTrip: trip => dispatch(createTrip(trip)),
    // receiveInput: input => dispatch(receiveInput(input))
    fetchHome: id => dispatch(fetchHome(id)),
  }
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(BookIt));
