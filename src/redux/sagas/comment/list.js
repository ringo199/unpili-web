import fetch from '../../../core/nextFetch';
import { take, put, fork } from 'redux-saga/effects';
import {
  FETCH_COMMENT_LIST,
} from '../../../constants/ActionTypes';
import { fetchCommentListFail, fetchCommentListSuccess } from '../../actions/comment';
import { api } from '../../../constants/Api';
/**
 * videoList saga
 */
export function* fetchCommentList() {
  while (true) {
    const { payload } = yield take(FETCH_COMMENT_LIST);
    try {
      const res = yield fetch.get(api.getCommentList, {
        query: {
          ...payload
        }
      });
      const data = yield res.data;
      yield put(fetchCommentListSuccess(data));
    } catch (e) {
      yield put(fetchCommentListFail());
    }
  }
}

export default [
  fork(fetchCommentList)
];
