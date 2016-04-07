import React from 'react';
import Highlight from '../../helpers/highlight.js';
import { each, eachExample, eachSolution} from './code/each.js';

const map = `function map(collection, callback) {
  //your code here
}`

const mapSolution =
`function map(collection, callback) {
  var result = [];
  each(collection, function(item) {
    result.push(callback(item));
  });
  return result;
}
***** Pseudo Code *****
// declare function map
  // create new array to store results

  // use each to iterate over collection
    // and pass anonymous funcion as callback

  // apply callback function to every item in the collection
    // and push it into the results array

// return new array with modifed items
`

const mapExample =
`//test array
var numbers = [1,2,3,4,5];

//test function
function double(num) {
  return num * 2;
}

map(numbers, double); => [2, 4, 6, 8, 10];
`
export default () => (

  <div className="card deep-purple lighten-5">
    <div className="card-content">
      <h3>Level 1 - Basic Each and Map</h3>
      <hr />
      <ul className="lesson-list">
        <li>
          <div className="card">
            <div className="card-content">
              <h4><b>Lesson 1 - Each</b></h4>
              <hr />
              <div className="">
                <h5><b>Objectives:</b></h5>
                <ul className="prompts">
                  <li><i className="fa fa-check"></i><span> Teach how to distinguish between an array and/or an object</span></li>
                  <li><i className="fa fa-check"></i><span> Teach how to iterate over an array and/or an object </span></li>
                  <li><i className="fa fa-check"></i><span> Teach how to access item inside an array and/or object </span></li>
                  <li><i className="fa fa-check"></i><span> Teach how to apply callback to every item in an array and/or object</span></li>
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
              <h5><b>Example:</b></h5>
              <Highlight props={eachExample} />
            </div>
            <div className="code">
              <h5><b>Solution:</b></h5>
              <Highlight props={eachSolution} />
            </div>
          </div>
        </li>

        <li>
          <div className="card">
            <div className="card-content">
              <h4><b>Lesson 2 - Map</b></h4>
              <hr />
              <div className="">
                <h5><b>Objectives:</b></h5>
                <ul className="prompts">
                  <li><i className="fa fa-check"></i><span> Teach how to use 'Each' to create 'Map' function</span></li>
                  <li><i className="fa fa-check"></i><span> Teach how to create function on the fly as a callback</span></li>
                  <li><i className="fa fa-check"></i><span> Teach that the callback that passed in each is a function that created on the fly</span></li>
                  <li><i className="fa fa-check"></i><span> Teach that the each callback is getting exexuted inside the 'FOR LOOP'</span></li>
                  <li><i className="fa fa-check"></i><span> Teach that item is getting modified by callback before its pushed to the new array</span></li>
                  <li><i className="fa fa-check"></i><span> Teach how talk about function using pseudo-code, make student walk step by step</span></li>
                  <li><i className="fa fa-check"></i><span> Help student to create an example</span></li>
                  <li><i className="fa fa-check"></i><span> Help student to walk thru every iteration of the example</span></li>
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
              <h5><b>Example:</b></h5>
              <Highlight props={mapExample} />
            </div>
            <div className="code">
              <h5><b>Solution:</b></h5>
              <Highlight props={mapSolution} />
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
);
