import * as APIUtil from '../util/confirmation_api_util'

export const RECEIVE_CONFIRMATION = 'RECEIVE_CONFIRMATION';
export const RECEIVE_DELETION = 'RECEIVE_DELETION';

export const receiveConfirmation = confirmation => ({
  type: RECEIVE_CONFIRMATION,
  confirmation
});

export const receiveDeletedConfirmation = confirmation => ({
  type: RECEIVE_DELETION,
  confirmation
});

export const fetchConfirmation = id => dispatch => (
  APIUtil.fetchConfirmation(id).then(confirmation => (
    dispatch(receiveConfirmation(confirmation)))
  )
);

export const createConfirmation = confirmation => dispatch => (
  APIUtil.createConfirmation(confirmation).then(confirmation => (
    dispatch(receiveConfirmation(confirmation)))
  )
);

export const deleteConfirmation = id => dispatch => (
  APIUtil.deleteConfirmation(id).then(confirmations => (
    dispatch(receiveConfirmations(confirmations)))
  )
)
