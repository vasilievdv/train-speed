import { AllSpeedsState, SpeedsForTrain } from '../types';

export const addAllSpeedsReducer = (
  state: AllSpeedsState,
  action: BaseAction<SpeedsForTrain>
): AllSpeedsState => {
  return {
    ...state,
    allSpeeds: {
      ...state.allSpeeds,
      data: action.payload!,
    },
  };
};
