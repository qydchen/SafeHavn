import React from 'react';
import { connect } from 'react-redux';
import { fetchHome, fetchHomes } from '../../actions/home_actions';
import HomeShow from './home_show';

const mapStateToProps = (state, {match}) => { //remember the entities is nexted in home which is nested in state
  const homeid = match.params.homeid;
  const listing = state.home[homeid];

  return {
    homeid,
    listing,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchHome: id => dispatch(fetchHome(id)),
    fetchHomes: () => dispatch(fetchHomes())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeShow);
