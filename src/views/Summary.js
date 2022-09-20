import React from "react";
import store from './../Store';


class Summary extends React.Component{

  constructor(){
    super();
    
    // 订阅事件
    store.subscribe(this.onChange)
    this.state = this.getSummary()
  }

  getSummary(){
    const counterObj = store.getState();
    const sum = Object.keys(counterObj).reduce((prev, curr) => {
      if(counterObj.hasOwnProperty(curr)){
       return counterObj[prev] + counterObj[curr]
      }
      return counterObj[prev]
    })
    return { sum }
  }

  onChange(){
    this.setState(this.getSummary())
  }

  componentWillUnmount(){
    // 取消订阅事件
    store.unsubscribe(this.onChange)
  }

  render(){
    return (
      <p>总计: <span>{this.state.sum}</span></p>
    )
  }
}

export default Summary;