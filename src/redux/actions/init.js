import {
  FETCH_INIT,
  FETCH_INIT_FAIL,
  FETCH_INIT_SUCCESS
} from '../../constants/ActionTypes';

export function fetchInit () {
  return {
    type: FETCH_INIT
  };
}

export function fetchInitSuccess (payload) {
  return {
    type: FETCH_INIT_SUCCESS,
    payload
  };
}

export function fetchInitFail (payload) {
  return {
    type: FETCH_INIT_FAIL,
    payload
  };
}