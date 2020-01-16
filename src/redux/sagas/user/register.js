import fetch from '../../../core/nextFetch';
import { take, put, fork } from 'redux-saga/effects';
import {
  FETCH_REGISTER,
} from '../../../constants/ActionTypes';
import { fetchRegisterFail, fetchRegisterSuccess } from '../../actions/register';
import { api } from '../../../constants/Api';
/**
 * userList saga
 */
export function* fetchRegister() {
  while (true) {
    const { payload } = yield take(FETCH_REGISTER);

    try {
      const res = yield fetch.post(api.register, {
        data: {
          ...payload
        }
      });
      yield put(fetchRegisterSuccess(res.data));
      return res;
    } catch (e) {
      yield put(fetchRegisterFail(e));
      return e;
    }
  }
}

export default [
  fork(fetchRegister)
];
