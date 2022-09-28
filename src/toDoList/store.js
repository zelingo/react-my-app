import { configureStore, combineReducers } from "@reduxjs/toolkit"
import { reducer as todoReducer } from "./toDo";
import { reducer as filterReducer } from './filter';

// import TodoListApp from './toDoApp';

// function callback(measures) {
//   // do something with the measures
//   console.log(measures)
// }

// const options = {
//   shouldLog: true,
//   port: 8080,
//   timeout: 12000, // Load the extension after 12 sec.
//   components:[TodoListApp]
// }

// assign the observer to the global scope, as the GC will delete it otherwise
// window.observer = registerObserver(options, callback)

const reducer = {
  todos: todoReducer,
  filter: filterReducer
}

const store = configureStore({reducer});

export default store;