export const types = {
  GET_TRAIN_SPEED_REQUEST: 'GET_TRAIN_SPEED_REQUEST',
  GET_TRAIN_SPEED_SUCCESS: 'GET_TRAIN_SPEED_SUCCESS',
  GET_TRAIN_SPEED_FAILED: 'GET_TRAIN_SPEED_FAILED',
  RESET_TRAIN_SPEED_ERROR: 'RESET_TRAIN_SPEED_ERROR',
};

export interface SpeedLimitsTypes {
  name: string;
  speedLimit: number;
}

export interface TrainSpeedTypes {
  name: string;
  description: string;
  speedLimits: SpeedLimitsTypes[];
}

export interface TrainSpeedState {
  trainSpeed: StoreFetchState<TrainSpeedTypes[]>;
}
