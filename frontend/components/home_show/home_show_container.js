import React from 'react';
import { connect } from 'react-redux';
import { fetchHome } from '../../actions/home_actions';
import { receiveInput } from '../../actions/input_actions';
import HomeShow from './home_show';
import { withRouter } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';
import { clearErrors } from '../../actions/session_actions'
import { createReview, fetchReviews } from '../../actions/review_actions';
// import { selectAll } from '../../reducers/selectors';

const mapStateToProps = ({ homes, session, reviews }, {match}) => { //remember the entities is nexted in home which is nested in state
  const homeid = match.params.homeid;
  const listing = homes[homeid];

  return {
    homeid,
    listing,
    currentUser: session.currentUser,
    reviews,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchHome: id => dispatch(fetchHome(id)),
    receiveInput: input => dispatch(receiveInput(input)),
    openModal: (component) => dispatch(openModal(component)),
    clearErrors: () => dispatch(clearErrors()),
    createReview: (review) => dispatch(createReview(review)),
    fetchReviews: (homeid) => dispatch(fetchReviews(homeid)),
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeShow));
