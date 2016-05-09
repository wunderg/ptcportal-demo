import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchStudents, fetchInstructors, selectStudent, updateStudent } from '../../actions';

// import TextInput from '../text-input';
import Filters from '../filters';
import Students from '../students';
import Spinner from '../../helpers/spinner.js';

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    if (this.props.user.isAuthenticated) {
      this.props.fetchStudents();
      this.props.fetchInstructors();
    }
  }


  render() {
    if (this.props.students.isFetching || this.props.instructors.isFetching) {
      return <Spinner />;
    }
    return (
      <div className="row">
        <div className="col s12">
          <Filters />
        </div>
        <div className="col s12">
          <Students data={ this.props.students } selectStudent={this.props.selectStudent} updateStudent={this.props.updateStudent}/>
        </div>
      </div>
    );
  }
}

Dashboard.contextTypes = {
  router: PropTypes.object
};

function mapStateToProps(state) {
  console.log(state);
  return {
    students: state.slocal,
    user: state.user,
    instructors: state.instructors,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchStudents, selectStudent, updateStudent, fetchInstructors }, dispatch);
}

Dashboard.propTypes = {
  user: PropTypes.object,
  students: PropTypes.object,
  fetchStudents: PropTypes.func,
  history: PropTypes.object,
  selectStudent: PropTypes.func,
  updateStudent: PropTypes.func,
  fetchInstructors: PropTypes.func,
  instructors: PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
