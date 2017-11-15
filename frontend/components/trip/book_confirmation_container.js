import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import BookConfirmation from './book_confirmation';

import { fetchHome } from '../../actions/home_actions';
import { createTrip } from '../../actions/trip_actions';
import { fetchConfirmation, deleteConfirmation } from '../../actions/confirmation_actions';

const mapStateToProps = ({ session, confirmations }, { match }) => {
  const homeid = match.params.homeid;
  
  return {
    loggedIn: Boolean(session.currentUser),
    currentUser: session.currentUser,
    confirmations,
    homeid,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    createTrip: trip => dispatch(createTrip(trip)),
    fetchHome: id => dispatch(fetchHome(id)),
    fetchConfirmation: () => dispatch(fetchConfirmation()),
    deleteConfirmation: () => dispatch(deleteConfirmation()),
  }
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(BookConfirmation));
