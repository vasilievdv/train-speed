import { TrainSpeedState } from '../types';

export const getTrainSpeedFailedReducer = (
  state: TrainSpeedState,
  action: BaseAction<RequestError>
): TrainSpeedState => {
  return {
    ...state,
    trainSpeed: {
      ...state.trainSpeed,
      fetch: 'rejected',
      error: action.payload!,
    },
  };
};
