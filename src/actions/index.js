import axios from 'axios';
import * as ACTIONS from './constants';

export function addStudent(student) {
  const nextId = Math.floor(Math.random() * 100);
  const data = {
    _id: nextId,
    lesson: 0,
    level: 0,
    interview: 'not set',
    decision: 'pending',
    name: student.name,
    email: student.email
  };
  axios.post(`api/student`, data)
  .then(res => console.log(res))
  .then(err => console.log(err));
  return {
    type: ACTIONS.ADD_STUDENT,
    payload: data
  };
}

export function fetchStudents() {
  const token = localStorage.getItem('id_token') || null;

  const config = {
    headers: { Authorization: token }
  };

  const request = axios.get(`api/students`, config);
  return {
    type: ACTIONS.FETCH_STUDENTS,
    payload: request
  };
}
