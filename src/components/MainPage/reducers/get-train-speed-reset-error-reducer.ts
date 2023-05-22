import { TrainSpeedState } from '../types';

export const getTrainSpeedResetErrorReducer = (
  state: TrainSpeedState
): TrainSpeedState => {
  return {
    ...state,
    trainSpeed: {
      ...state.trainSpeed,
      error: null,
    },
  };
};
