import fetch from '../../../core/nextFetch';
import { take, put, fork } from 'redux-saga/effects';
import {
  FETCH_UPLOAD_SAVE,
} from '../../../constants/ActionTypes';
import { fetchUploadSaveFail, fetchUploadSaveSuccess } from '../../actions/upload';
import { api } from '../../../constants/Api';
/**
 * videoList saga
 */
export function* fetchVideoList(payload) {
  while (true) {
    yield take(FETCH_UPLOAD_SAVE);
    try {
      const res = yield fetch.post(api.uploadSave, payload);
      const data = yield res;

      yield put(fetchUploadSaveSuccess(data));
    } catch (e) {
      yield put(fetchUploadSaveFail());
    }
  }
}

export default [
  fork(fetchVideoList)
];
