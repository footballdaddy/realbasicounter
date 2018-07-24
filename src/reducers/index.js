import { combineReducers } from 'redux';
import counter from './counter';
import isOn from './isOn';

// main reducers
export default combineReducers({
  counter,
  isOn,
});
