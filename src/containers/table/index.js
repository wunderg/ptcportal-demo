import React, { PropTypes } from 'react';
import Row from './row';

const Table = (props) => (
  <table className="bordered highlight centered">
    <thead>
      <tr>
        <th data-field="Name">Name</th>
        <th data-field="Email">Email</th>
        <th data-field="Lesson">Lesson</th>
        <th data-field="Level">Level</th>
        <th data-field="Interview">Interview</th>
        <th data-field="Decision">Decision</th>
      </tr>
    </thead>

    <tbody>
      { props.data.students.map(student => <Row key={student.id} data={student} />) }
    </tbody>
  </table>
);

Table.propTypes = {
  data: PropTypes.object,
  students: PropTypes.array
};

export default Table;
