import { merge } from 'lodash';
import { RECEIVE_MAP_INFO } from '../actions/map_actions';

const defaultState = {
  lat: 0,
  lng: 0,
  address: ""
};

const MapReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_MAP_INFO:

      let mapInfo = action.mapInfo;
      let lat = mapInfo.results[0].geometry.location.lat;
      let lng = mapInfo.results[0].geometry.location.lng;
      let address = mapInfo.results[0].formatted_address;
      let locationData = {lat, lng, address};
      return newState = merge({}, state, locationData)
    default:
      return state;
  }
};

export default MapReducer;
