import merge from 'lodash/merge';

import { UPDATE_FILTER } from '../actions/filter_actions';

const defaultFilters = Object.freeze({
  bounds: {},
  minHousing: "1",
  maxHousing: "12",
  minPrice: "0",
  maxPrice: "500",
  featured: false,
});

const FilterReducer = (state = defaultFilters, action) => {
  Object.freeze(state)
  let newState;
  switch(action.type) {
    case UPDATE_FILTER:
      newState = merge({}, state, {[action.filter]: action.value});
      return newState;

    default:
      return state;
  }
};

export default FilterReducer;
