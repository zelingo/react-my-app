import React, { Component } from "react";
import Counter from "./Counter";
import Summary from './Summary';

class CountPanel extends Component{

  render(){

    console.log("enter CountPanel render")
    return (
      <div>
        <Counter caption="first"/>
        <Counter caption="second"/>
        <Counter caption="third"/>
        <hr/>
        {/* <Summary/> */}
      </div>
    )
  }

}

export default CountPanel;