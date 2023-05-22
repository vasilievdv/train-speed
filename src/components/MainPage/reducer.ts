import createReducer from '../../redux/create-reducer';

import {
  getTrainSpeedFailedReducer,
  getTrainSpeedRequestReducer,
  getTrainSpeedResetErrorReducer,
  getTrainSpeedSuccessReducer,
} from './reducers';
import { types, TrainSpeedState } from './types';

export const initialState: TrainSpeedState = {
  trainSpeed: {
    fetch: 'idle',
    data: [],
    error: null,
  },
};

export const TrainSpeedReducer = createReducer(initialState, {
  [types.GET_TRAIN_SPEED_REQUEST]: getTrainSpeedRequestReducer,
  [types.GET_TRAIN_SPEED_SUCCESS]: getTrainSpeedSuccessReducer,
  [types.GET_TRAIN_SPEED_FAILED]: getTrainSpeedFailedReducer,
  [types.RESET_TRAIN_SPEED_ERROR]: getTrainSpeedResetErrorReducer,
});
