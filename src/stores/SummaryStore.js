import CounterStore from './CounterStore';
import DisPatcher from './../DisPatcher';
import * as ActionTypes from './../ActionTypes';
import { EventEmitter } from 'events';


const CHANGE_EVENT = "changed";

const computeSummary = (counterValues)=> {
  let summary = 0;
  for (const key in counterValues) {
    if (counterValues.hasOwnProperty.call(counterValues, key)) {
       summary += counterValues[key];
    }
  }

  return summary;
}


const SummaryStore = Object.assign({}, EventEmitter.prototype, {
    getSummary(){
      return computeSummary(CounterStore.getCounterValues())
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


SummaryStore.dispatchToken = DisPatcher.register((action)=>{
  if((action.type === ActionTypes.INCREMENT) || (action.type === ActionTypes.DECREMENT)){
    // eslint-disable-next-line no-unused-expressions
    DisPatcher.waitFor([CounterStore.dispatchToken])
    SummaryStore.emitChange();
  }
})

export default SummaryStore;