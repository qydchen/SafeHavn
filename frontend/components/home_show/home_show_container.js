import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import HomeShow from './home_show';

import { fetchHome } from '../../actions/home_actions';
import { openModal } from '../../actions/modal_actions';
import { clearErrors } from '../../actions/session_actions'
import { fetchReviews } from '../../actions/review_actions';

const mapStateToProps = ({ homes, session, reviews }, { match }) => {
  //remember the entities is nested in home which is nested in state
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
    openModal: (component) => dispatch(openModal(component)),
    clearErrors: () => dispatch(clearErrors()),
    fetchReviews: (id) => dispatch(fetchReviews(id)),
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeShow));
