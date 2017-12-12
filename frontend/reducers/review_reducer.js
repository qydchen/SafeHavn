import merge from 'lodash/merge';

import {
  RECEIVE_REVIEW,
} from '../actions/review_actions';

import {
  RECEIVE_HOME
} from '../actions/home_actions';

const defaultState = [];

const ReviewReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState;
  let errors;
  switch(action.type) {
    case RECEIVE_HOME: // receive_home includes the reviews
      return action.home.reviews;
    case RECEIVE_REVIEW:
      newState = state.concat(action.review);
      return newState
    default:
      return state;
  }
};

export default ReviewReducer;
