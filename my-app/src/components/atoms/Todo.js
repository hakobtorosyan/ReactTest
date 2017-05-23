// @flow
import React, { Component } from 'react';
import '../../styles/Todo.css';

class Todo extends Component {

getTodoWork()
{
  if(this.props.todo.color !== "green") {
    let todo : Object = Object.assign({},this.props.todo,{color: "green", textColor: "white"});
    let todos : Array<Object> = this.props.store.state.todos.filter((elem) => (todo.todoName !== elem.todoName));
    todos = [...todos,todo];
    this.props.store.setState({todos: todos});
    if(this.props.store.state.activeTodo === "")
    {
    this.props.store.setState({todos: todos, activeTodo: todo.todoName, visibleWorks: todo.works, visibleTodos: todos});
    }
    else{
      let activeTodo : Object = this.props.store.state.todos.filter(( todo ) => ( todo.todoName === this.props.store.state.activeTodo ));
      let passiveTodo : Object = Object.assign({},activeTodo[0],{color: "white", textColor: "black"});
      let elements : Array<Object> = this.props.store.state.todos.filter((td) => (td.todoName !== passiveTodo.todoName && td.todoName !== todo.todoName));
      elements = [...elements, todo, passiveTodo];
      this.props.store.setState({todos: elements, activeTodo: todo.todoName, visibleWorks: todo.works, visibleTodos: elements});
    }
  }
}

  render()
  {
    return (
        <tr key={this.props.todo.todoName}>
          <td className="todoLi" style={{backgroundColor: this.props.todo.color}}>
            <a className="todoLink" style={{color: this.props.todo.textColor}} href="#" onClick={this.getTodoWork.bind(this)}>{this.props.todo.todoName}</a>
        </td>
      </tr>
    );
  }
}

export default Todo;
