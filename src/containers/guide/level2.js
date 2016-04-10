import React from 'react';
import Highlight from '../../helpers/highlight.js';
import { filter, filterExample, filterSolution } from './code/filter.js';
import { reduce, reduceExample, reduceSolution } from './code/reduce.js';

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
                  <li><i className="fa fa-check green-text text-lighten-2"></i><span> Teach what is the predicate function</span></li>
                  <li><i className="fa fa-check green-text text-lighten-2"></i><span> Teach the logic behind filter</span></li>
                  <li><i className="fa fa-check green-text text-lighten-2"></i><span> Teach that item is pushed to array only if predicate return true</span></li>
                  <li><i className="fa fa-check green-text text-lighten-2"></i><span> Teach student to walk step by step thru the function using pseudo code</span></li>
                  <li><i className="fa fa-check green-text text-lighten-2"></i><span> Practice creating function on the fly</span></li>
                  <li><i className="fa fa-check green-text text-lighten-2"></i><span> Help student to create an example</span></li>
                  <li><i className="fa fa-check green-text text-lighten-2"></i><span> Help student to walk thru every iteration of the function using example</span></li>
                </ul>
              </div>
              <div className="">
                <h5><b>Technical:</b></h5>
              </div>
              <ul className="prompts">
                <li><i className="fa fa-check green-text text-lighten-2"></i><span> Create function filter</span></li>
                <li><i className="fa fa-check green-text text-lighten-2"></i><span> Filter should use each to iterate</span></li>
                <li><i className="fa fa-check green-text text-lighten-2"></i><span> Filter should accept collection and predicate as parameters</span></li>
                <li><i className="fa fa-check green-text text-lighten-2"></i><span> Filter should work on arrays and objects</span></li>
                <li><i className="fa fa-check green-text text-lighten-2"></i><span> Filter should return new array with values that pass predicate test</span></li>
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
                  <li><i className="fa fa-check green-text text-lighten-2 green-text text-lighten-2"></i><span> Teach how to use 'Each' to create Reduce function</span></li>
                  <li><i className="fa fa-check green-text text-lighten-2"></i><span> Teach about accumulator and startValue</span></li>
                  <li><i className="fa fa-check green-text text-lighten-2"></i><span> Teach that accumulator always takes atleast TWO arguments Memo and Item</span></li>
                  <li><i className="fa fa-check green-text text-lighten-2"></i><span> Teach that startValue will get modified(Memo) by accumulator on every iteration </span></li>
                  <li><i className="fa fa-check green-text text-lighten-2"></i><span> Teach that startValue is the value that will get returned in the end as the final result </span></li>
                  <li><i className="fa fa-check green-text text-lighten-2"></i><span> Teach that startValue is optional</span></li>
                  <li><i className="fa fa-check green-text text-lighten-2"></i><span> Teach that if starting value is not provided Reduce will use first item in the collection as the startValue </span></li>
                  <li><i className="fa fa-check green-text text-lighten-2"></i><span> Teach that if starting value is not provided Reduce should NOT iterate over the first item because it will become the startValue </span></li>
                </ul>
              </div>
              <div className="">
                <h5><b>Technical:</b></h5>
              </div>
              <ul className="prompts">
                <li><i className="fa fa-check green-text text-lighten-2"></i><span> Create function reduce</span></li>
                <li><i className="fa fa-check green-text text-lighten-2"></i><span> Reduce should apply accumulator to every item in the collection</span></li>
                <li><i className="fa fa-check green-text text-lighten-2"></i><span> Reduce should pass result of accumulator(MEMO) to every invocation of accumulator</span></li>
                <li><i className="fa fa-check green-text text-lighten-2"></i><span> Reduce should use first item in the collection if start is not provided</span></li>
                <li><i className="fa fa-check green-text text-lighten-2"></i><span> Reduce should NOT invoke accumulator on first item if start in not provided</span></li>
                <li><i className="fa fa-check green-text text-lighten-2"></i><span> Reduce should return a new array</span></li>
                <li><i className="fa fa-check green-text text-lighten-2"></i><span> Reduce should use start value as final result</span></li>
              </ul>
            </div>
            <div className="code">
              <h5><b>Boilerplate:</b></h5>
              <Highlight props={reduce} />
            </div>
            <div className="code">
              <h5><b>Example:</b></h5>
              <Highlight props={reduceExample} />
            </div>
            <div className="code">
              <h5><b>Solution:</b></h5>
              <Highlight props={reduceSolution} />
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
);
