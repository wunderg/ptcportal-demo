import React from 'react';
import './student.css';

const style = {
  zIndex: 1,
};

const Student = (props) => (
  <div className="row">
    <div className="col s12" style={style}>
      <ul className="tabs grey lighten-5">
        <li className="tab col s3 blue-text text-darken-2"><a href="#test1">Notes</a></li>
        <li className="tab col s3"><a className="active" href="#test2">Emails</a></li>
        <li className="tab col s3"><a href="#test3">Sessions</a></li>
      </ul>
    </div>
    <div id="test1" className="col s12">Notes will go here</div>
    <div id="test2" className="col s12">emails will be here</div>
    <div id="test3" className="col s12">Sessions</div>
  </div>
);

export default Student;
