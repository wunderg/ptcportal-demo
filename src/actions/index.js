import axios from 'axios';
import * as ACTIONS from './constants';

export function addTodo(text) {
  const nextId = Math.floor(Math.random() * 100);
  return {
    type: ACTIONS.ADD_TODO,
    _id: nextId,
    text
  };
}

export function toggleTodo(_id) {
  return {
    type: ACTIONS.TOGGLE_TODO,
    _id
  };
}

export function fetchTodos() {
  const request = axios.get(`api/task`);
  return {
    type: ACTIONS.FETCH_TODOS,
    payload: request
  };
}

export function postTodo(todo) {
  const request = axios.post(`api/task/`, todo);
  return {
    type: ACTIONS.POST_TODO,
    payload: request
  };
}

export function deleteTodo(id) {
  const request = axios.delete(`api/task/${id}`);
  return {
    type: ACTIONS.DELETE_TODO,
    payload: request,
    id
  };
}

export function showAll(todos) {
  return {
    type: ACTIONS.SHOW_ALL,
    payload: todos
  };
}

export function showCompleted(todos) {
  return {
    type: ACTIONS.SHOW_COMPLETED,
    payload: todos
  };
}

export function showInProgress(todos) {
  return {
    type: ACTIONS.SHOW_IN_PROGRESS,
    payload: todos
  };
}
