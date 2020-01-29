import { all } from 'redux-saga/effects';
// import init from './init';
import userSagas from './user/index';
import videoSagas from './video/index';
import commentSagas from './comment/index';

export default function* rootSagas() {
  yield all([
    ...userSagas,
    ...videoSagas,
    ...commentSagas,
    // ...init
  ]);
}
