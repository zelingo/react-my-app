import { createStore } from 'redux';
import reducer from './Reducer';


const initValue = {
  "first": 10,
  "second": 20,
  "third": 30
}


const store = createStore(reducer, initValue);
export default store;     