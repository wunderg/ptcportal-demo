import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { Input } from 'react-materialize';


import { addStudent } from '../../actions/index';

class NewStudent extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleChangeInstructor = this.handleChangeInstructor.bind(this);
    this.state = {
      instructor: this.props.instructor || 'None',
    };
  }

  handleChangeInstructor(e) {
    this.setState({ instructor: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const student = { name: this.props.data.name.value, email: this.props.data.email.value, instructor: this.state.instructor };
    this.props.addStudent(student);
    this.props.resetForm();
  }

  render() {
    const instructorOptions = this.props.instructors.map(item => item.name).map(item => (<option value={item} key={item}> {item} </option>));
    const { fields: { name, email, instructor } } = this.props;
    return (
      <div className="row">
        <form className="col s12" onSubmit={this.onSubmit} >
          <div className="row">
            <div className="divider"></div>
            <div className="input-field col s6 offset-s3">
              <input type="text" className="validate form-control" {...name} />
              <label htmlFor="icon_prefix">Name</label>
            </div>
            <div className="input-field col s6 offset-s3">
              <input type="text" className="validate form-control" {...email} />
              <label htmlFor="icon_telephone">Email</label>
            </div>
            <div className="input-field col s6 offset-s3">
              <Input s={12} type="select" label="Choose Instructor" onChange={this.handleChangeInstructor}>
                <option>None</option>
                { instructorOptions }
              </Input>
            </div>
          </div>
          <button className="btn waves-effect waves-light col s6 offset-s3" type="submit">
            Submit
            <i className="fa fa-info fa-2x fa-spin right"></i>
          </button>
        </form>
      </div>
    );
  }
}

NewStudent.propTypes = {
  fields: PropTypes.object,
  handleSubmit: PropTypes.func,
  data: PropTypes.object,
  addStudent: PropTypes.func,
  resetForm: PropTypes.func
};

function mapStateToProps(state) {
  return {
    data: state.form.NewStudent,
    instructors: state.instructors.instructors
  };
}

export default reduxForm({
  form: 'NewStudent',
  fields: ['name', 'email', 'instructor']
}, mapStateToProps, { addStudent })(NewStudent);
