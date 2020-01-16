import {
  FETCH_LOGIN,
  FETCH_LOGIN_FAIL,
  FETCH_LOGIN_SUCCESS
} from '../../constants/ActionTypes';

export function fetchLogin (payload) {
  return {
    type: FETCH_LOGIN,
    payload
  };
}

export function fetchLoginSuccess (payload) {
  return {
    type: FETCH_LOGIN_SUCCESS,
    payload
  };
}

export function fetchLoginFail () {
  return {
    type: FETCH_LOGIN_FAIL,
  };
}