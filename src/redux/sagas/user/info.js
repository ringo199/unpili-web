import fetch from '../../../core/nextFetch';
import { take, put, fork } from 'redux-saga/effects';
import {
  FETCH_USER_INFO,
} from '../../../constants/ActionTypes';
import { fetchUserInfoFail, fetchUserInfoSuccess } from '../../actions/userinfo';
import { api } from '../../../constants/Api';
import store from 'store2';
/**
 * userList saga
 */
export function* fetchUserInfo() {
  while (true) {
    yield take(FETCH_USER_INFO);

    try {
      if (store.get('username') === null) return;
      const res = yield fetch.post(api.getUserInfo, {
        data: {
          username: store.get('username')
        }
      });
      yield put(fetchUserInfoSuccess(res));
    } catch (e) {
      yield put(fetchUserInfoFail(e));
    }
  }
}

export default [
  fork(fetchUserInfo)
];
