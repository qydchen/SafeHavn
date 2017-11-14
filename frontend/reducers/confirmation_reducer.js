import { merge } from 'lodash';

import { FETCH_CONFIRMATION, RECEIVE_DELETION } from '../actions/confirmation_actions';

const defaultConfirmations = {};

const ConfirmationReducer = (state = defaultConfirmations, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case FETCH_CONFIRMATION:
      return action.confirmation;

    case RECEIVE_DELETION:
      return {};

    default:
      return state;
  }
};

export default ConfirmationReducer;
