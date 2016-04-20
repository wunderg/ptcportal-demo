import * as ACTIONS from '../actions/constants.js';

export default (state = {}, action) => {
  console.log(action);
  switch (action.type) {
    case ACTIONS.LOGIN_REQUEST:
      return {...state, isFetching: true, isAuthenticated: false, user: action.creds};
    case ACTIONS.LOGIN_SUCCESS:
      return {...state, isFetching: false, isAuthenticated: true, id_token: action.id_token};
    case ACTIONS.LOGIN_FAILURE:
      return {...state, isFetching: false, isAuthenticated: false, id_token: false};
    case ACTIONS.SINGUP_REQUEST:
      return {...state, isFetching: true, isAuthenticated: false, user: action.creds};
    case ACTIONS.SINGUP_SUCCESS:
      return {...state, isFetching: false, isAuthenticated: true, id_token: action.id_token};
    case ACTIONS.SINGUP_FAILURE:
      return {...state, isFetching: false, isAuthenticated: false, id_token: false};
    default:
      return state;
  }
};
