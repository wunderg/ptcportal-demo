import React from 'react';
import Highlight from '../../helpers/highlight.js';

const each =
`function each(collection, callback){
  //your code here
}`

const eachSolution =
`function each(collection, callback) {
  if (Array.isArray(collection)) {
    for (var i = 0; i < collection.length ; i++) {
      callback(collection[i]);
    }
  } else {
    for (var prop in collection) {
      callback(collection[prop]);
    }
  }
}

***** Pseudo Code *****
//declare function each
  //check if collection is array
    //iterate over array
      //apply callback on every item in the array
  // else if collection is not an array
    // iterate over object
      //apply callback to every value in the object
`

const eachHelpers =
`//test array
var numbers = [1,2,3,4,5,6];

//test function
function log(num) {
  console.log(num);
}
`

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
                  <li><i className="fa fa-check"></i><span> Understand how to distinguish between an array and/or an object</span></li>
                  <li><i className="fa fa-check"></i><span> Understand how to iterate over an array and/or an object </span></li>
                  <li><i className="fa fa-check"></i><span> Understand how to access item inside an array and/or object </span></li>
                  <li><i className="fa fa-check"></i><span> Understand how to apply callback to every item in an array and/or object</span></li>
                </ul>
              </div>
              <div className="">
                <h5><b>Technical:</b></h5>
              </div>
              <ul className="prompts">
                <li><i className="fa fa-check"></i><span> Create function each</span></li>
                <li><i className="fa fa-check"></i><span> Each should accept collection and callback as parameters</span></li>
                <li><i className="fa fa-check"></i><span> Each should work on arrays and objects</span></li>
                <li><i className="fa fa-check"></i><span> Each should apply the callback to every item in the collection</span></li>
              </ul>
            </div>
            <div className="code">
              <h5><b>Boilerplate:</b></h5>
              <Highlight props={each} />
            </div>
            <div className="code">
              <h5><b>Solution:</b></h5>
              <Highlight props={eachSolution} />
            </div>
            <div className="code">
              <h5><b>Helpers:</b></h5>
              <Highlight props={eachHelpers} />
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
                <ul className="prompts">
                  <li><i className="fa fa-check"></i><span> Create function each</span></li>
                  <li><i className="fa fa-check"></i><span> Create function each</span></li>
                  <li><i className="fa fa-check"></i><span> Create function each</span></li>
                </ul>
              </div>
              <div className="">
                <h5><b>Technical:</b></h5>
              </div>
              <ul className="prompts">
                <li><i className="fa fa-check"></i><span> Create function map</span></li>
                <li><i className="fa fa-check"></i><span> Map should apply callback to every item in the collection</span></li>
                <li><i className="fa fa-check"></i><span> Map should accept collection and callback as parameters</span></li>
                <li><i className="fa fa-check"></i><span> Map should work on arrays and objects</span></li>
                <li><i className="fa fa-check"></i><span> Map should return a new array</span></li>
              </ul>
            </div>
            <div className="code">
              <h5><b>Boilerplate:</b></h5>
              <Highlight props={map} />
            </div>
            <div className="code">
              <h5><b>Solution:</b></h5>
              <Highlight props={map} />
            </div>
            <div className="code">
              <h5><b>Helpers:</b></h5>
              <Highlight props={each} />
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
);
