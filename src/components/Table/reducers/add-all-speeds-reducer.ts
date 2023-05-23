import { AllSpeedsState } from '../types';

export const addAllSpeedsReducer = (
  state: AllSpeedsState,
  action: BaseAction<number[]>
): AllSpeedsState => {
  return {
    ...state,
    allSpeeds: {
      ...state.allSpeeds,
      data: action.payload!,
    },
  };
};
