import { types, SpeedsForTrain } from '../types';

export const addAllSpeeds = (value: SpeedsForTrain) => ({
  type: types.ADD_ALL_SPEEDS,
  payload: value,
});
