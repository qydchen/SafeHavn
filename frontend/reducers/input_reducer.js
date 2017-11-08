import { merge } from 'lodash';
import { RECEIVE_INPUT, RECEIVE_CONFIRMATION, CLEAR_CONFIRMATION } from '../actions/input_actions';

const defaultState = {
  startDate: null,
  endDate: null,
  numGuests: 0,
};

const UserInputReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_INPUT:
      let startDate = action.startDate;
      let endDate = action.endDate;
      let numGuests = action.numGuests;
      if (startDate && endDate && numGuests) {
        return newState = merge({}, state, { startDate, endDate, numGuests })
      } else {
        return state;
      };
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

export default UserInputReducer;
