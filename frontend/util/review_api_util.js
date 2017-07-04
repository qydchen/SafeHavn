export const fetchReviews = home_id => (
  $.ajax({
    method: 'GET',
    url: 'api/reviews',
    data: { home_id }
  })
);


export const createReview = data => (
  $.ajax({
    method: 'POST',
    url: 'api/reviews',
    data
  })
);
