import fetch from '../../../core/nextFetch';
import { take, put, fork } from 'redux-saga/effects';
import {
  FETCH_VIDEO_LIST,
} from '../../../constants/ActionTypes';
import { fetchVideoListFail, fetchVideoListSuccess } from '../../actions/video';
import { api } from '../../../constants/Api';
/**
 * videoList saga
 */
export function* fetchVideoList() {
  while (true) {
    yield take(FETCH_VIDEO_LIST);
    try {
      const res = yield fetch.get(api.getVideoList);
      const data = yield res.data;

      yield put(fetchVideoListSuccess(data));
    } catch (e) {
      yield put(fetchVideoListFail());
    }
  }
}

export default [
  fork(fetchVideoList)
];
