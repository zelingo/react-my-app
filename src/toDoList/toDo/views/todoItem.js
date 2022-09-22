import React from "react"


const todoItem = ({id, text, completed, onRemove, onToggle})=>{
  const checkedProp = completed ? {checked: true} : {};
  return (
    <li style={{
      "display": "flex",
      "align-items":"center",
      "justify-content":"center",
    }}>
      <input style={{"width":"10%"}} type="checkbox" name="" id="" {...checkedProp} onChange={onToggle}/>
      <span style={{"width": "20%"}}>{id}</span>
      <span style={{"width": "60%"}}>{text}</span>
      <a  style={{"width":"10%", "color": "blue", "cursor": "pointer"}} onClick={onRemove}>删除</a>  
    </li>
  )
}

export default todoItem;