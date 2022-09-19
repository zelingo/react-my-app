import React, { Component} from "react";
import SummaryStore from "../stores/SummaryStore";


class Summary extends React.Component{

  constructor(){
    super();
    this.onChange = this.onChange.bind(this);
    this.state = { sum: SummaryStore.getSummary()}
  }

  componentDidMount(){
    SummaryStore.addChangeListener(this.onChange)
  }

  componentWillUnmount(){
    SummaryStore.removeChangeListener(this.onChange)
  }

  onChange(){
    this.setState({ sum: SummaryStore.getSummary()})
  }
  render(){
    return (
      <p>总计：{this.state.sum}</p>
    )
  }
}

export default Summary;