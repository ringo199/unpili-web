import {
  FETCH_COMMENT_LIST,
  FETCH_COMMENT_LIST_FAIL,
  FETCH_COMMENT_LIST_SUCCESS
} from '../../../constants/ActionTypes';

const initialState = {
  rows: []
};

const list = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_COMMENT_LIST:
    case FETCH_COMMENT_LIST_FAIL:
      return {
        ...state
      };
    case FETCH_COMMENT_LIST_SUCCESS:
      return {
        ...state,
        ...payload
      };
    default:
      return state;
  }
};

export default list;
