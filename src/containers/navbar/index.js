import React from 'react';
import { Link } from 'react-router';

export default (input) => (
  <nav>
    <div className="nav-wrapper">
      <Link to={`/`} className="brand-logo">PTC Portal</Link>
      <a href="#" className="button-collapse" onClick={input.handleMenu}><i className="fa fa-bars fa-2x"></i>
      </a>
      <ul>
        <li><Link to={'/add'}>Add Student</Link></li>
        <li><a href="">Results</a></li>
        <li><a href="">Dashboard</a></li>
        <li><a href="">Guide</a></li>
        <li><a href="">Login</a></li>
      </ul>
    </div>
  </nav>
);
