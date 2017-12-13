import { combineReducers } from 'redux';

import session from './session_reducer';
import modal from './modal_reducer';
import homes from './home_reducer';
import filters from './filter_reducer';
import trips from './trip_reducer';
import confirmations from './confirmation_reducer';
import map from './map_reducer';

const RootReducer = combineReducers({
  session,
  modal,
  homes,
  filters,
  trips,
  confirmations,
  map,
});

export default RootReducer;
