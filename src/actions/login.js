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
    type: ACTIONS.LOGIN_SUCCESS,
    isFetching: false,
    isAuthenticated: true,
    id_token: user.data.id_token
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
  return () => {
    dispatch(requestLogin(creds));
    return axios.post('api/login', creds)
      .then(res => dispatch(recieveLogin(res)))
      .catch(err => dispatch(loginError(err)));
  };
}
