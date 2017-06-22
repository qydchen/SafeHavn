import * as APIUtil from '../util/home_api_util'

export const RECEIVE_HOMES = 'RECEIVE_HOMES';
export const RECEIVE_HOME = 'RECEIVE_HOME';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';

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

export const createReview = review => dispatch => (
  APIUtil.createReview(review).then(review => (
    dispatch(receiveReview(review))
  ))
);

export const fetchHomes = filters => dispatch => (
  APIUtil.fetchHomes(filters).then(homes => (
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
