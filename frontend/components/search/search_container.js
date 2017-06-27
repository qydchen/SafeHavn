import React from 'react';
import { connect } from 'react-redux';
import { fetchHomes } from '../../actions/home_actions';
import { selectAll } from '../../reducers/selectors';
import Search from './search';

const mapStateToProps = ({ home }) => {
  return {
    homes: selectAll(home)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchHomes: () => dispatch(fetchHomes())
  };
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
