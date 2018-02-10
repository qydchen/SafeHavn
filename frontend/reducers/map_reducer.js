import merge from 'lodash/merge';
import { RECEIVE_MAP_INFO } from '../actions/map_actions';

const defaultState = null;

const MapReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_MAP_INFO:
      let {mapInfo} = action;
      return newState = merge({}, state, mapInfo)
    default:
      return state;
  }
};

export default MapReducer;
