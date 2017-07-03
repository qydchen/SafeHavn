import { combineReducers } from 'redux';

import session from './session_reducer';
import modal from './modal_reducer';
import homes from './home_reducer';
import filters from './filter_reducer';
import trips from './trip_reducer';
import inputs from './input_reducer';
// import reviews from './review_reducer';


const RootReducer = combineReducers({
  session,
  modal,
  homes,
  filters,
  trips,
  inputs,
  // reviews
});

export default RootReducer;
