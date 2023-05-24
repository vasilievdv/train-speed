import { AllSpeedsState, SpeedRowType } from '../../TrainsTable';

export const editSpeed = (
  state: AllSpeedsState,
  action: BaseAction<SpeedRowType[]>
): AllSpeedsState => {
  const curentTrainSpeeds = [...action.payload!];
  curentTrainSpeeds.sort((a, b) => a.speed - b.speed);
  return {
    ...state,
    allSpeeds: {
      ...state.allSpeeds,
      data: {...state.allSpeeds.data, speeds: curentTrainSpeeds},
    },
  };
};
