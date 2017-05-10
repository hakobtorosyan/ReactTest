import React, { Component } from 'react';
import InputElement from './InputElement';
import './InputList.css';
import Element from './Element';


class InputList extends Component {
    constructor(props)
    {
       super(props);
       this.state = {leftInputs: [], rightInputs: []};
       this.state.leftInputs.push(new Element(0,0,""));
       this.state.rightInputs.push(new Element(0,0,""));
       this.checkInput.bind(this);
    }

    checkInput(type,element,parent)
    {
        if(type === "left") {
            if(element.status === 0)
            {
                let time =  new Date();
                let uniqueId = time.getTime();
                let newElement = new Element(uniqueId, 0, "");
                let newArray = parent.state.leftInputs.concat(newElement);
                for(let item of newArray)
                {
                    if(item.id === element.id)
                        item.status = 1;
                }
                parent.setState(Object.assign({},parent.state,{leftInputs: newArray}));
            }
            if(element.value === "" && element.status === 1 && parent.state.leftInputs.length !== 1) {
                let newArray = [];
                for(let i = 0; i < parent.state.leftInputs.length; i++)
                {
                    if(parent.state.leftInputs[i].id !== element.id)
                    {
                        let newLeftInput = new Element(parent.state.leftInputs[i].id, parent.state.leftInputs[i].status, parent.state.leftInputs[i].value);
                        newArray.push(newLeftInput);
                    }
                }
                parent.setState(Object.assign({},parent.state,{leftInputs: newArray}));
            }
        }
        if(type === "right") {
            if(element.status === 0)
            {
                let time =  new Date();
                let uniqueId = time.getTime();
                let newElement = new Element(uniqueId, 0, "");
                let newArray = parent.state.rightInputs.concat(newElement);
                for(let item of newArray)
                {
                    if(item.id === element.id)
                        item.status = 1;
                }
                parent.setState(Object.assign({},parent.state,{rightInputs: newArray}));
            }
            if(element.value === "" && element.status === 1 && parent.state.rightInputs.length !== 1) {
                let newArray = [];
                for(let i = 0; i < parent.state.rightInputs.length; i++)
                {
                    if(parent.state.rightInputs[i].id !== element.id)
                    {
                        let newRightInput = new Element(parent.state.rightInputs[i].id, parent.state.rightInputs[i].status, parent.state.rightInputs[i].value);
                        newArray.push(newRightInput);
                    }
                }
                parent.setState(Object.assign({},parent.state,{rightInputs: newArray}));
            }
        }
    }


  render() {
        let leftElements = this.state.leftInputs;
        let rightElements = this.state.rightInputs;

    return (
      <div className="mainDiv">
          <div className="header">
              <h2 id="header">Should I eat at McDonalds?</h2>
          </div>
          <div id="headersDiv">
              <div className="leftBox">
                  <h3 id="pros">PROS</h3>
              </div>
              <div className="rightBox">
                  <h3 id="cons">CONS</h3>
              </div>
          </div>
          <div id="tableLeft">
              <table>
                  <tr>
                      <ol>
                          {leftElements.map((element) => {
                              return <InputElement key={element.id} id={element.id} status={element.status} parent={this} checkInput={this.checkInput} type={"left"} />;
                          })}
                      </ol>
                  </tr>
              </table>
          </div>
          <div id="tableRight">
              <table>
                  <tr>
                      <ol>
                          {rightElements.map((element) => {
                              return <InputElement key={element.id} id={element.id} status={element.status} parent={this}  checkInput={this.checkInput} type={"right"} />;
                          })}
                      </ol>
                  </tr>
              </table>
          </div>
      </div>
    );
  }
}

export default InputList;
