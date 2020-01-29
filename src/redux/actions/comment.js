import {
  FETCH_COMMENT_LIST,
  FETCH_COMMENT_LIST_FAIL,
  FETCH_COMMENT_LIST_SUCCESS,

  FETCH_COMMENT_DETAIL,
  FETCH_COMMENT_DETAIL_FAIL,
  FETCH_COMMENT_DETAIL_SUCCESS,

  FETCH_SAVE_COMMENT,
  FETCH_SAVE_COMMENT_FAIL,
  FETCH_SAVE_COMMENT_SUCCESS,
} from '../../constants/ActionTypes';

export function fetchCommentList (payload) {
  return {
    type: FETCH_COMMENT_LIST,
    payload: {
      ...payload,
      pageNo: payload.pageNo || 1,
      pageSize: payload.pageSize || 10,
    }
  };
}

export function fetchCommentListSuccess (payload) {
  return {
    type: FETCH_COMMENT_LIST_SUCCESS,
    payload
  };
}

export function fetchCommentListFail () {
  return {
    type: FETCH_COMMENT_LIST_FAIL,
  };
}

export function fetchCommentDetail (payload) {
  return {
    type: FETCH_COMMENT_DETAIL,
    payload: {
      ...payload,
      pageNo: payload.pageNo || 1,
      pageSize: payload.pageSize || 10,
    }
  };
}

export function fetchCommentDetailSuccess (payload) {
  return {
    type: FETCH_COMMENT_DETAIL_SUCCESS,
    payload
  };
}

export function fetchCommentDetailFail () {
  return {
    type: FETCH_COMMENT_DETAIL_FAIL,
  };
}

export function fetchSaveComment (payload) {
  return {
    type: FETCH_SAVE_COMMENT,
    payload
  };
}

export function fetchSaveCommentSuccess (payload) {
  return {
    type: FETCH_SAVE_COMMENT_SUCCESS,
    payload
  };
}

export function fetchSaveCommentFail () {
  return {
    type: FETCH_SAVE_COMMENT_FAIL,
  };
}
