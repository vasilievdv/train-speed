import { types, SpeedRowType } from '../../TrainsTable';

export const addNewSpeedAction = (value: SpeedRowType) => ({
  type: types.ADD_NEW_SPEED,
  payload: value,
});
