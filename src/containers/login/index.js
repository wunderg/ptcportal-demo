import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import './style.scss';
// import { addStudent } from '../../actions/index';

class Login extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    console.log(this);
    e.preventDefault();
    // const student = { name: this.props.data.email.value, email: this.props.data.email.value };
    // this.props.addStudent(student);
    this.props.resetForm();
  }

  render() {
    const { fields: { email, password } } = this.props;
    return (
        <div className="middle valign-wrapper">
          <form className="login-form" onSubmit={this.onSubmit} >
            <div className="input-field">
              <input type="text" className="validate form-control" {...email} />
              <label htmlFor="icon_prefix">Email</label>
            </div>
            <div className="input-field">
              <input type="password" className="validate form-control" {...password} />
              <label htmlFor="icon_telephone">Password</label>
            </div>
            <div className="center-align login-buttons">
            <button className="btn waves-effect waves-light" type="submit">
              SignUP
              <i className="fa fa-info fa-2x fa-spin right"></i>
            </button>
            <button className="btn waves-effect waves-light" type="submit">
              Login
              <i className="fa fa-info fa-2x fa-spin right"></i>
            </button>
            </div>
          </form>
        </div>
    );
  }
}

Login.propTypes = {
  fields: PropTypes.object,
  handleSubmit: PropTypes.func,
  data: PropTypes.object,
  resetForm: PropTypes.func
};

function mapStateToProps(state) {
  return {
    data: state.form.login
  };
}

export default reduxForm({
  form: 'login',
  fields: ['email', 'password']
}, mapStateToProps, {})(Login);
