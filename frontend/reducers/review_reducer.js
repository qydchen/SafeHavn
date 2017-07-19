import { merge } from 'lodash';

import {
  RECEIVE_REVIEWS,
} from '../actions/review_actions';

const defaultState = [];

const ReviewReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {

    case RECEIVE_REVIEWS:
      return action.reviews;

    default:
      return state;
  }
};

export default ReviewReducer;
