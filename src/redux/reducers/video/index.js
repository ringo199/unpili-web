import { combineReducers } from 'redux';
import list from './list';
import cur from './cur';

export default combineReducers({
  list,
  cur
});