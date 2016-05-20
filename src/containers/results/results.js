import React, { Component, PropTypes } from 'react';
import './style.scss';

import Row from './row.js';


export class Results extends Component {
  render() {
    return (
      <div className="row">
        <div className="col s12">

          <table className="highlight results-table">
            <thead>
              <tr>
                <th data-field="id">Instructor Name</th>
                <th data-field="name">Students Now</th>
                <th data-field="price">Students Accepted</th>
                <th data-field="price">Will complete in two weeks</th>
              </tr>
            </thead>

            <tbody>
              <Row />
              <tr>
                <td>Total</td>
                <td>5</td>
                <td>10</td>
                <td>20</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Results;
