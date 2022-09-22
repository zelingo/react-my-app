import React from "react";
import { view as ToDos } from './toDo/index';
import { view as Filter } from './filter/index';
import './style.css';

const toDoApp = ()=> {
  return(
    <div className="todo-wrap">
      <ToDos/>
      <Filter/>
    </div>
  )
}

export default toDoApp;