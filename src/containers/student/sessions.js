import React, { Component, PropTypes } from 'react';
import Highlight from '../../helpers/highlight.js';

class Sessions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
    this.handleTextChange = this.handleTextChange.bind(this);
    this.updateSessions = this.updateSessions.bind(this);
  }

  handleTextChange(e) {
    this.setState({ text: e.target.value });
  }

  updateSessions() {
    if (this.state.text) {
      const student = this.props.data;
      student.notes.push(this.state.text);
      this.props.updateStudent(student);
      this.forceUpdate();
    }
  }

  render() {
    const rows = this.props.data.notes.map((note, index) => (
      <li key={index}>
        <div className="collapsible-header center">Session: {index}</div>
        <div className="collapsible-body"><p>{note}</p></div>
      </li>
      )
    );

    return (
      <div className="card">
        <div className="card-content black-text">
          <span className="card-title">
            Sessions
            <button href="#modal1" className="modal-trigger btn-floating btn-large waves-effect waves-light blue right">
              <i className="fa fa-plus"></i>
            </button>
          </span>
          <hr />
          <ul className="collapsible" data-collapsible="expandable">
            { rows }
          </ul>
        </div>
        <div id="modal1" className="modal">
          <div className="modal-content">
            <h4>Sessions</h4>
            <p>What do you think of the student performance today?</p>
            <textarea
              value={this.state.text}
              onChange={this.handleTextChange}
              style={{ height: 250 }}
            />
          </div>
          <div className="modal-footer">
            <a onClick={this.updateSessions} className=" modal-action modal-close waves-effect waves-blue btn-flat btn">Save</a>
            <a className=" modal-action modal-close waves-effect waves-blue btn-flat btn">Close</a>
          </div>
        </div>
      </div>
    );
  }
}

Sessions.propTypes = {
  data: PropTypes.object,
  updateStudent: PropTypes.func
};

export default Sessions;
