import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import './style.scss';
import { loginUser } from '../../actions/login.js';

class Login extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    console.log(this);
    e.preventDefault();
    let creds = {
      email: this.props.data.email.value,
      pass: this.props.data.pass.value

    };

    this.props.loginUser(creds, this.props.dispatch);
    // const student = { name: this.props.data.email.value, email: this.props.data.email.value };
    // this.props.addStudent(student);
    this.props.resetForm();
  }

  render() {
    const { fields: { email, pass } } = this.props;
    return (
        <div className="middle valign-wrapper">
          <form className="login-form" onSubmit={this.onSubmit} >
            <div className="input-field">
              <input type="text" className="validate form-control" {...email} />
              <label htmlFor="icon_prefix">Email</label>
            </div>
            <div className="input-field">
              <input type="password" className="validate form-control" {...pass} />
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
  fields: ['email', 'pass']
}, mapStateToProps, { loginUser })(Login);
