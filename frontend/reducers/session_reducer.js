import { merge } from 'lodash';

import {
  RECEIVE_CURRENT_USER,
  RECEIVE_ERRORS,
  CLEAR_ERRORS,
  RECEIVE_CONFIRMATION,
  CLEAR_CONFIRMATION,
} from '../actions/session_actions';

const defaultUser = {
  currentUser: null,
  errors: []
};

const SessionReducer = (state = defaultUser, action) => {
  Object.freeze(state);
  let errors;
  let newState;
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return merge({}, defaultUser, {
        currentUser
      });
    case RECEIVE_ERRORS:
      errors = action.errors;
      return merge({}, state, {
        errors
      });
    case CLEAR_ERRORS:
      errors = [];
      return Object.assign({}, state, {
        errors
      });
    case RECEIVE_CONFIRMATION:
      const confirmation = action.confirmation;
      return merge({}, state, {
        confirmation
      });
    case CLEAR_CONFIRMATION:
      newState = Object.assign({}, state);
      delete newState[confirmation];
      return newState;
    default:
      return state;
  }
};

export default SessionReducer;
