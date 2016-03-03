import { ADD_TODO, SHOW_ALL, SHOW_COMPLETED, SHOW_IN_PROGRESS, FETCH_TODOS, TOGGLE_TODO, DELETE_TODO } from '../actions/constants.js';
import todo from './todo';

const INITIAL_STATE = {
  todos: [],
  all: true,
  comp: false,
  prog: false
};

export default (state = INITIAL_STATE, action) => {
  // console.log('state:', state, 'action:', action);
  switch (action.type) {
    case SHOW_ALL:
      return {...state, all: true, prog: false, comp: false, todos: action.payload}
    case DELETE_TODO:
      return {...state, todos: state.todos.filter(item => todo(item, action))};
    case FETCH_TODOS:
      return {...state, todos: action.payload.data}
    case SHOW_COMPLETED:
      return {...state, all: false, prog: false, comp: true, todos: action.payload.filter(item => todo(item, action))};
    case SHOW_IN_PROGRESS:
      return {...state, all: false, prog: true, comp: false, todos: action.payload.filter(item => todo(item, action))};
    case TOGGLE_TODO:
      return {...state, todos: state.todos.map(item => todo(item, action))};
    case ADD_TODO:
      return {...state, todos: [...state.todos, todo(undefined, action)]};
    default:
      return state;
  }
};
