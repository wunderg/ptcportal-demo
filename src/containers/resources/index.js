import React, { Component } from 'react';
import './style.scss';

class Resources extends Component {

  render() {
    return (
      <div className="row resources">
        <div className="card deep-purple lighten-5">
          <div className="card-content">
            <h3>Student Resources</h3>
            <hr />
            <div className="card-panel">
              <h4><b>Feedback and Questions</b></h4>
              <hr />
              <p>Write <a href="mailto:josh.shaman@hackreactor.com">josh.shaman@hackreactor.com</a> with any suggested revisions, feedback, and questions.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Resources;
