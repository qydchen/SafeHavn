import { merge } from 'lodash';

import {
  RECEIVE_REVIEWS,
  RECEIVE_REVIEW,
} from '../actions/review_actions';

const defaultState = [];

const ReviewReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState;

  switch(action.type) {
    case RECEIVE_REVIEWS:
      return action.reviews;
    case RECEIVE_REVIEW:
      newState = state.concat(action.review);
      debugger;
      return newState
    default:
      return state;
  }
};

export default ReviewReducer;
