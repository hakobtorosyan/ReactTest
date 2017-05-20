import React, { Component } from 'react';
import '../../styles/InputTodo.css';
import '../../styles/Image.css';

class InputTodo extends Component {

setInputFiled(event)
{
  event.preventDefault();
  this.props.store.setState({todoInputField: event.target.value});
}

  addTodo()
  {
    if (this.todoName.value !== "") {

      let container = this.props.store.state.todos.filter(( todo ) =>
         todo.todoName === this.todoName.value
      );
      if(container.length === 0) {
        let todos = [...this.props.store.state.todos,{todoName: this.todoName.value, works: [], color: "white", textColor: "black"}];
        this.props.store.setState({todos: todos, visibleTodos: todos, todoInputField: ""});
      }
      else {
        alert("We have todo with same name,please insert another name");
      }
    }
  }

  render()
  {
    return (
      <div id="inputTodoDiv">
        <div>
          <input id="inputTodo" type="text" value={this.props.store.state.todoInputField} placeholder="Enter new list name" ref={(input) => this.todoName = input} onInput={this.setInputFiled.bind(this)} />
        </div>
        <div id="inputTodoButtonDiv">
            <a  href="#" onClick={this.addTodo.bind(this)}><img alt="Insert" src="../../../plus.png" className="plusButton"/></a>
        </div>
      </div>
    );
  }
}

export default InputTodo;
