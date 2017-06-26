import React from 'react';
import { connect } from 'react-redux';
import { fetchHome, fetchHomes } from '../../actions/home_actions';
import HomeIndex from './home_index';
import { selectAll } from '../../reducers/selectors.js'

const mapStateToProps = ({ home }) => {
  return {
    homes: selectAll(home)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchHomes: () => dispatch(fetchHomes()),
    fetchHome: id => dispatch(fetchHome(id)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeIndex);
