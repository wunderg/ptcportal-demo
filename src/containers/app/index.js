import React, { Component, PropTypes } from 'react';
import Navbar from '../navbar';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div classNameName="">
        <Navbar />
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

export default App;
