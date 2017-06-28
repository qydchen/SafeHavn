import React from 'react';
import { connect } from 'react-redux';
import { fetchHome } from '../../actions/home_actions';
import HomeShow from './home_show';
import { withRouter } from 'react-router-dom';

const mapStateToProps = ({ home }, {match}) => { //remember the entities is nexted in home which is nested in state
  const homeid = match.params.homeid;
  const listing = home[homeid];

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

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeShow));
