import { AllSpeedsState } from '../../TrainsTable';

export const setSpeedEdit = (
  state: AllSpeedsState,
  action: BaseAction<number>
): AllSpeedsState => {
  const curentTrainSpeeds = { ...state.allSpeeds.data }
  curentTrainSpeeds.speeds[action.payload!].isEdit = true;
  return {
    ...state,
    allSpeeds: {
      ...state.allSpeeds,
      data: curentTrainSpeeds,
    },
  };
};
