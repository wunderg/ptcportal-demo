import React from 'react';
import Progress from '../../helpers/progress.js';

import { browserHistory } from 'react-router';


const onClick = () => browserHistory.push('/student');

export default ({ student }) => (
  <div className="student">
    {console.log(student)}
    <div className="card">
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4" >{student.name}<i className="fa fa-edit right"> Actions</i></span>
          <p className='card-email'>{student.email}</p>
          <hr />
          <p className='contacted'> Contacted: <i className="green-text text-darken-1 fa fa-check right checkmark"></i> </p>
          <p className=''> Inverview:<span className="right"> April 25th</span> </p>
          <p className=''> Decision:<span className="right"> Accepted</span> </p>
          <span className="progress-text">Current progress: 5 of 8</span>
          <Progress className="students-progress-bar" />
          <p> <a className="waves-effect waves-light btn right details" onClick={onClick}>Details</a></p>
        </div>
        <div className="card-reveal">
          <span className="card-title purple-text text-darken-5">Actions<i className="fa fa-close right"></i></span>
          <p className='action-text'> Complete Lesson: <a className="waves-effect waves-light btn right">Done</a> </p>
          <p className='action-text'> Introduction Email: <a href="mailto:student@email.com?subject=Coaching By Hack Reactor&body=Hello -Student Name Here -,%0D%0A%0D%0A Welcome to your Personal Coaching .%0D%0A%0D%0A Here will body of the email where we can put whatever we like" className="waves-effect waves-light btn right">Send</a></p>
          <p className='action-text'> 1st Remainder Email:<a className="waves-effect waves-light btn right">Send</a></p>
          <p className='action-text'> On-Hold Email:<a className="waves-effect waves-light btn right">Send</a></p>
        </div>
      </div>
    </div>
);
