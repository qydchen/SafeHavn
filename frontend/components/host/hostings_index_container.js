import React from 'react';
import Hostings from './hostings_index';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchMyHomes } from '../../actions/home_actions';
import { selectAll } from '../../reducers/selectors';

const mapStateToProps = ({session, homes}) => {
  return {
    loggedIn: Boolean(session.currentUser),
    homes: selectAll(homes),
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMyHomes: () => dispatch(fetchMyHomes()),
  }
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Hostings));
