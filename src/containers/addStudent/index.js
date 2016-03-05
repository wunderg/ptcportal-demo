import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';


class NewStudent extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e, b) {
    e.preventDefault();
    e.persist();
    console.dir(e);
  }
  render() {
    const { handleSubmit } = this.props;
    const { fields: { name, email } } = this.props;
    return (
      <div className="row">
        <form className="col s12" onSubmit={this.onSubmit} >
          <div className="row">
            <div className="input-field col s6">
              <input type="text" className="validate form-control" {...name} />
              <label htmlFor="icon_prefix">Name</label>
            </div>
            <div className="input-field col s6">
              <input type="text" className="validate form-control" {...email} />
              <label htmlFor="icon_telephone">Email</label>
            </div>
          </div>
          <button className="btn waves-effect waves-light" type="submit">
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
  handleSubmit: PropTypes.func
};

export default reduxForm({
  form: 'NewStudent',
  fields: ['name', 'email']
})(NewStudent);
