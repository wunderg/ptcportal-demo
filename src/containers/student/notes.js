import React from 'react';

export default (prop) => {
  console.log(prop);
  const rows = prop.data.notes.map((note, index) => (
      <li key={index}>
        <div className="collapsible-header center">Session: {index}</div>
        <div className="collapsible-body"><p>{note}</p></div>
      </li>
    )
  );
  return (
    <div className="card">
      <div className="card-content black-text">
        <span className="card-title">
          Notes
          <button className="btn-floating btn-large waves-effect waves-light blue right"><i className="fa fa-plus"></i></button>
        </span>
        <hr />
        <ul className="collapsible" data-collapsible="expandable">
          { rows }
        </ul>
      </div>
    </div>
  );
};
