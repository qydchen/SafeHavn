import * as APIUtil from '../util/home_api_util'

export const RECEIVE_HOMES = 'RECEIVE_HOMES';
export const RECEIVE_HOME = 'RECEIVE_HOME';
export const RECEIVE_DELETION = 'RECEIVE_DELETION';

export const receiveHomes = homes => ({
  type: RECEIVE_HOMES,
  homes
});

export const receiveHome = home => ({
  type: RECEIVE_HOME,
  home
});

export const receiveDeletedHome = id => ({
  type: RECEIVE_DELETION,
  id
});

export const fetchHomes = filters => dispatch => (
  APIUtil.fetchHomes(filters).then(homes => (
    dispatch(receiveHomes(homes)))
  )
);

export const fetchHome = id => dispatch => (
  APIUtil.fetchHome(id).then(home => (
    dispatch(receiveHome(home)))
  )
);

export const createHome = home => dispatch => (
  APIUtil.createHome(home).then(home => (
    dispatch(receiveHome(home)))
  )
);

export const updateHome = home => dispatch => (
  APIUtil.updateHome(home).then(home => (
    dispatch(receiveHome(home)))
  )
);

export const deleteHome = id => dispatch => (
  APIUtil.deleteHome(id).then(home => (
    dispatch(receiveDeletedHome(home)))
  )
);
