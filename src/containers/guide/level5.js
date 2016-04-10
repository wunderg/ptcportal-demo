import React from 'react';
import Highlight from '../../helpers/highlight.js';
import { contains, containsExample, containsSolution } from './code/contains.js';
import { every, everyExample, everySolution } from './code/every.js';

export default () => (

  <div className="card deep-purple lighten-5">
    <div className="card-content">
      <h3>Level 5 - Contains and Every using Reduce</h3>
      <hr />
      <ul className="lesson-list">
        <li>
          <div className="card">
            <div className="card-content">
              <h4><b>Lesson 1 - Contains Using Reduce</b></h4>
              <hr />
              <div className="">
                <h5><b>Objectives:</b></h5>
                <ul className="prompts">
                  <li><i className="fa fa-check green-text text-lighten-2"></i><span> Teach how to write Contains using Reduce </span></li>
                  <li><i className="fa fa-check green-text text-lighten-2"></i><span> Teach that Boolean value can be a startValue</span></li>
                  <li><i className="fa fa-check green-text text-lighten-2"></i><span> Teach that that startValue will become result on first iteration</span></li>
                  <li><i className="fa fa-check green-text text-lighten-2"></i><span> Teach that result will need to be updated only once</span></li>
                  <li><i className="fa fa-check green-text text-lighten-2"></i><span> Refer to reduce implementation</span></li>
                  <li><i className="fa fa-check green-text text-lighten-2"></i><span> Help student to create example</span></li>
                  <li><i className="fa fa-check green-text text-lighten-2"></i><span> Help student to walk thru every iteration - STEP by STEP</span></li>
                </ul>
              </div>
              <div className="">
                <h5><b>Technical:</b></h5>
              </div>
              <ul className="prompts">
                <li><i className="fa fa-check green-text text-lighten-2"></i><span> Create function Contains </span></li>
                <li><i className="fa fa-check green-text text-lighten-2"></i><span> Contains should accept collection and target as parameters</span></li>
                <li><i className="fa fa-check green-text text-lighten-2"></i><span> Conatins should use Reduce</span></li>
                <li><i className="fa fa-check green-text text-lighten-2"></i><span> Conatins should start with Boolean value</span></li>
              </ul>
            </div>
            <div className="code">
              <h5><b>Boilerplate:</b></h5>
              <Highlight props={contains} />
            </div>
            <div className="code">
              <h5><b>Example:</b></h5>
              <Highlight props={containsExample} />
            </div>
            <div className="code">
              <h5><b>Solution:</b></h5>
              <Highlight props={containsSolution} />
            </div>
          </div>
        </li>

        <li>
          <div className="card">
            <div className="card-content">
              <h4><b>Lesson 2 - Every Using Reduce</b></h4>
              <hr />
              <div className="">
                <h5><b>Objectives:</b></h5>
                <ul className="prompts">
                  <li><i className="fa fa-check green-text text-lighten-2"></i><span> Teach how to write Every using Reduce </span></li>
                  <li><i className="fa fa-check green-text text-lighten-2"></i><span> Teach that Boolean value can be a startValue</span></li>
                  <li><i className="fa fa-check green-text text-lighten-2"></i><span> Teach that that startValue will become result on first iteration</span></li>
                  <li><i className="fa fa-check green-text text-lighten-2"></i><span> Teach that result will need to be updated only once</span></li>
                  <li><i className="fa fa-check green-text text-lighten-2"></i><span> Refer to reduce implementation</span></li>
                  <li><i className="fa fa-check green-text text-lighten-2"></i><span> Help student to create example</span></li>
                  <li><i className="fa fa-check green-text text-lighten-2"></i><span> Help student to walk thru every iteration - STEP by STEP</span></li>
                </ul>
              </div>
              <div className="">
                <h5><b>Technical:</b></h5>
              </div>
              <ul className="prompts">
                <li><i className="fa fa-check green-text text-lighten-2"></i><span> Create function Every </span></li>
                <li><i className="fa fa-check green-text text-lighten-2"></i><span> Every should accept collection and predicate as parameters</span></li>
                <li><i className="fa fa-check green-text text-lighten-2"></i><span> Every should use Reduce</span></li>
                <li><i className="fa fa-check green-text text-lighten-2"></i><span> Every should start with Boolean value</span></li>
              </ul>
            </div>
            <div className="code">
              <h5><b>Boilerplate:</b></h5>
              <Highlight props={every} />
            </div>
            <div className="code">
              <h5><b>Example:</b></h5>
              <Highlight props={everyExample} />
            </div>
            <div className="code">
              <h5><b>Solution:</b></h5>
              <Highlight props={everySolution} />
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
);
