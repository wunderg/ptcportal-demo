import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Navbar from '../navbar';
import '../../../global.scss';

class App extends Component {
  constructor(props) {
    super(props);
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

export default connect(mapStateToProps)(App);
