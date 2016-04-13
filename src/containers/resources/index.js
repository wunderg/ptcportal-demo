import React, { Component } from 'react';
import './style.scss';

class Resources extends Component {
  componentDidMount(){
    $(document).ready(function(){
      $('ul.tabs').tabs();
    });
  }

  render() {
    return (

      <div className="row resource">
        <div className="col s12">
          <ul className="tabs">
            <li className="tab col s3"><h5><a href="#student">Student</a></h5></li>
            <li className="tab col s3"><h5><a className="active" href="#teacher">Instructor</a></h5></li>
          </ul>
        </div>
        <div id="student" className="col s12">
          <div className="card deep-purple lighten-5">
            <div className="card-content">
              <h3>Instructor Resources</h3>
              <hr />
              <div className="card-panel">
                <h4><b>Email Templates</b></h4>
                <hr />
                <p><a>Awesome Link</a></p>
                <p><a>Awesome Link</a></p>
                <p><a>Awesome Link</a></p>
                <p><a>Awesome Link</a></p>
              </div>
            </div>
          </div>
        </div>
        <div id="teacher" className="col s12">
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
      </div>
    );
  }
}

export default Resources;
