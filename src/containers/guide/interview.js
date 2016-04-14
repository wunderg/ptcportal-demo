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
            <h5><i className="fa fa-check green-text text-lighten-2"></i><span> Each should apply the callback to every item in the collection</span></h5>
            <Highlight props={each} />
          </div>
          <div className="code">
            <h5><i className="fa fa-check green-text text-lighten-2"></i><span> Each should apply the callback to every item in the collection</span></h5>
            <Highlight props={each} />
          </div>
          <div className="code">
            <h5><i className="fa fa-check green-text text-lighten-2"></i><span> Each should apply the callback to every item in the collection</span></h5>
            <Highlight props={each} />
          </div>
          <div className="code">
            <h5><i className="fa fa-check green-text text-lighten-2"></i><span> Each should apply the callback to every item in the collection</span></h5>
            <Highlight props={each} />
          </div>
          <div className="code">
            <h5><i className="fa fa-check green-text text-lighten-2"></i><span> Each should apply the callback to every item in the collection</span></h5>
            <Highlight props={each} />
          </div>
          <div className="code">
            <h5><i className="fa fa-check green-text text-lighten-2"></i><span> Each should apply the callback to every item in the collection</span></h5>
            <Highlight props={each} />
          </div>
        </div>
      </div>
    </div>
  </div>
);
