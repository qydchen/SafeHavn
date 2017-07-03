import { merge } from 'lodash';

import {
  RECEIVE_REVIEW,
  RECEIVE_REVIEWS,
  RECEIVE_DELETION,
} from '../actions/review_actions';

const defaultState = {};

const ReviewReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_REVIEW:

      newState = merge({}, state, {[action.review.id]: action.review})
      return newState;

    case RECEIVE_REVIEWS:
      return action.reviews;

    case RECEIVE_DELETION:
      newState = Object.assign({}, state);
      delete newState[action.id];
      return newState;

    default:
      return state;
  }
};

export default ReviewReducer;
