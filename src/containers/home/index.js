import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  addTodo,
  toggleTodo,
  fetchTodos,
  postTodo,
  deleteTodo,
  showAll,
  showCompleted,
  showInProgress
} from '../../actions';

import TodoList from '../todos/todos-list';
import TextInput from '../text-input';

// import Colors from 'material-ui/lib/styles/colors';

// const style = {
//   textInput: {},
//   toggles: {},
//   list: {
//     maxWidth: 350
//   }
// };

class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchTodos();
  }

  render() {
    return (
      <div className="wrap container-fluid">
        <div className="row around-xs">
          <div className="col-xs-12 center-xs">
              <TextInput
                addTodo={this.props.addTodo}
                postTodo={this.props.postTodo}
              />
          </div>
        </div>
        <div className="row around-xs">
          <div className="col-xs-12 col-lg-12 around-xs">
              <TodoList
                todos={this.props.todos}
                visible={this.props.visible}
                postTodo={this.props.postTodo}
                toggle={this.props.toggleTodo}
                delete={this.props.deleteTodo}
                showAll={this.props.showAll}
                showCompleted={this.props.showCompleted}
                showInProgress={this.props.showInProgress}
              />
          </div>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
};

function mapStateToProps(state) {
  return {
    todos: state.todos,
    visible: state.visible
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { addTodo,
      toggleTodo,
      fetchTodos,
      postTodo,
      deleteTodo,
      showAll,
      showCompleted,
      showInProgress
    }, dispatch);
}

Home.propTypes = {
  addTodo: PropTypes.func,
  toggleTodo: PropTypes.func,
  todos: PropTypes.array,
  postTodo: PropTypes.func,
  fetchTodos: PropTypes.func,
  deleteTodo: PropTypes.func,
  showAll: PropTypes.func,
  visible: PropTypes.object,
  showCompleted: PropTypes.func,
  showInProgress: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
