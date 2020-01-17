import { take, put, fork } from 'redux-saga/effects';
import {
  FETCH_INIT,
} from '../../constants/ActionTypes';
// import store from 'store2';
// import { fetchUserInfo } from '../actions/userinfo';
import { fetchInitFail, fetchInitSuccess } from '../actions/init';
/**
 * userList saga
 */
export function* fetchInit() {
  while (true) {
    yield take(FETCH_INIT);

    try {
      yield put(fetchInitSuccess());
      // return res;
    } catch (e) {
      yield put(fetchInitFail(e));
    }
  }
}

export default [
  fork(fetchInit)
];
