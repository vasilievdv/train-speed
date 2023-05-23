import { types } from '../../TrainsTable';

export const addNewSpeedAction = (value: number) => ({
  type: types.ADD_NEW_SPEED,
  payload: value,
});
