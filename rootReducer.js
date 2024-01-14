import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import otherReducer from './otherReducer';

const rootReducer = combineReducers({
  counter: counterReducer,
  otherData: otherReducer,
});

export default rootReducer;
