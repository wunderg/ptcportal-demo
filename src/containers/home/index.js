import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addTodo } from '../../actions';


class Home extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className="wrap container-fluid">
        <h1> Hello World</h1>
      </div>
    );
  }
}

Home.propTypes = {
};

function mapStateToProps(state) {
  return {
    todos: state.todos,
    visible: state.visible
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { addTodo }, dispatch);
}

Home.propTypes = {
  addTodo: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
