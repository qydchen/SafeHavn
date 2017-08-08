import React from 'react';
import HostTrip from './host_trip';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchHome, createHome } from '../../actions/home_actions';

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
    fetchHome: id => dispatch(fetchHome(id)),
    createHome: data => dispatch(createHome(data))
  }
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(HostTrip));
