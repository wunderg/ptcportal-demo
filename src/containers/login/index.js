import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import './style.scss';
import { loginUser, signupUser } from '../../actions/login.js';

class Login extends Component {
  constructor(props) {
    super(props);
    this.onSignup = this.onSignup.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(props) {
    if (props.user.isAuthenticated) {
      this.context.router.push('/dashboard');
      this.props.resetForm();
    }
  }

  onSubmit(e) {
    e.preventDefault();
    const creds = {
      email: this.props.data.email.value,
      pass: this.props.data.pass.value

    };

    this.props.loginUser(creds);
  }

  onSignup(e) {
    e.preventDefault();
    const creds = {
      email: this.props.data.email.value,
      pass: this.props.data.pass.value

    };

    this.props.signupUser(creds);
  }

  render() {
    const { fields: { email, pass }, user } = this.props;
    return (
        <div className="middle valign-wrapper">
          <form className="login-form" onSubmit={this.onSubmit}>
            <div className="error-message center">{user.message}</div>
            <div className="input-field">
              <input type="text" className="validate form-control" {...email} />
              <label htmlFor="icon_prefix">Email</label>
            </div>
            <div className="input-field">
              <input type="password" className="validate form-control" {...pass} />
              <label htmlFor="icon_telephone">Password</label>
            </div>
            <div className="center-align login-buttons">
            <button onClick={this.onSignup} className="btn waves-effect waves-light">
              SignUP
              <i className="fa fa-info fa-2x fa-spin right"></i>
            </button>
            <button onClcik={this.onLogin} className="btn waves-effect waves-light">
              Login
              <i className="fa fa-info fa-2x fa-spin right"></i>
            </button>
            </div>
          </form>
        </div>
    );
  }
}

Login.contextTypes = {
  router: PropTypes.object.isRequired
};

Login.propTypes = {
  fields: PropTypes.object,
  data: PropTypes.object,
  resetForm: PropTypes.func,
  loginUser: PropTypes.func,
  dispatch: PropTypes.func,
  onSignup: PropTypes.func,
  signupUser: PropTypes.func,
  user: PropTypes.object,
};

function mapStateToProps(state) {
  return {
    data: state.form.login,
    user: state.user
  };
}

export default reduxForm({
  form: 'login',
  fields: ['email', 'pass']
}, mapStateToProps, { loginUser, signupUser })(Login);
