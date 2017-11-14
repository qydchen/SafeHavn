export const fetchTrips = data => (
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

export const createTrip = trip => (
  $.ajax({
    method: 'POST',
    url: 'api/trips',
    data: trip,
  })
);

export const deleteTrip = trip => (
  $.ajax({
    method: 'DELETE',
    url: `api/trips/${trip.id}`,
  })
);
