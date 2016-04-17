import * as ACTIONS from '../actions/constants.js';

export default (state = {}, action) => {
  console.log(action);
  switch (action.type) {
    case ACTIONS.LOGIN_REQUEST:
      return {...state, isFetching: true, isAuthenticated: false, user: action.creds};
    default:
      return state;
  }
};
