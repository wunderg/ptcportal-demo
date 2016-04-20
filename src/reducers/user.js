import * as ACTIONS from '../actions/constants.js';

export default (state = {}, action) => {
  console.log(action);
  switch (action.type) {
    case ACTIONS.LOGIN_REQUEST:
      return {...state, isFetching: true, isAuthenticated: false, name: action.creds.email};
    case ACTIONS.LOGIN_SUCCESS:
      return {...state, isFetching: false, isAuthenticated: true, id_token: action.id_token};
    case ACTIONS.LOGIN_FAILURE:
      return {...state, isFetching: false, isAuthenticated: false, id_token: false, message: action.message.data.error};
    case ACTIONS.SIGNUP_REQUEST:
      return {...state, isFetching: true, isAuthenticated: false, name: action.creds.email};
    case ACTIONS.SIGNUP_SUCCESS:
      return {...state, isFetching: false, isAuthenticated: true, id_token: action.id_token};
    case ACTIONS.SIGNUP_FAILURE:
      return {...state, isFetching: false, isAuthenticated: false, id_token: false, message: action.message.data.error};
    default:
      return state;
  }
};