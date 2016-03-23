import React, { Component } from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';

class Navbar extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = { hide: true, show: false };

    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState({ hide: !this.state.hide, show: !this.state.show });
  }

  render() {
    const menu = classNames(this.state, { mobile: true });
    console.log(menu);
    return (
      <nav>
        <div className="nav-wrapper">
          <Link to={`/`} className="brand-logo">PTC Portal</Link>
          <a className="button-collapse" onClick={this.toggleMenu}>
            <i className="fa fa-bars fa-2x"></i>
          </a>
          <ul className="full">
            <li><Link to={'/add'}>Add Student</Link></li>
            <li><a href="">Results</a></li>
            <li><a href="">Dashboard</a></li>
            <li><a href="">Guide</a></li>
            <li><a href="">Login</a></li>
          </ul>
        </div>
        <ul className={menu}>
          <li><Link to={'/add'}>Add Student</Link></li>
          <li><a href="">Results</a></li>
          <li><a href="">Dashboard</a></li>
          <li><a href="">Guide</a></li>
          <li><a href="">Login</a></li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
