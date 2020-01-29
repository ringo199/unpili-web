import fetch from '../../../core/nextFetch';
import { take, put, fork } from 'redux-saga/effects';
import {
  FETCH_COMMENT_DETAIL,
} from '../../../constants/ActionTypes';
import { fetchCommentDetailFail, fetchCommentDetailSuccess } from '../../actions/comment';
import { api } from '../../../constants/Api';
/**
 * videoList saga
 */
export function* fetchCommentDetail() {
  while (true) {
    const { payload } = yield take(FETCH_COMMENT_DETAIL);
    try {
      const res = yield fetch.get(api.getCommentDetail, {
        query: {
          ...payload
        }
      });
      const data = yield res.data;
      yield put(fetchCommentDetailSuccess({
        commentId: payload.commentId,
        ...data
      }));
    } catch (e) {
      yield put(fetchCommentDetailFail());
    }
  }
}

export default [
  fork(fetchCommentDetail)
];
