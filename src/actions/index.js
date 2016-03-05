import axios from 'axios';
import * as ACTIONS from './constants';

export function addStudent(student) {
  const nextId = Math.floor(Math.random() * 100);
  return {
    type: ACTIONS.ADD_STUDENT,
    _id: nextId,
    lesson: 0,
    level: 0,
    interview: 'not set',
    decision: 'pending',
    name: student.name,
    email: student.email
  };
}
export function fetchTodos() {
  const request = axios.get(`api/task`);
  return {
    type: ACTIONS.FETCH_TODOS,
    payload: request
  };
}
