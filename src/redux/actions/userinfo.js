import {
  FETCH_USER_INFO,
  FETCH_USER_INFO_FAIL,
  FETCH_USER_INFO_SUCCESS
} from '../../constants/ActionTypes';

export function fetchUserInfo (payload) {
  return {
    type: FETCH_USER_INFO,
    payload
  };
}

export function fetchUserInfoSuccess (payload) {
  return {
    type: FETCH_USER_INFO_SUCCESS,
    payload
  };
}

export function fetchUserInfoFail () {
  return {
    type: FETCH_USER_INFO_FAIL,
  };
}
