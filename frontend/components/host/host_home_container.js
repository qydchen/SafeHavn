import React from 'react';
import HostHome from './host_home';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createHome } from '../../actions/home_actions';
import { fetchMapInfo } from '../../actions/map_actions';

const mapStateToProps = ({session, homes, map}) => {
  return {
    loggedIn: Boolean(session.currentUser),
    currentUser: session.currentUser,
    lat: map.lat,
    lng: map.lng,
    address: map.address,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    createHome: home => dispatch(createHome(home)),
    fetchMapInfo: address => dispatch(fetchMapInfo(address)),
  }
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(HostHome));
