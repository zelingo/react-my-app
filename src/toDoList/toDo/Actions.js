import * as ActionType from './ActionType';

let nextToDoId = 0;

export const addTodo = (text) => ({
  type: ActionType.ADD_TODO,
  item: {
    id: nextToDoId++,
    text,
    completed: false
  }
})

export const removeTodo = (id) => ({
  type: ActionType.REMOVE_TODO,
  id
})

export const toggleTodo = (id) => ({
  type: ActionType.TOGGLE_TODO,
  id
})