import {
  FETCH_LOGIN,
  FETCH_LOGIN_FAIL,
  FETCH_LOGIN_SUCCESS
} from '../../../constants/ActionTypes';

const initialState = {
  token: ''
};

const login = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_LOGIN:
    case FETCH_LOGIN_FAIL:
      return initialState;
    case FETCH_LOGIN_SUCCESS:
      return {
        ...state,
        ...payload
      };
    default:
      return state;
  }
};

export default login;
