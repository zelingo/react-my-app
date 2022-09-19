// 定义acrion的构造函数

import * as ActionTypes from './ActionTypes';
import DisPatcher from './DisPatcher';


// 递增
export  const increment = (counterCaption) =>{
  DisPatcher.dispatch({
    type: ActionTypes.INCREMENT,
    counterCaption
  })
}


// 递减
export  const decrement = (counterCaption) =>{
  DisPatcher.dispatch({
    type: ActionTypes.DECREMENT,
    counterCaption
  })
}

