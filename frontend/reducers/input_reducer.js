import { merge } from 'lodash';

import { RECEIVE_INPUT } from '../actions/input_actions';

const defaultState = {
  startDate: "",
  endDate: "",
  guests: 0,
  // showPayment: false,
  // pageToShow: 1
};


const UserInputReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_INPUT:
      let startDate = action.startDate;
      let endDate = action.endDate;
      let guests = action.guests;
      if (startDate && endDate && guests) {
          return newState = merge({}, state, { startDate, endDate, guests })
      } else {
        return state;
      };
    default:
      return state;
  }
};

export default UserInputReducer;
