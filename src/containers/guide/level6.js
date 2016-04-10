import React from 'react';
import Highlight from '../../helpers/highlight.js';
import { objectProps, objectPropsExample, objectPropsSolution, eachModified, reduceModified } from './code/objectProps.js';
import { indexOf, indexOfExample, indexOfSolution, eachModifiedIndex, reduceModifiedIndex } from './code/indexOf.js';

export default () => (

  <div className="card deep-purple lighten-5">
    <div className="card-content">
      <h3>Level 6 - ObjectProps and IndexOf using Reduce</h3>
      <hr />
      <ul className="lesson-list">
        <li>
          <div className="card">
            <div className="card-content">
              <h4><b>Lesson 1 - ObjectProps using Reduce</b></h4>
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
            <div className="code">
              <h5><b>Boilerplate:</b></h5>
              <Highlight props={objectProps} />
            </div>
            <div className="code">
              <h5><b>Example:</b></h5>
              <Highlight props={objectPropsExample} />
            </div>
            <div className="code">
              <h5><b>Solution:</b></h5>
              <Highlight props={objectPropsSolution} />
              <Highlight props={eachModified} />
              <Highlight props={reduceModified} />
            </div>
          </div>
        </li>

        <li>
          <div className="card">
            <div className="card-content">
              <h4><b>Lesson 2 - IndexOf using Reduce</b></h4>
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
              <Highlight props={indexOf} />
            </div>
            <div className="code">
              <h5><b>Example:</b></h5>
              <Highlight props={indexOfExample} />
            </div>
            <div className="code">
              <h5><b>Solution:</b></h5>
              <Highlight props={eachModifiedIndex} />
              <Highlight props={reduceModifiedIndex} />
              <Highlight props={indexOfSolution} />
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
);
