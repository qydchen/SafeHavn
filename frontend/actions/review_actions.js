import * as APIUtil from '../util/review_api_util'
// export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS';
// export const RECEIVE_DELETION = 'RECEIVE_DELETION';

// export const receiveReview = review => ({
//   type: RECEIVE_REVIEW,
//   review
// });

export const receiveReviews = reviews => ({
  type: RECEIVE_REVIEWS,
  reviews
});

// export const receiveDeletedReview = id => ({
//   type: RECEIVE_DELETION,
//   id
// });

export const createReview = review => dispatch => (
  APIUtil.createReview(review).then(review => (
    dispatch(receiveReview(review)))
  )
);

export const fetchReviews = homeid => dispatch => (
  APIUtil.fetchReviews(homeid).then(reviews => (
    dispatch(receiveReviews(reviews)))
  )
);

// export const updateReview = review => dispatch => (
//   APIUtil.updateReview(review).then(review => (
//     dispatch(receiveReview(review)))
//   )
// );

// export const deleteReview = id => dispatch => (
//   APIUtil.deleteReview(id).then(review => (
//     dispatch(receiveDeletedReview(review)))
//   )
// );
