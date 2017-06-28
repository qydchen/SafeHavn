// import { merge } from 'lodash';
//
// import { RECEIVE_INPUT } from '../actions/input_actions';
//
// const defaultState = {
//   startDate: "",
//   endDate: "",
//   guests: 0,
//   showPayment: false,
//   pageToShow: 1
// };
// 
//
// const UserInputReducer = (state = defaultState, action) => {
//   Object.freeze(state);
//   let newState;
//   switch(action.type) {
//     case RECEIVE_INPUT:
//       startDate = action.startDate;
//       endDate = action.endDate;
//       guests = action.guests;
//       if (startDate && endDate && guests) {
//           return newState = merge({}, state, { startDate, endDate, guests, showPayment: true, pageToShow: 2 })
//       } else {
//         return state;
//       };
//     default:
//       return state;
//   }
// };
//
// export default UserInputReducer;
