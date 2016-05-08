import React from 'react';

export default (prop) => {
  return (
    <div className="card">
      <div className="card-content black-text">
        <span className="card-title">
          Notes
          <button className="btn-floating btn-large waves-effect waves-light blue right"><i className="fa fa-plus"></i></button>
        </span>
        <hr />
        <ul className="collapsible" data-collapsible="expandable">
          <li>
            <div className="collapsible-header center">First</div>
            <div className="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
          </li>
          <li>
            <div className="collapsible-header center">Second</div>
            <div className="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
          </li>
          <li>
            <div className="collapsible-header center">Third</div>
            <div className="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
          </li>
        </ul>
      </div>
    </div>
  );
};
