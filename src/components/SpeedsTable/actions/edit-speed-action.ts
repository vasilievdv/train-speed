import { types, SpeedRowType } from '../../TrainsTable';

export const editSpeedAction = (value: SpeedRowType[]) => ({
  type: types.EDIT_SPEED,
  payload: value,
});
