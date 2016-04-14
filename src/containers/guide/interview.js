import React from 'react';
import Highlight from '../../helpers/highlight.js';

const each = `function each(collection, callback){
  //your code here
}`

const map = `function map(collection, callback) {
  //your code here
}`

export default () => (

  <div className="card deep-purple lighten-5">
    <div className="card-content">
      <h3>Mock Interview</h3>
      <hr />
      <div className="card">
        <div className="card-content">
          <div className="code">
            <h5><i className="fa fa-check green-text text-lighten-2"></i><span> Create an array with null, string, and a number</span></h5>
            <Highlight props={each} />
          </div>
          <div className="code">
            <h5><i className="fa fa-check green-text text-lighten-2"></i><span> Create an object with 3 properties</span></h5>
            <Highlight props={each} />
          </div>
          <div className="code">
            <h5><i className="fa fa-check green-text text-lighten-2"></i><span> Create function multiply that multiples number by 2</span></h5>
            <Highlight props={each} />
          </div>
          <div className="code">
            <h5><i className="fa fa-check green-text text-lighten-2"></i><span> Use multiply to multyply third value in array above</span></h5>
            <Highlight props={each} />
          </div>
          <div className="code">
            <h5><i className="fa fa-check green-text text-lighten-2"></i><span> Create each function that can work on objects, arrays and string</span></h5>
            <Highlight props={each} />
          </div>
          <div className="code">
            <h5><i className="fa fa-check green-text text-lighten-2"></i><span> Create filter function using each</span></h5>
            <Highlight props={each} />
          </div>
          <div className="code">
            <h5><i className="fa fa-check green-text text-lighten-2"></i><span> Create reduce function using each</span></h5>
            <Highlight props={each} />
          </div>
          <div className="code">
            <h5><i className="fa fa-check green-text text-lighten-2"></i><span> Create map using reduce</span></h5>
            <Highlight props={each} />
          </div>
          <div className="code">
            <h5><i className="fa fa-check green-text text-lighten-2"></i><span> Debug filter that uses reduce inside</span></h5>
            <Highlight props={each} />
          </div>
          <div className="code">
            <h5><i className="fa fa-check green-text text-lighten-2"></i><span> Create numberOfWins funciton</span></h5>
            <Highlight props={each} />
          </div>
          <div className="code">
            <h5><i className="fa fa-check green-text text-lighten-2"></i><span> Create default function using reduce and each</span></h5>
            <Highlight props={each} />
          </div>
        </div>
      </div>
    </div>
  </div>
);
