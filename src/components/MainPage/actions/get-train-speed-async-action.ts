import { types } from '../types';

export const getTrainSpeedRequest = () => ({
  type: types.GET_TRAIN_SPEED_REQUEST,
});

export const getTrainSpeedSuccess = (
  trainSpeed: []
): BaseAction<[]> => ({
  type: types.GET_TRAIN_SPEED_SUCCESS,
  payload: trainSpeed,
});

export const getTrainSpeedError = (
  message: RequestError
): BaseAction<RequestError> => ({
  type: types.GET_TRAIN_SPEED_FAILED,
  payload: message,
});

export const resetGetTrainSpeedError = (): BaseAction => ({
  type: types.RESET_TRAIN_SPEED_ERROR,
});
