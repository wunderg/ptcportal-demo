import React from 'react';
import Highlight from '../../helpers/highlight.js';

const each = `function each(collection, callback){
  //your code here
}`


export default () => (

  <div className="card grey lighten-2">
    <div className="card-content">
      <h3>Level 1</h3>
      <hr />
      <ul className="lesson-list">
        <li>
          <div className="card">
            <div className="card-content">
              <h4><b>Lesson 1</b></h4>
              <hr />
              <ul className="prompts">
               <li>Create function each</li> 
               <li>Each should accept collection and callback as parameters</li>
               <li>Each should work on arrays and objects</li>
              </ul>
            </div>
            <div className="code">
              <h5><b>Boilerplate:</b></h5>
              <Highlight props={each} />
            </div>
          </div>
        </li>
        <li>
          <div className="card">
            <div className="card-content">
              Create each function, that accepts collection and callback, each should be able to handle arrays and objects
            </div>
          </div>
        </li>
        <li>
          <div className="card">
            <div className="card-content">
              Create each function, that accepts collection and callback, each should be able to handle arrays and objects
            </div>
          </div>
        </li>
      </ul>
      <ul className="">
        <h5><b>Solutions</b></h5>
        <li>Prompt 1</li>
        <li>Prompt 2</li>
        <li>Prompt 3</li>
      </ul>
    </div>
  </div>
);
