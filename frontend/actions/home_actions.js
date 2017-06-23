import * as APIUtil from '../util/home_api_util'

export const RECEIVE_HOMES = 'RECEIVE_HOMES';
export const RECEIVE_HOME = 'RECEIVE_HOME';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const RECEIVE_DELETION = 'RECEIVE_DELETION';

export const receiveHomes = homes => ({
  type: RECEIVE_HOMES,
  homes
});

export const receiveHome = home => ({
  type: RECEIVE_HOME,
  home
});

export const receiveReview = review => ({
  type: RECEIVE_REVIEW,
  review
});

export const receiveDeletedHome = home => ({
  type: RECEIVE_DELETION,
  home
});

export const createReview = review => dispatch => (
  APIUtil.createReview(review).then(review => (
    dispatch(receiveReview(review))
  ))
);

export const fetchHomes = homes => dispatch => ( //filters over homes later?
  APIUtil.fetchHomes(homes).then(homes => ( //filters over homes later?
    dispatch(receiveHomes(homes))
  ))
);

export const fetchHome = id => dispatch => (
  APIUtil.fetchHome(id).then(home => (
    dispatch(receiveHome(home))
  ))
);

export const createHome = home => dispatch => (
  APIUtil.createHome(home).then(home => (
    dispatch(receiveHome(home))
  ))
);

export const updateHome = home => dispatch => (
  APIUtil.updateHome(home).then(home => (
    dispatch(receiveHome(home))
  ))
);

export const deleteHome = id => dispatch => (
  APIUtil.deleteHome(id).then(home => (
    dispatch(receiveDeletedHome(home))
  ))
)
