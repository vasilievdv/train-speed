import { all, call } from 'redux-saga/effects';

import { fetchTrainSpeedWatcher } from './get-train-speed-saga';

export function* trainSpeedSagas() {
  yield all([call(fetchTrainSpeedWatcher)]);
}
