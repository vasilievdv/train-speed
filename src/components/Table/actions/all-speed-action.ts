import { types } from '../types';

export const addAllSpeeds = (value: number[]) => ({
  type: types.ADD_ALL_SPEEDS,
  payload: value,
});
