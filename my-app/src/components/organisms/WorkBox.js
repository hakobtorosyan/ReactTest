import React, { Component } from 'react';
import Header from '../molecules/Header';
import WorkList from '../molecules/WorkList';
import InputWork from '../molecules/InputWork';
import '../../styles/WorkBox.css';

class WorkBox extends Component {
  render()
  {
    return (
      <div className="workBoxDiv">
        <Header store={this.props.store}/>
        <WorkList store={this.props.store}/>
        <InputWork store={this.props.store}/>
      </div>
    );
  }
}

export default WorkBox;
