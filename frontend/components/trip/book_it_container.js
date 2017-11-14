import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createConfirmation } from '../../actions/confirmation_actions';
import { openModal } from '../../actions/modal_actions';
import { clearErrors } from '../../actions/session_actions';
import BookIt from './book_it';

const mapStateToProps = ({ session, homes }, { homeid }) => {
  const listing = homes[homeid];
  return {
    homeid,
    listing,
    loggedIn: !!session.currentUser,
    errors: session.errors,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    clearErrors: () => dispatch(clearErrors()),
    openModal: (component) => dispatch(openModal(component)),
    createConfirmation: confirmation => dispatch(createConfirmation(confirmation)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookIt);
