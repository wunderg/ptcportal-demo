import axios from 'axios';
import * as ACTIONS from './constants';


function requestLogin(creds) {
  return {
    type: ACTIONS.LOGIN_REQUEST,
    isFetching: true,
    isAuthenticated: false,
    creds
  };
}


function recieveLogin(user) {
  return {
    type: ACTIONS.LOGIN_SUCESS,
    isFetching: false,
    isAuthenticated: true,
    id_token: user.id_token
  };
}


function loginError(message) {
  return {
    type: ACTIONS.LOGIN_FAILURE,
    isFetching: false,
    isAuthenticated: false,
    message
  };
}

export function loginUser(creds, dispatch) {
  console.log(creds, 'action', dispatch);
  return dispatch(requestLogin(creds));
}
