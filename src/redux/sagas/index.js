import { all } from 'redux-saga/effects';
import userSagas from './user/index';
import videoSagas from './video/index';


export default function* rootSagas() {
  yield all([
    ...userSagas,
    ...videoSagas
  ]);
}
