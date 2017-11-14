import * as APIUtil from '../util/confirmation_api_util'

export const RECEIVE_CONFIRMATION = 'RECEIVE_CONFIRMATION';
export const CLEAR_CONFIRMATION = 'CLEAR_CONFIRMATION';

export const receiveConfirmation = confirmation => ({
  type: RECEIVE_CONFIRMATION,
  confirmation
});

export const clearConfirmation = () => ({
  type: CLEAR_CONFIRMATION
});

export const fetchConfirmation = () => dispatch => (
  APIUtil.fetchConfirmation().then(confirmation => (
    dispatch(receiveConfirmation(confirmation)))
  )
);

export const createConfirmation = confirmation => dispatch => (
  APIUtil.createConfirmation(confirmation).then(confirmation => (
    dispatch(receiveConfirmation(confirmation)))
  )
);

export const deleteConfirmation = () => dispatch => (
  APIUtil.deleteConfirmation().then( () => (
    dispatch(clearConfirmation()))
  )
)
