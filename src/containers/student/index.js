import React, { Component } from 'react';
import Info from './info';
import Notes from './notes';
import Sessions from './sessions';
import Ratings from './ratings';
import './style.scss';

class Student extends Component {

  componentDidMount() {
    $(document).ready(function(){
      $('.collapsible').collapsible({
        accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
      });
    });
  }

  render() {
    return (
      <div className="row">
        <Info />
        <Ratings />
        <Sessions />
        <Notes />
      </div>
    );
  }
}
export default Student;
