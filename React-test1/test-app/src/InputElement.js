import React, { Component } from 'react';
import Element from './Element'

class InputElement extends Component {

handleEvent(event)
{
    let element = new Element(this.props.id,this.props.status, event.target.value)
    this.props.checkInput(this.props.type, element,this.props.parent);
}

    render() {
        return (
            <li>
                <input type="text" onInput={this.handleEvent.bind(this)}/>
            </li>
        );
    }

}

export default InputElement;