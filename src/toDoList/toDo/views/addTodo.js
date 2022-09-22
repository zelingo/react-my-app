import React from "react";
import { connect } from "react-redux";
import { addTodo } from './../Actions';
import './../../style.css';


class AddTodo extends React.Component{

  constructor(){
    super()
    this.onSubmit = this.onSubmit.bind(this);
    this.refInput = this.refInput.bind(this);
  }

  refInput(node){
    this.input = node;
  }

  onSubmit(e){
    e.preventDefault();
    if(!this.input.value.trim()) return;
    this.props.onAdd(this.input.value);
    this.input.value = ""
  }

  render(){
    return(
      <form onSubmit={this.onSubmit} >
        <input type="text" name="" id="" ref={this.refInput} />
        <button type="submit">添加</button>
      </form>
    )
  }
}

const mapDispatchToProps = (dispatch)=>{
  return {
    onAdd: (text)=>{
      dispatch(addTodo(text))
    }
  }
}

export default connect(null, mapDispatchToProps)(AddTodo)