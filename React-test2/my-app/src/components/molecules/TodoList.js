// @flow
import React, { Component } from 'react';
import Todo from '../atoms/Todo';
import "../../styles/TodoList.css";

class TodoList extends Component {
  render()
  {
    return (
      <div id="todoListDiv">
      <table>
        <tbody className="tbody">
          {this.props.todos.map((todo) =>  <Todo key={todo.todoName} todo={todo} store={this.props.store}/> )}
        </tbody>
      </table>
    </div>
    );
  }
}

export default TodoList;
