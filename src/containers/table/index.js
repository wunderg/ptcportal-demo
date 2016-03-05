import React from 'react';

export default (props) => (
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
          <tr>
            <td>Alvin</td>
            <td>Eclair</td>
            <td>$0.87</td>
            <td>$7.00</td>
            <td>$7.00</td>
            <td>$7.00</td>
          </tr>
          <tr>
            <td>Alan</td>
            <td>Jellybean</td>
            <td>$3.76</td>
            <td>$7.00</td>
            <td>$7.00</td>
            <td>$7.00</td>
          </tr>
          <tr>
            <td>Jonathan</td>
            <td>Lollipop</td>
            <td>$7.00</td>
            <td>$7.00</td>
            <td>$7.00</td>
            <td>$7.00</td>
          </tr>
        </tbody>
      </table>
);
