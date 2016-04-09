import React from 'react';
import Highlight from '../../helpers/highlight.js';
import { map, mapExample, mapUsingReduce } from './code/map.js';
import { filter, filterExample, filterUsingReduce } from './code/filter.js';

export default () => (
  <div className="card deep-purple lighten-5">
    <div className="card-content">
      <h3>Level 4 - Map And Filter Using Reduce</h3>
      <hr />
      <ul className="lesson-list">
        <li>
          <div className="card">
            <div className="card-content">
              <h4><b>Lesson 1 - Map usign Reduce</b></h4>
              <hr />
              <div className="">
                <h5><b>Objectives:</b></h5>
                <ul className="prompts">
                  <li><i className="fa fa-check green-text text-lighten-2"></i><span> Teach how to write Map using Reduce</span></li>
                  <li><i className="fa fa-check green-text text-lighten-2"></i><span> Teach that an empty array can be a startValue</span></li>
                  <li><i className="fa fa-check green-text text-lighten-2"></i><span> Help student to create example</span></li>
                  <li><i className="fa fa-check green-text text-lighten-2"></i><span> Help student to walk thru every iteration - STEP by STEP</span></li>
                </ul>
              </div>
              <div className="">
                <h5><b>Technical:</b></h5>
              </div>
              <ul className="prompts">
                <li><i className="fa fa-check green-text text-lighten-2"></i><span> Create function Map</span></li>
                <li><i className="fa fa-check green-text text-lighten-2"></i><span> Map should accept collection and callback as parameters</span></li>
                <li><i className="fa fa-check green-text text-lighten-2"></i><span> Map should use Reduce</span></li>
              </ul>
            </div>
            <div className="code">
              <h5><b>Boilerplate:</b></h5>
              <Highlight props={map} />
            </div>
            <div className="code">
              <h5><b>Example</b></h5>
              <Highlight props={mapExample} />
            </div>
            <div className="code">
              <h5><b>Solution:</b></h5>
              <Highlight props={mapUsingReduce} />
            </div>
          </div>
        </li>

        <li>
          <div className="card">
            <div className="card-content">
              <h4><b>Lesson 2 - Filter using Reduce</b></h4>
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
            <div className="code">
              <h5><b>Boilerplate:</b></h5>
              <Highlight props={filter} />
            </div>
            <div className="code">
              <h5><b>Example</b></h5>
              <Highlight props={filterExample} />
            </div>
            <div className="code">
              <h5><b>Solution:</b></h5>
              <Highlight props={filterUsingReduce} />
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
);
