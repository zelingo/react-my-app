import { configureStore, combineReducers } from "@reduxjs/toolkit"
import { reducer as todoReducer } from "./toDo";
import { reducer as filterReducer } from './filter';


const reducer = combineReducers({
  todos: todoReducer,
  filter: filterReducer
})

const store = configureStore({reducer});

export default store;