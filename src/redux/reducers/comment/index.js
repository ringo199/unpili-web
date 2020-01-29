import { combineReducers } from 'redux';
import list from './list';
import save from './save';

export default combineReducers({
  list,
  save
});
