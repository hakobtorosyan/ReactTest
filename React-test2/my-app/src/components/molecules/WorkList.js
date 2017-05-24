// @flow
import React, { Component } from 'react';
import Work from '../atoms/Work';
import '../../styles/WorkList.css';

class WorkList extends Component {

  render()
  {
    return (
      <table id="workTable">
        <tbody className="tbody">
          {this.props.store.state.visibleWorks.map((work) => <Work key={work.id} work={work} store={this.props.store}/> )}
        </tbody>
      </table>
    );
}
}
export default WorkList;
