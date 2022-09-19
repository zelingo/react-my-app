import DisPatcher from './../DisPatcher';
import * as ActionTypes from './../ActionTypes';
import { EventEmitter} from 'events';

const CHANGE_EVENT = "changed";
const counterValues = {
  "first": 10,
  "second": 20,
  "third": 30
}


const CounterStore = Object.assign({}, EventEmitter.prototype, {
  getCounterValues(){
    return counterValues;
  },
  emitChange(){
    this.emit(CHANGE_EVENT)
  },
  addChangeListener(callback){
    this.on(CHANGE_EVENT, callback)
  },
  removeChangeListener(callback){
    this.removeListener(callback)
  }

})


CounterStore.dispatchToken = DisPatcher.register((action)=>{
  if(action.type === ActionTypes.INCREMENT){
    counterValues[action.counterCaption]++;
    CounterStore.emitChange();
  }else if(action.type === ActionTypes.DECREMENT){
    counterValues[action.counterCaption]--;
    CounterStore.emitChange();

  }
})


export default CounterStore;