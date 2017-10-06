import React from 'react';
import Hostings from './hostings_index';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchHomes } from '../../actions/home_actions';

const mapStateToProps = ({session, homes}, {match}) => {
  const homeid = match.params.homeid;
  return {
    loggedIn: Boolean(session.currentUser),
    currentUser: session.currentUser,
    homeid,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchHomes: (id) => dispatch(fetchHomes(id))
  }
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Hostings));
