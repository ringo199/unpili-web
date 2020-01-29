import {
  FETCH_COMMENT_LIST,
  FETCH_COMMENT_LIST_FAIL,
  FETCH_COMMENT_LIST_SUCCESS,

  FETCH_COMMENT_DETAIL,
  FETCH_COMMENT_DETAIL_FAIL,
  FETCH_COMMENT_DETAIL_SUCCESS
} from '../../../constants/ActionTypes';

const initialState = {
  rows: []
};

const list = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_COMMENT_LIST:
    case FETCH_COMMENT_LIST_FAIL:
    case FETCH_COMMENT_DETAIL:
    case FETCH_COMMENT_DETAIL_FAIL:
      return {
        ...state
      };
    case FETCH_COMMENT_LIST_SUCCESS:
      return {
        ...state,
        ...payload
      };
    case FETCH_COMMENT_DETAIL_SUCCESS:
      return (() => {
        const { rows } = state;
        const index = rows.findIndex(item => item.id === payload.commentId);
        rows[index].children = {
          rows: payload.rows,
          pageNo: payload.pageNo,
          pageSize: payload.pageSize,
          total: payload.total
        };
        return {
          ...state,
          rows
        };
      })();
    default:
      return state;
  }
};

export default list;
