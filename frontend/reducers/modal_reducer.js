import {LOGIN, SIGNUP} from '../actions/modal_actions';
import merge from "lodash/merge";

const ModalReducer = (state = null, action) => {
  switch(action.type){
    case LOGIN:
      return action.modal;
    case SIGNUP:
      return action.modal;
    default:
      return null;
  }
};

export default ModalReducer;
