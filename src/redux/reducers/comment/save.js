import {
  FETCH_SAVE_COMMENT,
  FETCH_SAVE_COMMENT_FAIL,
  FETCH_SAVE_COMMENT_SUCCESS
} from '../../../constants/ActionTypes';

const initialState = {
};

const save = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_SAVE_COMMENT:
    case FETCH_SAVE_COMMENT_FAIL:
      return {
        ...state
      };
    case FETCH_SAVE_COMMENT_SUCCESS:
      return {
        ...state,
        ...payload
      };
    default:
      return state;
  }
};

export default save;
