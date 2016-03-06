import React, { Component } from 'react';
import { Link } from 'react-router';

const style = {
  logo: {
    color: '#ffffff',
    fontWeight: 'bold',
    marginLeft: 10,
  },
  link: {
    fontWeight: 'bold',
    fontSize: 18
  }
};

export default class Navbar extends Component {

  render() {
    return (
      <nav className="blue darken-2">
        <div className="nav-wrapper" style={style.navbar}>
          <Link to={`/`} className="brand-logo" style={style.logo}>PTC Portal</Link>
          <a href="#" style={style.logo} data-activates="mobile-demo" className="button-collapse">
            <i className="fa fa-align-justify"></i>
          </a>
          <ul className="right hide-on-med-and-down" style={style.link}>
            <li><a href="" style={style.link}>Add Student</a></li>
            <li><a href="" style={style.link}>Results</a></li>
            <li><a href="" style={style.link}>Dashboard</a></li>
            <li><a href="" style={style.link}>Guide</a></li>
            <li><a href="" style={style.link}>Login</a></li>
          </ul>
          <ul className="side-nav" id="mobile-demo" style={style.link}>
            <li><a href="">Add Student</a></li>
            <li><a href="">Results</a></li>
            <li><a href="">Dashboard</a></li>
            <li><a href="">Guide</a></li>
            <li><a href="">Login</a></li>
          </ul>
        </div>
      </nav>
    );
  }
}
