import React, { Component } from 'react';
import TodoBox from './components/organisms/TodoBox';
import WorkBox from './components/organisms/WorkBox';
import './App.css';

class App extends Component {

  constructor(props)
  {
    super(props);
    this.state = {todos: [], activeTodo: "", visibleTodos: [], visibleWorks: [], todoInputField: "", workInputField: ""};
  }

  render()
  {
    return (
        <div className="appBox">
          <TodoBox store={this}/>
          <WorkBox store={this}/>
        </div>
    );
  }
}

export default App;
