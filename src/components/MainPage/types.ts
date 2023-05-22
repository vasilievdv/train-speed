export const types = {
  GET_TRAIN_SPEED_REQUEST: 'GET_TRAIN_SPEED_REQUEST',
  GET_TRAIN_SPEED_SUCCESS: 'GET_TRAIN_SPEED_SUCCESS',
  GET_TRAIN_SPEED_FAILED: 'GET_TRAIN_SPEED_FAILED',
  RESET_TRAIN_SPEED_ERROR: 'RESET_TRAIN_SPEED_ERROR',
};

export interface TrainSpeedState {
  trainSpeed: StoreFetchState<[]>;
}