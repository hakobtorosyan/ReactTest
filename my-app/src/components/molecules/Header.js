// @flow
import React, { Component } from 'react';
import '../../styles/Header.css';

class Header extends Component {

  render()
  {
    let allWorksCount : number = 0;
    let complated : number = 0;
    if(this.props.store.state.activeTodo !== "")
    {
      let todos = this.props.store.state.todos.filter((todo) => todo.todoName === this.props.store.state.activeTodo);
      allWorksCount = todos[0].works.length;
      if(allWorksCount !== 0) {
        for(let work of todos[0].works)
        {
          if(work.color === "grey")
          complated++;
        }
      }
    }

    return (
        <div id="worksHeader">
          <h1 id="workTitle">Work</h1>
        <h2 id="workCount">{complated} of {allWorksCount} Done</h2>
        </div>
    );
  }
}

export default Header;
