// @flow
import React, { Component } from 'react';
import TodoList from '../molecules/TodoList';
import InputTodo from '../molecules/InputTodo';
import '../../styles/TodoBox.css';

let visibleTodos : Array<Object> = [];

class TodoBox extends Component {
searchValue: HTMLInputElement;

  searchTodo() {
    if(this.searchValue.value !== "") {
      visibleTodos = this.props.store.state.todos.filter( (todo) => (todo.todoName.toUpperCase()).includes((this.searchValue.value.toUpperCase())));
      this.props.store.setState({visibleTodos: visibleTodos});
    }
    else {
      this.props.store.setState({visibleTodos: this.props.store.state.todos});
    }
  }

  componentWillMount()
  {
  this.props.store.setState({visibleTodos: this.props.store.state.todos});
  }

  render()
  {
    return(
      <div className="todoBoxDiv">
        <div id="todoBoxHeaderDiv">
          <h2 id="todoBoxHeader">Todo Lists</h2>
      </div>
      <input type="search" id="todoSearch" placeholder="Search for List..." onChange={this.searchTodo.bind(this)} ref={(input) => this.searchValue = input}/>
        <TodoList todos={this.props.store.state.visibleTodos} store={this.props.store}/>
        <InputTodo store={this.props.store}/>
  </div>
    );
  }
}

export default TodoBox;
