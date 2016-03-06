import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addTodo, fetchStudents } from '../../actions';

import TextInput from '../text-input';
import Table from '../table';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    console.log(this.props.fetchStudents());
  }


  render() {
    return (
      <div className="row">
        <div className="col s12">
          <TextInput />
        </div>
        <div className="col s12">
          <Table data={ this.props.data } />
        </div>
      </div>
    );
  }
}

Home.propTypes = {
};

function mapStateToProps(state) {
  return {
    data: state.slocal
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { addTodo, fetchStudents }, dispatch);
}

Home.propTypes = {
  addTodo: PropTypes.func,
  data: PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
