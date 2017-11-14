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

export const receiveDeletedTrip = trip => ({
  type: RECEIVE_DELETION,
  trip
});

export const fetchTrips = (visitorid) => dispatch => (
  APIUtil.fetchTrips(visitorid).then(trips => (
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

export const deleteTrip = trip => dispatch => (
  APIUtil.deleteTrip(trip).then(trip => (
    dispatch(receiveDeletedTrip(trip)))
  )
)
