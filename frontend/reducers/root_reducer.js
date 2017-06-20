import { combineReducers } from 'redux';

import session from './session_reducer';
import modal from './modal_reducer';


const RootReducer = combineReducers({
  session,
  modal
});

export default RootReducer;
