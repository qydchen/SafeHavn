import React from 'react';
import { connect } from 'react-redux';
import ReviewForm from './review_form';
import { Link, withRouter } from 'react-router-dom';
import { closeModal } from '../../actions/modal_actions';
import { createReview, fetchReviews } from '../../actions/review_actions';

const mapStateToProps = ({ session, reviews }) => {
  //remember the entities is nested in home which is nested in state
  return {
    currentUser: session.currentUser,
    reviews,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    closeModal : () => dispatch(closeModal()),
    createReview: (review) => dispatch(createReview(review)),
    fetchReviews: (id) => dispatch(fetchReviews(id)),
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewForm));
