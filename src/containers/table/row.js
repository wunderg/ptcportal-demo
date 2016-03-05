import React from 'react';

export default (student) => (
  <tr>
    <td>{student.data.name}</td>
    <td>{student.data.email}</td>
    <td>{student.data.lesson}</td>
    <td>{student.data.level}</td>
    <td>{student.data.interview}</td>
    <td>{student.data.decision}</td>
  </tr>
);
