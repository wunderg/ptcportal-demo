import React from 'react';
import Highlight from '../../helpers/highlight.js';
import { getMax, getMaxExample, getMaxSolution } from './code/getMax.js';
import { sum, sumExample, sumSolution } from './code/sum.js';


export default () => (

  <div className="card deep-purple lighten-5">
    <div className="card-content">
      <h3>Level 3 - Sum and GetMin using Reduce</h3>
      <hr />
      <ul className="lesson-list">
        <li>
          <div className="card">
            <div className="card-content">
              <h4><b>Lesson 1 - Sum</b></h4>
              <hr />
              <div className="">
                <h5><b>Objectives:</b></h5>
                <ul className="prompts">
                  <li><i className="fa fa-check green-text text-lighten-2"></i><span> Teach basic sum function using reduce</span></li>
                  <li><i className="fa fa-check green-text text-lighten-2"></i><span> Teach about callback that get passed in the reduce</span></li>
                  <li><i className="fa fa-check green-text text-lighten-2"></i><span> Teach there is at least 2 arguments that get passed in - MEMO and ITEM</span></li>
                  <li><i className="fa fa-check green-text text-lighten-2"></i><span> Teach about basic structure of reduce - must have clear return statement </span></li>
                  <li><i className="fa fa-check green-text text-lighten-2"></i><span> Teach that the return from the callback will be a MEMO on next iteration </span></li>
                  <li><i className="fa fa-check green-text text-lighten-2"></i><span> Teach how startValue can be passed in as a THIRD argument into REDUCE</span></li>
                  <li><i className="fa fa-check green-text text-lighten-2"></i><span> Teach that if there is no startValue REDUCE will use first item as start</span></li>
                  <li><i className="fa fa-check green-text text-lighten-2"></i><span> Help student to create example</span></li>
                  <li><i className="fa fa-check green-text text-lighten-2"></i><span> Help student to walk thru every iteration - STEP by STEP</span></li>
                </ul>
              </div>
              <div className="">
                <h5><b>Technical:</b></h5>
              </div>
              <ul className="prompts">
                <li><i className="fa fa-check green-text text-lighten-2"></i><span> Create function sum</span></li>
                <li><i className="fa fa-check green-text text-lighten-2"></i><span> Sum should use Reduce as the iterator</span></li>
                <li><i className="fa fa-check green-text text-lighten-2"></i><span> Sum should accept collection and OPTIONAL startValue</span></li>
                <li><i className="fa fa-check green-text text-lighten-2"></i><span> Sum should return biggest number in a given array</span></li>
              </ul>
            </div>
            <div className="code">
              <h5><b>Boilerplate:</b></h5>
              <Highlight props={sum} />
            </div>
            <div className="code">
              <h5><b>Example</b></h5>
              <Highlight props={sumExample} />
            </div>
            <div className="code">
              <h5><b>Solution:</b></h5>
              <Highlight props={sumSolution} />
            </div>
          </div>
        </li>

        <li>
          <div className="card">
            <div className="card-content">
              <h4><b>Lesson 2 - GetMax</b></h4>
              <hr />
              <div className="">
                <h5><b>Objectives:</b></h5>
                <ul className="prompts">
                  <li><i className="fa fa-check green-text text-lighten-2"></i><span> Teach basic use of reduce</span></li>
                  <li><i className="fa fa-check green-text text-lighten-2"></i><span> Teach </span></li>
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
            <div className="code">
              <h5><b>Boilerplate:</b></h5>
              <Highlight props={getMax} />
            </div>
            <div className="code">
              <h5><b>Example</b></h5>
              <Highlight props={getMaxExample} />
            </div>
            <div className="code">
              <h5><b>Solution:</b></h5>
              <Highlight props={getMaxSolution} />
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
);
