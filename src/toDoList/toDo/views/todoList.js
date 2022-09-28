import React from "react";
import TodoItem from './todoItem';
import * as FilterTypes from './../../constants';
import { removeTodo, toggleTodo } from "../Actions";
import { connect } from "react-redux";

const todoList = ({list, onRemoveItem, onToggleItem})=>{
  return (
    <ul style={{
      "listStyle":"none", 
      "width":"40%"
     }}>
        <li style={{
      "display": "flex",
      "aligntems":"center",
      "justifyContent":"center",
      "border":"1px solid #ddd",
      "padding": "3px "
    }}>
      <span style={{"width":"10%"}} ></span>
      <span style={{"width": "20%"}}>ID</span>
      <span style={{"width": "60%"}}>事件</span>
      <span  style={{"width":"10%"}} >操作</span>  
      </li>
      {
        list.map((item) => (
        <TodoItem
          key={item.id}
          id={item.id}
          text={item.text}
          completed={item.completed}
          onRemove={onRemoveItem}
          onToggle={onToggleItem}
          />
        ))
      }
    </ul>
  )
}

const selectVisibleTodos = (todos, filter)=> {
  switch(filter){
    case FilterTypes.ALL:
      return todos;
    case FilterTypes.COMPLETED:
      return todos.filter(({completed})=> completed);
    case FilterTypes.UNCOMPLETED:
      return todos.filter(({completed})=> !completed);
    default:
      throw new Error("unsupposed filter")
  }
}


const mapStateToProps = (state)=>{
  return {
    list: selectVisibleTodos(state.todos, state.filter)
  }
}

const mapDispatchToProps = (dispatch)=> {
  return {
    onRemoveItem: (id)=>{
       dispatch(removeTodo(id))
    },
    onToggleItem: (id)=> {
      dispatch(toggleTodo(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(todoList)