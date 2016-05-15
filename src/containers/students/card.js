import React from 'react';
import { browserHistory } from 'react-router';
import { identity } from 'lodash';

import Progress from '../../helpers/progress.js';

export default ({ student, selectStudent, updateStudent, saveStudentToLocalStorage }) => {
  const message = `mailto:student@email.com?subject=Coaching By Hack Reactor&body=Hello
  -Student Name Here -,%0D%0A%0D%0A Welcome to your Personal Coaching .%0D%0A%0D%0A
  Here will body of the email where we can put whatever we like`;
  const onDetailsClick = () => {
    selectStudent(student);
    console.log(saveStudentToLocalStorage);
    saveStudentToLocalStorage(student);
    browserHistory.push('/student');
  };

  const onCheckBoxClick = () => {
    student.contacted = student.contacted === '' ? 'checked' : '';
    updateStudent(student);
  };

  const levelUp = () => {
    student.level += 1;
    updateStudent(student);
  };

  return (
    <div className="student">
      {/* {console.log(student)} */}
      <div className="card student-card">
          <div className="card-content">
            <span className="card-title activator grey-text text-darken-4" >{student.name}
              <i className="fa fa-edit right"> Contact</i></span>
            <p className="card-email">{student.email}</p>
            <hr />
            <p className=""> Inverview:<span className="right">{student.interview}</span> </p>
            <p className=""> Decision:<span className="right">{student.decision}</span> </p>
            <p className="contacted"> Contacted:
              <input type="checkbox" id="contacted" checked={student.contacted} onChange={identity} />
              <label htmlFor="contacted" className="right" onClick={onCheckBoxClick}></label> </p>
            <span className="progress-text">Current progress: {student.level} of 8</span>
            <Progress className="students-progress-bar" number={student.level} />
            <p><a className="waves-effect waves-light btn right details" onClick={onDetailsClick}>Details</a></p>
          </div>
          <div className="card-reveal">
            <span className="card-title purple-text text-darken-5">Contact<i className="fa fa-close right"></i></span>
            <p className="action-text"> Introduction Email: <a href={message} className="waves-effect waves-light btn right">Send</a></p>
            <p className="action-text"> Reminder Email:<a className="waves-effect waves-light btn right">Send</a></p>
            <p className="action-text"> On-Hold Email:<a className="waves-effect waves-light btn right">Send</a></p>
          </div>
        </div>
      </div>
  );
};
