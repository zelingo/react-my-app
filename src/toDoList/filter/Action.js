import { SET_FILTER } from "./ActionType";

export const selfFilter = (type) => {
  return ({
    type: SET_FILTER,
    filterType: type
  })
}