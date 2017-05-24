// @flow
import React, { Component } from 'react';
import '../../styles/Work.css';

class Work extends Component {

  setComplate()
  {
    if(this.props.work.color === "white") {
      let newWork : Object = Object.assign({},this.props.work,{color: "lightgrey"});
      let workOwnerTodo : Array<Object> = this.props.store.state.todos.filter((todo) => todo.todoName === this.props.store.state.activeTodo);
      let workInOwnerList : Array<Object> = workOwnerTodo[0].works.filter((work) => work.workName !== this.props.work.workName);
      workInOwnerList = [...workInOwnerList, newWork];
      let newTodo : Object = Object.assign({},workOwnerTodo[0],{works: workInOwnerList});
      let allTodos : Array<Object> = this.props.store.state.todos.filter((todo) => todo.todoName !== this.props.store.state.activeTodo);
      allTodos = [...allTodos,newTodo];
      let whiteWorks : Array<Object> = workInOwnerList.filter((work) => work.color !== "lightgrey");
      let greyWorks : Array<Object> = workInOwnerList.filter((work) => work.color !== "white");
      let visibleWorks = [...whiteWorks,...greyWorks];
      this.props.store.setState({todos: allTodos, visibleTodos: allTodos, visibleWorks: visibleWorks});

    } else {
      let newWork : Object = Object.assign({},this.props.work,{color: "white"});
      let workOwnerTodo : Array<Object> = this.props.store.state.todos.filter((todo) => todo.todoName === this.props.store.state.activeTodo);
      let workInOwnerList : Array<Object> = workOwnerTodo[0].works.filter((work) => work.workName !== this.props.work.workName);
      workInOwnerList = [...workInOwnerList, newWork];
      let newTodo : Object = Object.assign({},workOwnerTodo[0],{works: workInOwnerList});
      let allTodos : Array<Object> = this.props.store.state.todos.filter((todo) => todo.todoName !== this.props.store.state.activeTodo);
      allTodos = [...allTodos, newTodo];
      let whiteWorks : Array<Object> = workInOwnerList.filter((work) => work.color !== "lightgrey");
      let greyWorks : Array<Object> = workInOwnerList.filter((work) => work.color !== "white");
      let visibleWorks = [...whiteWorks,...greyWorks];
      this.props.store.setState({todos: allTodos, visibleWorks: visibleWorks, visibleTodos: allTodos,});
    }
  }

  render()
  {
    return(
      <tr key={this.props.work.id}>
        <td className="workItem" style={{backgroundColor: this.props.work.color}}>
            <div className="checkBox">
              <input type="checkBox" onChange={this.setComplate.bind(this)}/>
            </div>
            <div className="workName">
              <h3>{this.props.work.workName}</h3>
            </div>
       </td>
    </tr>
    );
  }
}

export default Work;
