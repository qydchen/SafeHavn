import * as APIUtil from '../util/review_api_util'
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';

export const receiveReview = review => ({
  type: RECEIVE_REVIEW,
  review
});

export const createReview = review => dispatch => (
  APIUtil.createReview(review).then(review => (
    dispatch(receiveReview(review)))
  )
);
