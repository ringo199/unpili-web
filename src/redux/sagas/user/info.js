import fetch from '../../../core/nextFetch';
import { take, put, fork } from 'redux-saga/effects';
import {
  FETCH_USER_INFO,
} from '../../../constants/ActionTypes';
import { fetchUserInfoFail, fetchUserInfoSuccess } from '../../actions/userinfo';
import { api } from '../../../constants/Api';
/**
 * userList saga
 */
export function* fetchUserInfo() {
  while (true) {
    const { payload } = yield take(FETCH_USER_INFO);

    try {
      const res = yield fetch.post(api.getUserInfo, {
        data: {
          ...payload
        }
      });
      yield put(fetchUserInfoSuccess(res.data));
    } catch (e) {
      yield put(fetchUserInfoFail(e));
    }
  }
}

export default [
  fork(fetchUserInfo)
];
