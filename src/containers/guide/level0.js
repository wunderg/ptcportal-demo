import React from 'react';
import Highlight from '../../helpers/highlight.js';

const each = `function each(collection, callback){
  //your code here
}`;

const map = `function map(collection, callback) {
  //your code here
}`;

export default () => (

  <div className="card deep-purple lighten-5">
    <div className="card-content">
      <h3>How To Use This Guide</h3>
      <hr />
      <ul className="lesson-list">
        <li>
          <div className="card">
            <div className="card-content">
              <h4><b>Workflow</b></h4>
              <hr />
              <div className="">
                <h5><b>Objectives:</b></h5>
                <ul className="prompts">
                  <li><i className="fa fa-check green-text text-lighten-2"></i><span> Create function each</span></li>
                  <li><i className="fa fa-check green-text text-lighten-2"></i><span> Create function each</span></li>
                  <li><i className="fa fa-check green-text text-lighten-2"></i><span> Create function each</span></li>
                </ul>
              </div>
              <div className="">
                <h5><b>Technical:</b></h5>
              </div>
              <ul className="prompts">
                <li><i className="fa fa-check green-text text-lighten-2"></i><span> Create function each</span></li>
                <li><i className="fa fa-check green-text text-lighten-2"></i><span> Each should accept collection and callback as parameters</span></li>
                <li><i className="fa fa-check green-text text-lighten-2"></i><span> Each should work on arrays and objects</span></li>
              </ul>
            </div>
          </div>
        </li>

        <li>
          <div className="card">
            <div className="card-content">
              <h4><b>Tips</b></h4>
              <hr />
              <div className="">
                <h5><b>Objectives:</b></h5>
                <ul className="prompts">
                  <li><i className="fa fa-check green-text text-lighten-2"></i><span> Create function each</span></li>
                  <li><i className="fa fa-check green-text text-lighten-2"></i><span> Create function each</span></li>
                  <li><i className="fa fa-check green-text text-lighten-2"></i><span> Create function each</span></li>
                </ul>
              </div>
              <div className="">
                <h5><b>Technical:</b></h5>
              </div>
              <ul className="prompts">
                <li><i className="fa fa-check green-text text-lighten-2"></i><span> Create function map</span></li>
                <li><i className="fa fa-check green-text text-lighten-2"></i><span> Map should apply callback to every item in the collection</span></li>
                <li><i className="fa fa-check green-text text-lighten-2"></i><span> Map should accept collection and callback as parameters</span></li>
                <li><i className="fa fa-check green-text text-lighten-2"></i><span> Map should work on arrays and objects</span></li>
                <li><i className="fa fa-check green-text text-lighten-2"></i><span> Map should return a new array</span></li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
);
