import { AllSpeedsState } from '../../TrainsTable';

export const addNewSpeed = (
  state: AllSpeedsState,
  action: BaseAction<number>
): AllSpeedsState => {
  const curentTrainSpeeds = { ...state.allSpeeds.data };
  curentTrainSpeeds.speeds = [...curentTrainSpeeds.speeds, action.payload!].sort((a, b) => a - b);
  return {
    ...state,
    allSpeeds: {
      ...state.allSpeeds,
      data: curentTrainSpeeds,
    },
  };
};
