import React from 'react';
import Progress from '../../helpers/progress.js';

import { browserHistory } from 'react-router';


const onClick = () => browserHistory.push('/student');

export default ({ student }) => (
  <div className="student">
    {console.log(student)}
    <div className="card">
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4" onClick={onClick}>{student.name}<i className="fa fa-info right"></i></span>
          <hr />
          <span>{student.email}</span>
          <p className="progress-text">Progress: 5 of 8</p>
          <Progress className="students-progress-bar" />
        </div>
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4">Card Title<i className="fa fa-close right"></i></span>
          <p>Here is some more information about this product that is only revealed once clicked on.</p>
        </div>
      </div>
    </div>
);
