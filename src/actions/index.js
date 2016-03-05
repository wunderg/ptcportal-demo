import axios from 'axios';
import * as ACTIONS from './constants';

export function addTodo(text) {
  const nextId = Math.floor(Math.random() * 100);
  return {
    type: ACTIONS.ADD_STUDENT,
    _id: nextId,
    text
  };
}
export function fetchTodos() {
  const request = axios.get(`api/task`);
  return {
    type: ACTIONS.FETCH_TODOS,
    payload: request
  };
}
