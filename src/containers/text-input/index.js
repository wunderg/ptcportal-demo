import React, { Component, PropTypes } from 'react';
import TextField from 'material-ui/lib/text-field';
import FlatButton from 'material-ui/lib/flat-button';

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
      <div className="">
        <TextField
          floatingLabelText="Type in Here"
          onChange={this.handleChange}
          value={this.state.text}
        />
        <FlatButton onClick={this.handleSubmit} label="Add Todo" primary={true} />
      </div>
    );
  }
}

TextInput.propTypes = {
  text: PropTypes.string,
};

export default TextInput;
