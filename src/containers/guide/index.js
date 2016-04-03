import React, { Component } from 'react';
import './style.scss';

class Guide extends Component {
  componentWillMount() {
    $(function() {
      $('.scrollspy').scrollSpy();
    });
  }
  render() {
    return (
      <div className="row">
        <div className="col s12 m9 l10">
          <div id="level-0" className="section scrollspy">
            <div className="card">
              <div className="card-content">
                <h3> Level 0</h3>
                <p>Here is some more information about this product that is only revealed once clicked on.</p>
              </div>
            </div>
          </div>
          {/* level-0 */}

          <div id="structure" className="section scrollspy">
            <p>Content </p>
          </div>

          <div id="initialization" className="section scrollspy">
            <p>Content </p>
          </div>
        </div>
        <div className="col hide-on-small-only m3 l2">
          <ul className="section table-of-contents">
            <li><a href="#Level-0">Level 0</a></li>
            <li><a href="#Level-1">Level 1</a></li>
            <li><a href="#Level-2">Level 2</a></li>
            <li><a href="#Level-3">Level 3</a></li>
            <li><a href="#Level-4">Level 4</a></li>
            <li><a href="#Level-5">Level 5</a></li>
            <li><a href="#Level-6">Level 6</a></li>
            <li><a href="#Level-7">Level 7</a></li>
          </ul>
        </div>
      </div>
    );
  }
}


export default Guide;
