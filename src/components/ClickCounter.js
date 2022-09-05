import React, { Component } from "react";


class ClickCounter extends Component{
  constructor(props){
    super(props);
    this.onClickButton = this.onClickButton.bind(this);
    this.state = { count: 0 }
  }

  onClickButton(){
    this.setState({count: this.state.count +1 })
  }



  render(){
    return (
      <div>
        <button onClick={this.onClickButton} >Click me</button>
        <p> Click Count: { this.state.count }</p>
      </div>
    )
  }
}

export default ClickCounter;