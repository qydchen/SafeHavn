import * as APIUtil from '../util/trip_api_util'

export const RECEIVE_TRIPS = 'RECEIVE_TRIPS';
export const RECEIVE_TRIP = 'RECEIVE_TRIP';
export const RECEIVE_DELETION = 'RECEIVE_DELETION';

export const receiveTrips = trips => ({
  type: RECEIVE_TRIPS,
  trips
});

export const receiveTrip = trip => ({
  type: RECEIVE_TRIP,
  trip
});

export const receiveDeletedTrip = id => ({
  type: RECEIVE_DELETION,
  id
});

export const fetchTrips = () => dispatch => (
  APIUtil.fetchTrips().then(trips => (
    dispatch(receiveTrips(trips)))
  )
);

export const fetchTrip = id => dispatch => (
  APIUtil.fetchTrip(id).then(trip => (
    dispatch(receiveTrip(trip)))
  )
);

export const createTrip = trip => dispatch => (
  APIUtil.createTrip(trip).then(trip => (
    dispatch(receiveTrip(trip)))
  )
);

export const deleteTrip = id => dispatch => (
  APIUtil.deleteTrip(id).then(trip => (
    dispatch(receiveDeletedTrip(trip)))
  )
)
