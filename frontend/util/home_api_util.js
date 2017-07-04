export const fetchHomes = (data) => (
  $.ajax({
    method: 'GET',
    url: 'api/homes',
    data,
  })
);

export const fetchHome = id => (
  $.ajax({
    method: 'GET',
    url: `api/homes/${id}`
  })
);

export const createHome = data => (
  $.ajax({
    method: 'POST',
    url: 'api/homes',
    data,
    contentType: false,
    processData: false,
  })
);

export const deleteHome = id => (
  $.ajax({
    method: 'DELETE',
    url: `api/homes/${id}`,
  })
);

export const updateHome = data => (
  $.ajax({
    method: 'PATCH',
    url: `api/homes/${id}`,
    data
  })
);

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
