import * as APIUtil from '../util/map_api_util';
export const RECEIVE_MAP_INFO = 'RECEIVE_MAP_INFO';
export const CLEAR_MAP_INFO = 'CLEAR_MAP_INFO';

export const receiveMapInfo = mapInfo => ({
  type: RECEIVE_MAP_INFO,
  mapInfo
});

export const clearMapInfo = () => ({
  type: CLEAR_MAP_INFO
});

export const fetchMapInfo = address => dispatch => {
  return (
  APIUtil.findLatLng(address).then(mapInfo => (
    dispatch(receiveMapInfo(mapInfo)))
  )
)};
