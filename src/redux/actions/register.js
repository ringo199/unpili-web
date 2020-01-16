import {
  FETCH_REGISTER,
  FETCH_REGISTER_FAIL,
  FETCH_REGISTER_SUCCESS
} from '../../constants/ActionTypes';

export function fetchRegister (payload) {
  return {
    type: FETCH_REGISTER,
    payload
  };
}

export function fetchRegisterSuccess (payload) {
  return {
    type: FETCH_REGISTER_SUCCESS,
    payload
  };
}

export function fetchRegisterFail () {
  return {
    type: FETCH_REGISTER_FAIL,
  };
}
