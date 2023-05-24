import { AllSpeedsState, SpeedRowType } from '../../TrainsTable';

export const addNewSpeed = (
  state: AllSpeedsState,
  action: BaseAction<SpeedRowType>
): AllSpeedsState => {
  const curentTrainSpeeds = { ...state.allSpeeds.data };
  curentTrainSpeeds.speeds = [...curentTrainSpeeds.speeds, action.payload!].sort((a, b) => a.speed - b.speed);
  return {
    ...state,
    allSpeeds: {
      ...state.allSpeeds,
      data: curentTrainSpeeds,
    },
  };
};
