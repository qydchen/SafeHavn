import { combineReducers } from 'redux';

import session from './session_reducer';
import modal from './modal_reducer';
import home from '.home_reducer';


const RootReducer = combineReducers({
  session,
  modal,
  home
});

export default RootReducer;
