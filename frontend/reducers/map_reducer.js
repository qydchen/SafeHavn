import merge from 'lodash/merge';
import { RECEIVE_MAP_INFO, CLEAR_MAP_INFO } from '../actions/map_actions';

const defaultState = null;

const MapReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_MAP_INFO:
      return merge({}, state, { mapInfo: action.mapInfo })
    case CLEAR_MAP_INFO:
      return defaultState;
    default:
      return state;
  }
};

export default MapReducer;
