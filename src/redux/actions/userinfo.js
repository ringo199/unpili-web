import {
  FETCH_USER_INFO,
  FETCH_USER_INFO_FAIL,
  FETCH_USER_INFO_SUCCESS
} from '../../constants/ActionTypes';
import store from 'store2';
// import { message } from 'antd';

export function fetchUserInfo () {
  return {
    type: FETCH_USER_INFO
  };
}

export function fetchUserInfoSuccess (payload) {
  return {
    type: FETCH_USER_INFO_SUCCESS,
    payload
  };
}

export function fetchUserInfoFail () {
  store.local.remove('token');
  return {
    type: FETCH_USER_INFO_FAIL,
  };
}
