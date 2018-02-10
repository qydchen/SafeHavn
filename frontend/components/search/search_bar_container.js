import React from 'react';
import { connect } from 'react-redux';
import { fetchMapInfo } from '../../actions/map_actions';
import SearchBar from './search_bar';

const mapDispatchToProps = dispatch => {
  return {
    fetchMapInfo: (address) => dispatch(fetchMapInfo(address))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SearchBar);
