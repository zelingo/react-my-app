import {  configureStore  } from '@reduxjs/toolkit';
import { combineReducers } from 'react-redux';
import reducer  from './Reducer';



const initValue = {
  "first": 10,
  "second": 20,
  "third": 30 
}








const store = configureStore({
  reducer
})
export default store;     