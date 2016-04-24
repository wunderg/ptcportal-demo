import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Navbar from '../navbar';
import '../../../global.scss';

import { loginWithToken } from '../../actions/login.js';

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const token = localStorage.getItem('id_token')
    if (!this.props.user.isAuthenticated && token) {
       this.props.loginWithToken(token);
    }
  }

  render() {
    return (
      <div classNameName="">
        <Navbar isAuthenticated={this.props.user.isAuthenticated} />
        <div className="container">
          { this.props.children }
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object
};

function mapStateToProps(state) {
  return {
    data: state.slocal,
    user: state.user
  };
}

export default connect(mapStateToProps, { loginWithToken })(App);
