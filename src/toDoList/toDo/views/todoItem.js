/**
 * 在父组件todoList中由于增删操作,导致props.list数据发生变化，导致所有的子组件todoItem会重新render,对性能不友好，浪费计算内存。
 * 解决思路: 应该让没有发生改变的todoItem不渲染,影响渲染内容的只有 text、completed
 * 解决方法: 
 *    第一种: 通过react自身实现, 重新定义shouldComponentUpdate()
 *    第二种: 通过react-redux实现, 将组件用connect包起来，connect形成一个无名的容器组件类，在这个类中实现shouldComponentUpdate函数，如果prop类型是回调函数, 尽量引用同一个函数。
 */


import React from "react"
import { connect } from "react-redux";


 class todoItem  extends React.Component{

  /** 定义shouldComponentUpdate()
   * @returns 传入的text和completed不改变时，当前的todoItem组件不重新渲染
   */
  // shouldComponentUpdate(nextProps, nextState){
  //   return (nextProps.text!==this.props.text) || (nextProps.completed!==nextProps.completed)
  // }


  render(){
    const {id, text, completed, onRemoveAction, onToggleAction } = this.props;
    console.log('==== todoItem '+ id+ "render")
    const checkedProp = completed ? {checked: true} : {};
    return (
      <li style={{
        "display": "flex",
        "alignItems":"center",
        "justifyContent":"center",
      }}>
        <input style={{"width":"10%"}} type="checkbox" name="" id="" {...checkedProp} onChange={onToggleAction}/>
        <span style={{"width": "20%"}}>{id}</span>
        <span style={{"width": "60%"}}>{text}</span>
        <a  style={{"width":"10%", "color": "blue", "cursor": "pointer"}} onClick={onRemoveAction}>删除</a>  
      </li>
    )
  }
}

const mapDispatchToProps = (dispatch, ownProps)=> {
  return {
    onRemoveAction: ()=> ownProps.onRemove(ownProps.id),
    onToggleAction: ()=> ownProps.onToggle(ownProps.id)
  }
}

export default connect(null, mapDispatchToProps)(todoItem);