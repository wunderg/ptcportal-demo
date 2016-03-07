import React from 'react';
import { Link } from 'react-router';

export default () => (

  <nav>
    <div className="nav-wrapper">
      <Link to={`/`} className="brand-logo">PTC Portal</Link>
      <a href="#" data-activates="mobile-demo" className="button-collapse">
        <i className="fa fa-align-justify"></i>
      </a>
      <ul className="right hide-on-med-and-down">
        <li><Link to={'/add'}>Add Student</Link></li>
        <li><a href="">Results</a></li>
        <li><a href="">Dashboard</a></li>
        <li><a href="">Guide</a></li>
        <li><a href="">Login</a></li>
      </ul>
      <ul className="side-nav" id="mobile-demo">
        <li><a href="">Add Student</a></li>
        <li><a href="">Results</a></li>
        <li><a href="">Dashboard</a></li>
        <li><a href="">Guide</a></li>
        <li><a href="">Login</a></li>
      </ul>
    </div>
  </nav>
);
