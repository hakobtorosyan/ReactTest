import React, { Component } from 'react';
import '../../styles/InputWork.css';
import '../../styles/Image.css';

let nextWorkId = 0;

class InputWork extends Component {

  setInputFiled(event)
  {
    event.preventDefault();
    this.props.store.setState({workInputField: event.target.value});
  }

  addWork()
  {
    if(this.props.store.state.activeTodo !== "") {
      let todo = this.props.store.state.todos.filter(( todo ) =>
         todo.todoName === this.props.store.state.activeTodo
      );
      if(this.workName.value !== "") {
        let container = todo[0].works.filter(( work ) =>
           work.workName === this.workName.value
        );
        if(container.length === 0) {
          nextWorkId++;
          let works = [...todo[0].works,{id: (nextWorkId), workName: this.workName.value, color: "white"}];
          todo = Object.assign({},todo[0],{works: works});
          let filteredTodos = this.props.store.state.todos.filter((tod) => tod.todoName !== todo.todoName);
          let todos = [...filteredTodos,todo];
          this.props.store.setState({todos: todos, visibleTodos: todos, visibleWorks: works, todoInputField: "", workInputField: ""});
        }else {
          alert("we have work with same name, please insert another name");
        }
      }
    }
  }

  render()
  {
    return (
      <div id="inputWorkDiv">
        <div>
          <input id="inputWork" type="text" value={this.props.store.state.workInputField} placeholder="Enter new Todo" ref={(input) => this.workName = input} onInput={this.setInputFiled.bind(this)}/>
        </div>
            <div id="inputWorkButtonDiv">
            <a href="#" onClick={this.addWork.bind(this)}><img alt="Insert" src="../../../plus.png" className="plusButton"/></a>
            </div>
      </div>
    );
  }
}

export default InputWork;
