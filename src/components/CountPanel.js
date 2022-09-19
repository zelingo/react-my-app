import React, { Component } from "react";
import ClickCounter from "./ClickCounter";


class CountPanel extends Component{

  constructor(props){
    super(props)

    this.initCounts = [10, 20, 30];
    const initSum = this.initCounts.reduce((prev, curr)=> prev + curr);
    this.state = { sum: initSum }
  }


  onCountUpdate(newCount, prevCount){
    const changedCount = newCount - prevCount;
    this.setState({sum: this.state.sum + changedCount})
  }
  

  render(){

    console.log("enter CountPanel render")
    return (
      <div>
         <ClickCounter caption="first" initCount={this.initCounts[0]} onUpdate = {(newCount, prevCount)=> this.onCountUpdate(newCount, prevCount)}></ClickCounter>
        <ClickCounter caption= "second" initCount={this.initCounts[1]} onUpdate = {(newCount, prevCount)=> this.onCountUpdate(newCount, prevCount)}></ClickCounter>
        <ClickCounter  caption="third" initCount={this.initCounts[2]} onUpdate = {(newCount, prevCount)=> this.onCountUpdate(newCount, prevCount)}></ClickCounter>
        <button onClick={() => this.forceUpdate()}> force update</button>
        <p>总计：{this.state.sum}</p>
      </div>
    )
  }

}

export default CountPanel;