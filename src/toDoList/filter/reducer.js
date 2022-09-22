import { SET_FILTER } from "./ActionType";
import { ALL } from "../constants";

export default (state = ALL, action)=> {
  switch(action.type){
    case SET_FILTER:
      return action.filterType;
    default:
      return state;
  }
}