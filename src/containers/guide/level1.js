import React from 'react';
import Highlight from '../../helpers/highlight.js';

const each = `function each(collection, callback){
  //your code here
}`

const map = `function map(collection, callback) {
  //your code here
}`

export default () => (

  <div className="card deep-purple lighten-5">
    <div className="card-content">
      <h3>Level 1</h3>
      <hr />
      <ul className="lesson-list">
        <li>
          <div className="card">
            <div className="card-content">
              <h4><b>Lesson 1</b></h4>
              <hr />
              <div className="">
                <h5><b>Objectives:</b></h5>
                <ul className="prompts">
                  <li><i className="fa fa-check"></i> Create function each</li>
                  <li><i className="fa fa-check"></i> Each should accept collection and callback as parameters</li>
                  <li><i className="fa fa-check"></i> Each should work on arrays and objects</li>
                </ul>
              </div>
              <div className="">
                <h5><b>Technical:</b></h5>
              </div>
              <ul className="prompts">
                <li><i className="fa fa-check"></i> Create function each</li>
                <li><i className="fa fa-check"></i> Each should accept collection and callback as parameters</li>
                <li><i className="fa fa-check"></i> Each should work on arrays and objects</li>
              </ul>
            </div>
            <div className="code">
              <h5><b>Boilerplate:</b></h5>
              <Highlight props={each} />
            </div>
            <div className="code">
              <h5><b>Solution:</b></h5>
              <Highlight props={each} />
            </div>
          </div>
        </li>
        <li>
          <div className="card">
            <div className="card-content">
              <h4><b>Lesson 2</b></h4>
              <hr />
              <div className="">
                <h5><b>Objectives:</b></h5>
              </div>
              <ul className="prompts">
                <li><i className="fa fa-check"></i> Create function map</li>
                <li><i className="fa fa-check"></i> Map should apply callback to every item in the collection</li>
                <li><i className="fa fa-check"></i> Map should accept collection and callback as parameters</li>
                <li><i className="fa fa-check"></i> Map should work on arrays and objects</li>
                <li><i className="fa fa-check"></i> Map should return a new array</li>
              </ul>
            </div>
            <div className="code">
              <h5><b>Boilerplate:</b></h5>
              <Highlight props={map} />
            </div>
          </div>
        </li>
      </ul>
      <ul className="">
        <h5><b>Solutions</b></h5>
        <li>Prompt 1</li>
        <li>Prompt 2</li>
        <li>Prompt 3</li>
      </ul>
    </div>
  </div>
);
