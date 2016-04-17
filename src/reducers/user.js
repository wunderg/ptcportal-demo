import * as ACTIONS from '../actions/constants.js';

export default (state = {}, action) => {
  console.log(action);
  switch (action.type) {
    case ACTIONS.LOGIN_REQUEST:
      return {...state, isFetching: true, isAuthenticated: false, user: action.creds};
    case ACTIONS.LOGIN_SUCCESS:
      return {...state, isFetching: false, isAuthenticated: true, id_token: action.id_token};
    default:
      return state;
  }
};
