import React from 'react';
import { connect } from 'react-redux';
import ReviewForm from './review_form';
import { Link, withRouter } from 'react-router-dom';
import { closeModal } from '../../actions/modal_actions';
import { createReview } from '../../actions/review_actions';

const mapStateToProps = ({ session }) => (
  { currentUser: session.currentUser }
)

const mapDispatchToProps = (dispatch) => {
  return {
    closeModal : () => dispatch(closeModal()),
    createReview: (review) => dispatch(createReview(review)),
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewForm));
