export const fetchTrips = (data) => (
  $.ajax({
    method: 'GET',
    url: 'api/trips',
    data,
  })
);

export const fetchTrip = id => (
  $.ajax({
    method: 'GET',
    url: `api/trips/${id}`,
  })
);

export const createTrip = data => (
  $.ajax({
    method: 'POST',
    url: 'api/trips',
    data,
    contentType: false,
    processData: false,
  })
);

export const deleteTrip = id => (
  $.ajax({
    method: 'DELETE',
    url: `api/trips/${id}`,
  })
);
