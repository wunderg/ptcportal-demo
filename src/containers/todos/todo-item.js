import React, { Component, PropTypes } from 'react';
import ListItem from 'material-ui/lib/lists/list-item';
import Checkbox from 'material-ui/lib/checkbox';
import Colors from 'material-ui/lib/styles/colors';

const style = {
  color: Colors.red200,
  top: 5
};

class Todo extends Component {
  constructor(props) {
    super(props);
    this.complete = this.complete.bind(this);
    this.delete = this.delete.bind(this);
  }

  complete(e) {
    e.preventDefault();
    e.stopPropagation();
    this.props.toggle(this.props.item._id);
    this.props.postTodo({ _id: this.props.item._id })
    .then(result => {
      if (result.payload.statusText !== 'OK') {
        this.props.toggle(this.props.item._id);
      }
    });
  }

  delete(e) {
    e.preventDefault();
    this.props.delete(this.props.item._id);
  }

  render() {
    return (
      <div className="">
      <ListItem
        primaryText={this.props.item.text}
        rightIcon={<i className="fa fa-close fa-lg" style={style} onClick={this.delete}></i>}
        leftCheckbox={
        <Checkbox onClick={this.complete} checked={this.props.item.completed} />}
      />
      </div>
    );
  }
}

Todo.propTypes = {
  toggle: PropTypes.func,
  text: PropTypes.string,
  item: PropTypes.object,
  postTodo: PropTypes.func,
  delete: PropTypes.func
};

export default Todo;
