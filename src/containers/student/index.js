import React, { Component } from 'react';
import Info from './info';
import Notes from './notes';
import Sessions from './sessions';
import Ratings from './ratings';
import './style.scss';

class Student extends Component {

  render() {
    return (
      <div className="row">

        {/* <div className="col s12 m6"> */}
          <Info />
        {/* </div> */}

        {/* <div className="col s12 m6"> */}
          <Ratings />
        {/* </div> */}

        {/* <div className="col s12 m6"> */}
          <Sessions />
        {/* </div> */}

        {/* <div className="col s12 m6"> */}
          <Notes />
        {/* </div> */}

      </div>
    );
  }
}
export default Student;
