import merge from 'lodash/merge';

import {
  RECEIVE_TRIPS,
  RECEIVE_TRIP,
  RECEIVE_DELETION,
} from '../actions/trip_actions';

const defaultState = {};

const TripReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_TRIP:
      newState = merge({}, state, {[action.trip.id]: action.trip})
      return newState;
    case RECEIVE_TRIPS:
      return action.trips;
    case RECEIVE_DELETION:
      newState = merge({}, state);
      delete newState[action.trip.id];
      return newState;
    default:
      return state;
  }
};

export default TripReducer;
