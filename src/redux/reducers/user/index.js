import { combineReducers } from 'redux';
import list from './list';
import login from './login';
import register from './register';
import info from './info';

export default combineReducers({
  list,
  login,
  register,
  info
});