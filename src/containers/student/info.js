import React from 'react';

export default (props) => (
  <div className="card">
    <div className="card-content black-text">
      <span className="card-title"><span> James Doe </span> </span>
      <hr />
      <section className="info"><span>Email:</span> <span> jamesdoe@gmail.com</span></section>
      <section className="info">
        <span>Lesson:</span>
        <span> 2 of 8</span>
      </section>
      <section className="info"><span>Level:</span><span> 3 of 5</span></section>
      <section className="info"><span>Interview:</span><span> April 15, 2016</span></section>
      <section className="info"><span>Decision:</span><span> Pending</span></section>
      <section className="info"><span>Contacted:</span><span> true</span></section>
    </div>
  </div>
);
