import fetch from '../../../core/nextFetch';
import { take, put, fork } from 'redux-saga/effects';
import {
  FETCH_SAVE_COMMENT,
} from '../../../constants/ActionTypes';
import { fetchCommentList,
  fetchSaveCommentFail, fetchSaveCommentSuccess } from '../../actions/comment';
import { api } from '../../../constants/Api';
/**
 * save comment saga
 */
export function* fetchSaveComment() {
  while (true) {
    const { payload } = yield take(FETCH_SAVE_COMMENT);
    try {
      const res = yield fetch.post(api.saveComment, {
        data: {
          ...payload
        }
      });
      yield put(fetchCommentList({ videoId: payload.videoId }));
      yield put(fetchSaveCommentSuccess(res));
    } catch (e) {
      yield put(fetchSaveCommentFail());
    }
  }
}

export default [
  fork(fetchSaveComment)
];
