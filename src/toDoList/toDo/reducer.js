import { TOGGLE_TODO, ADD_TODO, REMOVE_TODO } from "./ActionType";

export default function reducer(state = [], action) {
  switch(action.type){
    case ADD_TODO:
      return [action.item, ...state];

    case REMOVE_TODO:
      return state.filter(({id})=> id!== action.id);
    case TOGGLE_TODO:
      return state.map((item)=> {
        if(item.id === action.id) {
          return {...item, completed: !item.completed};
        }
        return item;
      });
    default:
      return state;
  }
}