import React, { Component } from "react";
import ClickCounter from "./ClickCounter";
import Summary from "./Summary";


class CountPanel extends Component{


  render(){

    console.log("enter CountPanel render")
    return (
      <div>
        <ClickCounter caption="first"/>
        <ClickCounter caption="second"/>
        <ClickCounter caption="third"/>
        <Summary/>
      </div>
    )
  }

}

export default CountPanel;