import merge from 'lodash/merge';

import {
  RECEIVE_HOMES,
  RECEIVE_HOME,
  RECEIVE_DELETION,
  RECEIVE_REVIEW,
} from '../actions/home_actions';

const defaultState = {};

const HomeReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_HOME:
      newState = merge({}, state, {[action.home.id]: action.home});
      return newState;

    case RECEIVE_HOMES:
      return action.homes;

    case RECEIVE_REVIEW:
      newState = merge({}, state)
      let currentHomeReviews = newState.homes[action.review.home_id].reviews;
      currentHomeReviews = action.review.concat(currentHomeReviews);
      return newState;

    case RECEIVE_DELETION:
      newState = Object.assign({}, state);
      delete newState[action.id];
      return newState;

    default:
      return state;
  }
};

export default HomeReducer;
