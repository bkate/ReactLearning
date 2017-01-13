import React from 'react';
import {connect} from 'react-redux';

import {addTodo} from './actions/action.js'

class App extends React.Component {

    render() {
        return (
          <div>
            <AddTodo
              onAddClick = {text => dispatch(addTodo(text))} />
            <TodoList todos = {visibleTodos} />
          </div>
    );
  }
}

function select(state) {
  return {
    visibleTodos: state.todos
  }
}

export default connect(select)(App);
