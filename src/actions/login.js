import axios from 'axios';
import * as ACTIONS from './constants';

function saveToLocalStorage(token) {
  localStorage.setItem('id_token', token);
}

function requestSignup(creds) {
  return {
    type: ACTIONS.SIGNUP_REQUEST,
    creds
  };
}

function recieveSignup(user) {
  saveToLocalStorage(user.data.id_token);
  return {
    type: ACTIONS.SIGNUP_SUCCESS,
    id_token: user.data.id_token
  };
}

function signupError(message) {
  return {
    type: ACTIONS.SIGNUP_FAILURE,
    message
  };
}

export function signupUser(creds) {
  return dispatch => {
    dispatch(requestSignup(creds));
    return axios.post('api/signup', creds)
      .then(res => dispatch(recieveSignup(res)))
      .catch(err => dispatch(signupError(err)));
  };
}

function requestLogin(creds) {
  return {
    type: ACTIONS.LOGIN_REQUEST,
    creds
  };
}

function recieveLogin(user) {
  if (user.data && user.data.id_token) {
    saveToLocalStorage(user.data.id_token);
  }
  return {
    type: ACTIONS.LOGIN_SUCCESS,
    name: user
  };
}

function loginError(message) {
  return {
    type: ACTIONS.LOGIN_FAILURE,
    message
  };
}

export function loginUser(creds) {
  return dispatch => {
    dispatch(requestLogin(creds));
    return axios.post('api/login', creds)
      .then(res => dispatch(recieveLogin(res)))
      .catch(err => dispatch(loginError(err)));
  };
}

export function loginWithToken(token) {
  const config = {
    headers: { Authorization: token }
  };
  return dispatch => {
    dispatch(requestLoginWithToken());
    return axios.get('api/tokenlogin', config)
    .then(res => dispatch(recieveTokenLogin(res)))
    .catch(err => dispatch(tokenLoginError(err)));
  };
}

function requestLoginWithToken() {
  return {
    type: ACTIONS.TOKEN_LOGIN_REQUEST
  };
}

function recieveTokenLogin(user) {
  return {
    type: ACTIONS.TOKEN_LOGIN_SUCCESS,
    name: user
  };
}

function tokenLoginError(message) {
  return {
    type: ACTIONS.TOKEN_LOGIN_FAILURE,
    message
  };
}

export function logout() {
  localStorage.removeItem('id_token');
  return {
    type: ACTIONS.LOGOUT
  }
}
