import React from 'react';
import Highlight from '../../helpers/highlight.js';
import { getMax, getMaxExample, getMaxSolution } from './code/getMax.js';
import { sum, sumExample, sumSolution } from './code/sum.js';


export default () => (

  <div className="card deep-purple lighten-5">
    <div className="card-content">
      <h3>Level 3 - Sum and GetMax using Reduce</h3>
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
                  <li><i className="fa fa-check green-text text-lighten-2"></i><span> Teach how to write basic sum function using reduce</span></li>
                  <li><i className="fa fa-check green-text text-lighten-2"></i><span> Teach about callback-accumulator that get passed into the reduce</span></li>
                  <li><i className="fa fa-check green-text text-lighten-2"></i><span> Teach that at least 2 arguments have to be passed in - MEMO and ITEM</span></li>
                  <li><i className="fa fa-check green-text text-lighten-2"></i><span> Teach about basic structure of reduce - must have clear return statement </span></li>
                  <li><i className="fa fa-check green-text text-lighten-2"></i><span> Teach that the return from the callback will be a MEMO on next iteration </span></li>
                  <li><i className="fa fa-check green-text text-lighten-2"></i><span> Teach how startValue can be passed in as a THIRD argument into the REDUCE</span></li>
                  <li><i className="fa fa-check green-text text-lighten-2"></i><span> Teach that if there is no startValue REDUCE will use first item as startValue</span></li>
                  <li><i className="fa fa-check green-text text-lighten-2"></i><span> Help student to create example</span></li>
                  <li><i className="fa fa-check green-text text-lighten-2"></i><span> Help student to walk thru every iteration - STEP by STEP</span></li>
                </ul>
              </div>
              <div className="">
                <h5><b>Technical:</b></h5>
              </div>
              <ul className="prompts">
                <li><i className="fa fa-check green-text text-lighten-2"></i><span> Create function sum</span></li>
                <li><i className="fa fa-check green-text text-lighten-2"></i><span> Sum should use Reduce as a iterator</span></li>
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
                  <li><i className="fa fa-check green-text text-lighten-2"></i><span> Teach how to write basic getMax function</span></li>
                  <li><i className="fa fa-check green-text text-lighten-2"></i><span> This exercise should reinforce basic use of reduce</span></li>
                  <li><i className="fa fa-check green-text text-lighten-2"></i><span> Refer to lesson 1 for additional information</span></li>
                  <li><i className="fa fa-check green-text text-lighten-2"></i><span> Help student to create example</span></li>
                  <li><i className="fa fa-check green-text text-lighten-2"></i><span> Help student to walk thru every iteration - STEP by STEP</span></li>

                </ul>
              </div>
              <div className="">
                <h5><b>Technical:</b></h5>
              </div>
              <ul className="prompts">
                <li><i className="fa fa-check green-text text-lighten-2"></i><span> Create function getMax</span></li>
                <li><i className="fa fa-check green-text text-lighten-2"></i><span> getMax should use reduce</span></li>
                <li><i className="fa fa-check green-text text-lighten-2"></i><span> getMax should return a largest item in the collection</span></li>
                <li><i className="fa fa-check green-text text-lighten-2"></i><span> getMax should work on negative values as well</span></li>
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
