import * as ActionTypes from './ActionTypes';


const reducer = (state, action) => {
  const { counterCaption } = action;
  switch (action.type) {
    case ActionTypes.INCREMENT:
      return { ...state, [counterCaption]: state[counterCaption]++ };
    case ActionTypes.DECREMENT:
      return { ...state, [counterCaption]: state[counterCaption]-- };
    default:
      return state
  }
}

export default reducer;