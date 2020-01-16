import {
  FETCH_REGISTER,
  FETCH_REGISTER_FAIL,
  FETCH_REGISTER_SUCCESS
} from '../../../constants/ActionTypes';

const initialState = {
  registerResult: {}
};

const register = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_REGISTER:
      return initialState;
    case FETCH_REGISTER_FAIL:
    case FETCH_REGISTER_SUCCESS:
      return {
        ...state,
        registerResult: payload
      };
    default:
      return state;
  }
};

export default register;
