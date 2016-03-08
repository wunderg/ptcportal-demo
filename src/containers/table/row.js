import React from 'react';
import { browserHistory } from 'react-router';

const onClick = (id) => browserHistory.push('/student');

export default (student) => (
  <tr onClick={onClick}>
    <td>{student.data.name}</td>
    <td>{student.data.email}</td>
    <td>{student.data.lesson}</td>
    <td>{student.data.level}</td>
    <td>{student.data.interview}</td>
    <td>{student.data.decision}</td>
  </tr>
);
