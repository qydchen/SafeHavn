import React from 'react';
import { connect } from 'react-redux';
import { fetchHome } from '../../actions/home_actions';
import { selectHome } from '../../reducers/selectors';
import HomeShow from './home_show';

const mapStateToProps = (state, {match}) => { //remember the entities is nexted in home which is nested in state
  const homeid = match.params.homeid;
  const listing = state.home[homeid];
  debugger;
  return {
    homeid,
    listing,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchHome: id => dispatch(fetchHome(id)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeShow);
