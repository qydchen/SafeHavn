import { RECEIVE_CONFIRMATION, CLEAR_CONFIRMATION } from '../actions/confirmation_actions';

const defaultConfirmations = {};

const ConfirmationReducer = (state = defaultConfirmations, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_CONFIRMATION:
      return action.confirmation;
    case CLEAR_CONFIRMATION:
      return {};
    default:
      return state;
  }
};

export default ConfirmationReducer;
