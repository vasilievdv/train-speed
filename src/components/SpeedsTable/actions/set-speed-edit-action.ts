import { types } from '../../TrainsTable';

export const setSpeedEditAction = (value: number) => ({
  type: types.SET_SPEED_EDIT,
  payload: value,
});
