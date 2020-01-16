import fetch from '../../../core/nextFetch';
import { take, put, fork } from 'redux-saga/effects';
import {
  FETCH_ONE_VIDEO,
} from '../../../constants/ActionTypes';
import { fetchOneVideoFail, fetchOneVideoSuccess } from '../../actions/video';
import { api } from '../../../constants/Api';
/**
 * videoList saga
 */
export function* fetchOneVideo() {
  while (true) {
    const { payload } = yield take(FETCH_ONE_VIDEO);

    try {
      const res = yield fetch.get(api.getOneVideo, {
        query: {
          ...payload
        }
      });

      const data = yield res.data;

      yield put(fetchOneVideoSuccess(data));
    } catch (e) {
      yield put(fetchOneVideoFail());
    }
  }
}

export default [
  fork(fetchOneVideo)
];
