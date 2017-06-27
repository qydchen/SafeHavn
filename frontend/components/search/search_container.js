import React from 'react';
import { connect } from 'react-redux';
import { selectAll } from '../../reducers/selectors';
import { updateFilter } from '../../actions/filter_actions.js';
import Search from './search';

const mapStateToProps = ({ home, filters }) => {
  return {
    homes: selectAll(home),
    minHousing: filters.minHousing,
    maxHousing: filters.maxHousing,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
  };
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
