export const fetchReviews = home_id => (
  $.ajax({
    method: 'GET',
    url: 'api/reviews',
    data: { home_id }
  })
);


export const createReview = review => (
  $.ajax({
    method: 'POST',
    url: 'api/reviews',
    data: { review }
  })
);
