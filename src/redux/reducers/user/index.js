import { combineReducers } from 'redux';
import list from './list';
import login from './login';
import register from './register';

export default combineReducers({
  list,
  login,
  register
});