import React from 'react';
import { connect } from 'react-redux';
import { updateFilter } from '../../actions/filter_actions.js';
import SearchBar from './search_bar';

const mapDispatchToProps = dispatch => {
  return {
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SearchBar);
