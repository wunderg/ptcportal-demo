import React, { Component, PropTypes } from 'react';
import Navbar from '../navbar';
import '../../../global.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: false
    };
    this.handleMenu = this.handleMenu.bind(this);
  }

  handleMenu() {
    console.log(this.state.menu);
    this.setState({ menu: !this.state.menu });
  }

  render() {
    return (
      <div classNameName="main">
        <Navbar handleMenu={this.handleMenu} open={this.state.menu}/>
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
