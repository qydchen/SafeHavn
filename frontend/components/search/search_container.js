import React from 'react';
import { connect } from 'react-redux';
import { selectAll } from '../../reducers/selectors';
import { updateFilter } from '../../actions/filter_actions';
import { clearMapInfo } from '../../actions/map_actions';
import Search from './search';

const mapStateToProps = ({ homes, filters, map }) => {
  return {
    homes: selectAll(homes),
    minHousing: filters.minHousing,
    maxHousing: filters.maxHousing,
    minPrice: filters.minPrice,
    maxPrice: filters.maxPrice,
    map,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
    clearMapInfo: () => dispatch(clearMapInfo()),
  };
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
