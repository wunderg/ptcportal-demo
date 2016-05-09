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
    this.handleSubmit();
  }

  handleChangeFilter(e) {
    this.setState({ filter: e.target.value });
    this.handleSubmit();
  }

  handleSubmit() {
    console.log(this.state);
  }

  render() {
    const filter = ['Show All', 'Not-Assigned', 'In-Progress', 'Not-Contacted', 'Accepted'];
    const filterOptions = filter.map(item => (<option value={item} key={item}> {item} </option>));
    const instructorOptions = this.props.instructors.map(item => item.name).map(item => (<option value={item} key={item}> {item} </option>));
    return (
      <div className="row">
        <div className="input-field col s6">
          <Input s={12} type="select" label="Choose Instructor" onChange={this.handleChangeInstructor}>
            { instructorOptions }
          </Input>
        </div>

        <div className="input-field col s6">
          <Input s={12} type="select" label="Choose Filter" onChange={this.handleChangeFilter}>
             { filterOptions }
          </Input>
        </div>
      </div>
    );
  }
}

TextInput.propTypes = {
  text: PropTypes.string,
  instructors: PropTypes.array,
  filter: PropTypes.string,
  instructor: PropTypes.string
};

export default TextInput;
