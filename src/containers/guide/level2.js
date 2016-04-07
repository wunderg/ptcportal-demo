import React from 'react';
import Highlight from '../../helpers/highlight.js';

const filter = `function filter(collection, predicate){
  //your code here
}`

const filterSolution = `function filter(collection, callback) {
  var result = [];
  each(collection, function(item) {
    if (predicate(item)) {
      result.push(item);
    }
  });
  return result;
}

***** Pseudo Code *****
//declare function filter that accepts collection and test function
  //create new array to store results

  //use each to iterate over the collection
    //and pass anonymous function as callback

     //if test with current will be truthy
       // push item into the result

// return result;
`

const filterExample = `var numbers = [1,2,3,4,5,6];
function isEven(num) {
  return num % 2 === 0;
}

filter(numbers, isEven); => [2, 4, 6];
`

const reduce = `function map(collection, callback) {
  //your code here
}`

const example = `function map(collection, callback) {
  //your code here
}`

export default () => (

  <div className="card deep-purple lighten-5">
    <div className="card-content">
      <h3>Level 2 - Filter and Reduce</h3>
      <hr />
      <ul className="lesson-list">
        <li>
          <div className="card">
            <div className="card-content">
              <h4><b>Lesson 1 - Filter</b></h4>
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
                <li><i className="fa fa-check"></i><span> Create function each</span></li>
                <li><i className="fa fa-check"></i><span> Each should accept collection and callback as parameters</span></li>
                <li><i className="fa fa-check"></i><span> Each should work on arrays and objects</span></li>
              </ul>
            </div>
            <div className="code">
              <h5><b>Boilerplate:</b></h5>
              <Highlight props={filter} />
            </div>
            <div className="code">
              <h5><b>Example:</b></h5>
              <Highlight props={filterExample} />
            </div>
            <div className="code">
              <h5><b>Solution:</b></h5>
              <Highlight props={filterSolution} />
            </div>
          </div>
        </li>

        <li>
          <div className="card">
            <div className="card-content">
              <h4><b>Lesson 2 - Reduce</b></h4>
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
              <Highlight props={filter} />
            </div>
            <div className="code">
              <h5><b>Solution:</b></h5>
              <Highlight props={reduce} />
            </div>
            <div className="code">
              <h5><b>Helpers:</b></h5>
              <Highlight props={example} />
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
);
