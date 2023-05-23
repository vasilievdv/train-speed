import { TrainSpeedState } from '../types';

export const getTrainSpeedSuccessReducer = (
  state: TrainSpeedState,
  action: BaseAction<[]>
): TrainSpeedState => {  
  return {
    ...state,
    trainSpeed: {
      ...state.trainSpeed,
      fetch: 'resolve',
      data: action.payload!,
    },
  };
};
