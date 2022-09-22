import React from "react";
import { connect } from "react-redux";
import { ALL, COMPLETED, UNCOMPLETED } from "../../constants";
import { selfFilter } from "../Action";

const selectItems = [ALL, COMPLETED, UNCOMPLETED];

class filterSelect extends React.Component{

  constructor(){
    super();
    this.onSelect = this.onSelect.bind(this)
  }

  onSelect(e){
    // console.log(e.target.selectedIndex)
    const selectedId = e.target.selectedIndex;
    this.props.onToggle(selectItems[selectedId])
  }

  render(){
    return (
      <select name="" id=""  defaultValue={this.props.selected}  onChange={this.onSelect}>
        {
          selectItems.map((value)=>(
            <option key={value} value={value}>{value}</option>
          ))
        }
      </select>
    )
  }
}

const mapStateToProps = ({filter})=>{
  return {selected: filter}
}

const mapDispatchToProps = (dispatch)=>{
  return {
    onToggle: (value)=>{
      dispatch(selfFilter(value))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(filterSelect)