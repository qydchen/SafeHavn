import merge from 'lodash/merge';
import { RECEIVE_MAP_INFO, CLEAR_MAP_INFO } from '../actions/map_actions';

const defaultState = null;

const MapReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_MAP_INFO:
      let {mapInfo} = action;
      return newState = merge({}, state, mapInfo)
    case CLEAR_MAP_INFO:
      return defaultState;
    default:
      return state;
  }
};

export default MapReducer;
