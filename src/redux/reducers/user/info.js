import {
  FETCH_USER_INFO,
  FETCH_USER_INFO_FAIL,
  FETCH_USER_INFO_SUCCESS
} from '../../../constants/ActionTypes';

const initialState = {
  userInfo: {}
};

const info = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_USER_INFO:
      return {
        ...state,
        userInfo: payload
      };
    case FETCH_USER_INFO_FAIL:
      return initialState;
    case FETCH_USER_INFO_SUCCESS:
      return {
        ...state,
        ...payload
      };
    default:
      return state;
  }
};

export default info;
