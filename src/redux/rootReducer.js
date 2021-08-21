import { combineReducers } from 'redux';
import testReducer from './Test/test.reducer';

export default combineReducers({
  test: testReducer,
});
