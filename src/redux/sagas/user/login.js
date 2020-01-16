import fetch from '../../../core/nextFetch';
import { take, put, fork } from 'redux-saga/effects';
import {
  FETCH_LOGIN,
} from '../../../constants/ActionTypes';
import { fetchLoginFail, fetchLoginSuccess } from '../../actions/login';
import { api } from '../../../constants/Api';
/**
 * userList saga
 */
export function* fetchLogin() {
  while (true) {
    const { payload } = yield take(FETCH_LOGIN);

    try {
      const res = yield fetch.post(api.login, {
        data: {
          ...payload
        }
      });
      yield put(fetchLoginSuccess(res.data));
    } catch (e) {
      yield put(fetchLoginFail(e));
    }
  }
}

export default [
  fork(fetchLogin)
];
