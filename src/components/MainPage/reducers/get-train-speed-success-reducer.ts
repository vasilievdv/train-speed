import { TrainSpeedState } from '../types';

export const getTrainSpeedSuccessReducer = (
  state: TrainSpeedState,
  actions: BaseAction<[]>
): TrainSpeedState => {  
  return {
    ...state,
    trainSpeed: {
      ...state.trainSpeed,
      fetch: 'resolve',
      data: actions.payload!,
    },
  };
};
