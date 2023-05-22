import { all, fork } from 'redux-saga/effects';

import { trainSpeedSagas } from '../components/MainPage';

export default function* root() {
  yield all([fork(trainSpeedSagas)]);
}
