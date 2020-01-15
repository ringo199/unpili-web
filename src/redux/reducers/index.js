import { combineReducers } from 'redux';
import home from './home';
import user from './user';
import video from './video';

export default combineReducers({
  home,
  user,
  video
});