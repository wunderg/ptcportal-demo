import React, { Component, PropTypes } from 'react';

class TextInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: this.props.text || ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit() {
    this.setState({ text: '' });
  }

  render() {
    return (
      <div className="row">
        <div className="col s12">
          <div className="input-field col s6">
            <input id="last_name" type="text" className="validate" />
              <label htmlFor="last_name">Last Name</label>
            </div>
          </div>
        </div>
    );
  }
}

TextInput.propTypes = {
  text: PropTypes.string,
};

export default TextInput;
