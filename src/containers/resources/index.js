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
              <h4><b>Coding Practice</b></h4>
              <hr />
              <p><a>Awesome Link</a></p>
              <p><a>Awesome Link</a></p>
              <p><a>Awesome Link</a></p>
              <p><a>Awesome Link</a></p>
              <h4><b>Books</b></h4>
              <hr />
              <p><a>Awesome Link</a></p>
              <p><a>Awesome Link</a></p>
              <p><a>Awesome Link</a></p>
              <p><a>Awesome Link</a></p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Resources;
