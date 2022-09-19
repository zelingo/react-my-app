import React, { Component } from "react";


class ClickCounter extends Component{
  constructor(props){
    super(props);
    // this.onClickButton = this.onClickButton.bind(this);
    this.state = { count: props.initCount }
  }

  onClickIncrementButton(){
    this.updateCount(true)
  }


  onClickDecrementButton(){
    this.updateCount(false)
    
  }

  updateCount(Increment){
    const prevCount = this.state.count;
    const newCount = Increment ? prevCount + 1 : prevCount -1;
    this.setState({count: newCount});
    this.props.onUpdate(newCount, prevCount)
  }

  /**
   * 当父组件重新渲染render被调用时，子组件的compnentWillReceiveProps会被调用;
   * 当前组件的props发生变化时，会被调用;
   * this.setState()改变内部state状态时，不会调用
   * @param {*} nextProps 
   */
  componentWillReceiveProps(nextProps){
    const { caption, initCount } = nextProps;
    console.log("enter componentWillReceiveProps:"+caption+ ":"+  initCount)
  }

  /**如果传入的props.caption没有发生变化、当前的state也没有发生变化，那么可以停止继续往下渲染，同时可以提高性能
   * 返回true，表示继续更新;
   * 返回false，表示停止更新;
   * @param {caption, initCount} nextProps 
   * @param {count} nextState 
   * @returns 布尔值 默认true
   */
  shouldComponentUpdate(nextProps, nextState){
    return (nextProps.caption !== this.props.caption) || (nextState.count !== this.state.count)
  }

  render(){
    const { caption } = this.props;
    console.log(`enter ${caption} render`)

    return (
      <div>
        <button onClick={()=> this.onClickIncrementButton()} > + </button>
        <button onClick={() => this.onClickDecrementButton()} > - </button>
        <p>{ caption } Click Count: { this.state.count }</p>
      </div>
    )
  }
}

export default ClickCounter; 