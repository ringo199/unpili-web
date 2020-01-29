import { combineReducers } from 'redux';
import home from './home';
import user from './user';
import video from './video';
import comment from './comment';

export default combineReducers({
  home,
  user,
  video,
  comment
});