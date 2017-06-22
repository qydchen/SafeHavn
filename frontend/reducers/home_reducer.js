import { merge } from 'lodash';

import {
  RECEIVE_HOMES,
  RECEIVE_HOME,
  RECEIVE_REVIEW
} from '../actions/home_actions';

const defaultState = {
  entities: {}
  currentHome: null
};

const HomeReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_HOME:
      newState = merge({}, state,
        {
          entities: {
            [action.home.id]: {action.home},
          },
          currentHome: action.home.id
        }
      )
      return newState;

    case RECEIVE_HOMES:
      newState = merge({}, state,
        {
          entities: action.homes
        }
      )
      return newState;

    // case RECEIVE_REVIEW:
    //
    //   return merge({}, state, { entities: {},
    //     currentHome
    //   });

    default:
      return state;
  }
};

export default HomeReducer;
