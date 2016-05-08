import React, { Component, PropTypes } from 'react';
import Info from './info';
import Notes from './notes';
import Sessions from './sessions';
import Ratings from './ratings';
import { connect } from 'react-redux';
import { updateStudent } from '../../actions/index.js';
import './style.scss';

class Student extends Component {

  componentDidMount() {
    $(document).ready(function(){
      $('.collapsible').collapsible({
        accordion: false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
      });
    });
  }

  render() {
    return (
      <div className="row">
        <Info data={this.props.student}/>
        <Ratings updateStudent={updateStudent} data={this.props.student} />
        <Sessions />
        <Notes data={this.props.student} updateStudent={updateStudent} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    student: state.slocal.selectedStudent
  };
}

Student.PropTypes = {
  student: PropTypes.object,
  updateStudent: PropTypes.func
};

export default connect(mapStateToProps, { updateStudent })(Student);
