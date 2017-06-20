import { merge } from 'lodash';

import {
  RECEIVE_CURRENT_USER,
  RECEIVE_ERRORS
} from '../actions/session_actions';

const defaultUser = {
  currentUser: null,
  errors: []
};

const SessionReducer = (state = defaultUser, action) => {
  Object.freeze(state)
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return merge({}, defaultUser, {
        currentUser
      });
    case RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, defaultUser, {
        errors
      });
    default:
      return state;
  }
};

export default SessionReducer;
