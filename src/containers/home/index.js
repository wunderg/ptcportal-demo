import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addTodo } from '../../actions';

import TextInput from '../text-input';
import Table from '../table';

class Home extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className="row">
        <TextInput />
        <Table data={ this.props.data } />
      </div>
    );
  }
}

Home.propTypes = {
};

function mapStateToProps(state) {
  return {
    data: state.main
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { addTodo }, dispatch);
}

Home.propTypes = {
  addTodo: PropTypes.func,
  data: PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
