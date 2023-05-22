import { TrainSpeedState } from '../types';

export const getTrainSpeedRequestReducer = (
  state: TrainSpeedState
): TrainSpeedState => {
  return {
    ...state,
    trainSpeed: {
      ...state.trainSpeed,
      fetch: 'pending',
    },
  };
};
