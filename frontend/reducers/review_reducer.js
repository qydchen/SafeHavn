import merge from 'lodash/merge';

import {
  RECEIVE_REVIEWS,
  RECEIVE_REVIEW,
  RECEIVE_ERRORS,
  CLEAR_ERRORS,
} from '../actions/review_actions';

const defaultState = [];

const ReviewReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState;
  let errors;
  switch(action.type) {
    case RECEIVE_REVIEWS:
      return action.reviews;
    case RECEIVE_REVIEW:
      newState = state.concat(action.review);
      return newState
    case RECEIVE_ERRORS:
      errors = action.errors;
      return merge({}, state, {
        errors
      });
    case CLEAR_ERRORS:
      errors = [];
      return Object.assign({}, state, {
        errors
      });
    default:
      return state;
  }
};

export default ReviewReducer;
