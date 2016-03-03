import React, { Component, PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import './todos.css';

import Todo from './todo-item';
import Toggles from './toggles';

import List from 'material-ui/lib/lists/list';

const style = {
  marginTop: 10,
  // maxWidth: 450
};

class Todos extends Component {
  constructor() {
    super(...arguments);
    this.showAll = this.showAll.bind(this);
    this.showCompleted = this.showCompleted.bind(this);
    this.showInProgress = this.showInProgress.bind(this);
  }

  showAll() {
    this.props.showAll(this.props.todos);
  }

  showCompleted() {
    this.props.showCompleted(this.props.todos);
  }

  showInProgress() {
    this.props.showInProgress(this.props.todos);
  }

  render() {
    const todos = this.props.visible.todos.map(item =>
      <Todo
        key={item._id}
        item={item}
        toggle={this.props.toggle}
        postTodo={this.props.postTodo}
        delete={this.props.delete}
      />
      );
    return (
      <div className="">
        <div className="">
          <Toggles
            visible={this.props.visible}
            showAll={this.showAll}
            showCompleted={this.showCompleted}
            showInProgress={this.showInProgress}
          />
        </div>

        <div className="row around-lg around-md col">
          <div className="col-xs 12 col-lg-5 col-md-8">

            <List subheader="MY AWESOME TODO LIST" zDepth={1} style={style}>
              <ReactCSSTransitionGroup
                transitionName="smooth"
                transitionEnterTimeout={300}
                transitionLeaveTimeout={300}
                transitionAppearTimeout={100}
                transitionAppear={true}
              >
                {todos}
              </ReactCSSTransitionGroup>
            </List>
          </div>
        </div>
      </div>
    );
  }
}

Todos.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object),
  toggle: PropTypes.func,
  postTodo: PropTypes.func,
  delete: PropTypes.func,
  visible: PropTypes.object,
  showAll: PropTypes.func,
  showCompleted: PropTypes.func,
  showInProgress: PropTypes.func
};

export default Todos;
