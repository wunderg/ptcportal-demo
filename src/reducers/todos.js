import { ADD_TODO, TOGGLE_TODO, FETCH_TODOS, DELETE_TODO } from '../actions/constants';
import todo from './todo';

export default (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, todo(undefined, action)];
    case TOGGLE_TODO:
      return state.map(item => todo(item, action));
    case FETCH_TODOS:
      return todo(undefined, action);
    case DELETE_TODO:
      return state.filter(item => todo(item, action));
    default:
      return state;
  }
};
