import { merge } from 'lodash';

import { RECEIVE_INPUT } from '../actions/input_actions';

const defaultState = {
  startDate: null,
  endDate: null,
  num_guests: 0,
};

const UserInputReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_INPUT:
      let startDate = action.startDate;
      let endDate = action.endDate;
      let num_guests = action.num_guests;
      if (startDate && endDate && num_guests) {
        return newState = merge({}, state, { startDate, endDate, num_guests })
      } else {
        return state;
      };
    default:
      return state;
  }
};

export default UserInputReducer;
