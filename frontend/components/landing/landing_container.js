import React from 'react';
import { connect } from 'react-redux';
import { fetchHomes, fetchHome } from '../../actions/home_actions';
import { withRouter } from 'react-router-dom';
import { selectAll } from '../../reducers/selectors';
import Landing from './landing';

const mapStateToProps = ({ homes }, {match}) => { //remember the entities is nexted in home which is nested in state
  return {
    homes: selectAll(homes),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchHomes: () => dispatch(fetchHomes()),
    fetchHome: (id) => dispatch(fetchHome(id)),
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Landing));
