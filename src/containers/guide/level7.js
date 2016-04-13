import React from 'react';
import Highlight from '../../helpers/highlight.js';
import { hash, hashSolution, hashExample } from './code/hash.js';
import { extend, extendSolution, extendExample } from './code/extend.js';

export default () => (

  <div className="card deep-purple lighten-5">
    <div className="card-content">
      <h3>Level 7 - Hash Table and Extend</h3>
      <hr />
      <ul className="lesson-list">
        <li>
          <div className="card">
            <div className="card-content">
              <h4><b>Lesson 1 - Hash Table using Reduce</b></h4>
              <hr />
              <div className="">
                <h5><b>Objectives:</b></h5>
                <ul className="prompts">
                  <li><i className="fa fa-check green-text text-lighten-2"></i><span> Teach how to write hashTable function</span></li>
                  <li><i className="fa fa-check green-text text-lighten-2"></i><span> Teach how to start Reduce with an object</span></li>
                  <li><i className="fa fa-check green-text text-lighten-2"></i><span> Teach how to check if property exists on the object</span></li>
                  <li><i className="fa fa-check green-text text-lighten-2"></i><span> Refer to reduce implementation</span></li>
                  <li><i className="fa fa-check green-text text-lighten-2"></i><span> Help student to create example</span></li>
                  <li><i className="fa fa-check green-text text-lighten-2"></i><span> Help student to walk thru every iteration - STEP by STEP</span></li>
                </ul>
              </div>
              <div className="">
                <h5><b>Technical:</b></h5>
              </div>
              <ul className="prompts">
                <li><i className="fa fa-check green-text text-lighten-2"></i><span> Create function HashTable</span></li>
                <li><i className="fa fa-check green-text text-lighten-2"></i><span> HashTable should accept string as an argument</span></li>
                <li><i className="fa fa-check green-text text-lighten-2"></i><span> HashTable should return an object</span></li>
                <li><i className="fa fa-check green-text text-lighten-2"></i><span> Return object should calculate number of occurences of each letter in the string</span></li>
              </ul>
            </div>
            <div className="code">
              <h5><b>Boilerplate:</b></h5>
              <Highlight props={hash} />
            </div>
            <div className="code">
              <h5><b>Example:</b></h5>
              <Highlight props={hashExample} />
            </div>
            <div className="code">
              <h5><b>Solution:</b></h5>
              <Highlight props={hashSolution} />
            </div>
          </div>
        </li>

        <li>
          <div className="card">
            <div className="card-content">
              <h4><b>Lesson 2 - Extend using Reduce</b></h4>
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
              <Highlight props={extend} />
            </div>
            <div className="code">
              <h5><b>Helpers:</b></h5>
              <Highlight props={extendExample} />
            </div>
            <div className="code">
              <h5><b>Solution:</b></h5>
              <Highlight props={extendSolution} />
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
);
