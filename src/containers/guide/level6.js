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
                  <li><i className="fa fa-check green-text text-lighten-2"></i><span> Teach student how to edit each and reduce to give additional functionality</span></li>
                  <li><i className="fa fa-check green-text text-lighten-2"></i><span> Teach how to pass arguments down the line by passing them into the callback</span></li>
                  <li><i className="fa fa-check green-text text-lighten-2"></i><span> Teach how to extract those arguments in the following functions</span></li>
                  <li><i className="fa fa-check green-text text-lighten-2"></i><span> Refer to reduce implementation</span></li>
                  <li><i className="fa fa-check green-text text-lighten-2"></i><span> Help student to create example</span></li>
                  <li><i className="fa fa-check green-text text-lighten-2"></i><span> Help student to walk thru every iteration - STEP by STEP</span></li>
                </ul>
              </div>
              <div className="">
                <h5><b>Technical:</b></h5>
              </div>
              <ul className="prompts">
                <li><i className="fa fa-check green-text text-lighten-2"></i><span> Create function objectProps</span></li>
                <li><i className="fa fa-check green-text text-lighten-2"></i><span> ObjectProps should accept collection</span></li>
                <li><i className="fa fa-check green-text text-lighten-2"></i><span> ObjectProps should use reduce and empty array as a startingValue</span></li>
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
                  <li><i className="fa fa-check green-text text-lighten-2"></i><span> Teach student how to edit each and reduce to give additional functionality</span></li>
                  <li><i className="fa fa-check green-text text-lighten-2"></i><span> Teach how to pass arguments down the line by passing them into the callback</span></li>
                  <li><i className="fa fa-check green-text text-lighten-2"></i><span> Teach how to extract those arguments in the following functions</span></li>
                </ul>
              </div>
              <div className="">
                <h5><b>Technical:</b></h5>
              </div>
              <ul className="prompts">
                <li><i className="fa fa-check green-text text-lighten-2"></i><span> Create function indexOf</span></li>
                <li><i className="fa fa-check green-text text-lighten-2"></i><span> IndexOf should accept collection and target</span></li>
                <li><i className="fa fa-check green-text text-lighten-2"></i><span> IndexOf should use reduce and no startingValue</span></li>
                <li><i className="fa fa-check green-text text-lighten-2"></i><span> Explain that KEY in reduce would represent both KEY for object and INDEX for array</span></li>
                <li><i className="fa fa-check green-text text-lighten-2"></i><span> Make sure that Each can operate on strings by adding || - (OR)</span></li>
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
