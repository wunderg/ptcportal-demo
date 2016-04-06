import React from 'react';
import Progress from '../../helpers/progress.js';

import { browserHistory } from 'react-router';


const onClick = () => browserHistory.push('/student');

export default ({ student }) => (
  <div className="student">
    {console.log(student)}
    <div className="card">
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4" >{student.name}<i className="fa fa-info right"></i></span>
          <hr />
          <span>{student.email}</span>
          <p className='contacted'> Contacted: <i className="green-text text-darken-1 fa fa-check right checkmark"></i> </p>
          <span className="progress-text">Current progress: 5 of 8</span>
          <Progress className="students-progress-bar" />
            <a className="waves-effect waves-light btn right details" onClick={onClick}>Details</a>
        </div>
        <div className="card-reveal">
          <span className="card-title purple-text text-darken-5">Actions<i className="fa fa-close right"></i></span>
          <p className='contacted'> Contacted: <i className="fa fa-check right checkmark"></i> </p>
          <p className='contacted'> Contacted: <i className="fa fa-check right checkmark"></i> </p>
        </div>
      </div>
    </div>
);
