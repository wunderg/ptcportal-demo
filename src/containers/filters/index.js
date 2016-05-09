import React, { Component, PropTypes } from 'react';
import { Input } from 'react-materialize';

class TextInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      instructor: this.props.instructor || '',
      filter: this.props.filter || ''
    };

    this.handleChangeInstructor = this.handleChangeInstructor.bind(this);
    this.handleChangeFilter = this.handleChangeFilter.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChangeInstructor(e) {
    this.setState({ instructor: e.target.value });
    this.handleSubmit()
  }

  handleChangeFilter(e) {
    this.setState({ filter: e.target.value });
    this.handleSubmit()
  }

  handleSubmit() {
    console.log(this.state);
  }

  render() {
    return (
      <div className="row">
        <div className="input-field col s6">
          <Input s={12} type='select' label="Choose Instructor" onChange={this.handleChangeInstructor}>
            <option value='1'>Option 1</option>
            <option value='2'>Option 2</option>
            <option value='3'>Option 3</option>
          </Input>
        </div>

        <div className="input-field col s6">
          <Input s={12} type='select' label="Choose Filter" onChange={this.handleChangeFilter}>
            <option value='1'>Option 1</option>
            <option value='2'>Option 2</option>
            <option value='3'>Option 3</option>
          </Input>
        </div>
      </div>
    );
  }
}

TextInput.propTypes = {
  text: PropTypes.string,
};

export default TextInput;
