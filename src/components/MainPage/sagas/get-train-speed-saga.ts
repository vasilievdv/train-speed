import { call, put, takeLatest } from 'redux-saga/effects';

import { getTrainSpeed } from '../../../requests';

import {
  getTrainSpeedError,
  getTrainSpeedSuccess,
  resetGetTrainSpeedError,
} from '../actions';
import { types } from '../types';

function* requestTrainSpeedWorker(): Generator<any, any, any> {
  try {    
    const result: [] = yield call(getTrainSpeed);
    
    yield put(resetGetTrainSpeedError());

    yield put(getTrainSpeedSuccess(result));
  } catch (e) {
    const error = e as RequestError;
    yield put(getTrainSpeedError(error));
  }
}

export function* fetchTrainSpeedWatcher() {
  yield takeLatest(types.GET_TRAIN_SPEED_REQUEST, requestTrainSpeedWorker);
}
