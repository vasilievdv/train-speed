export const types = {
  ADD_ALL_SPEEDS: 'ADD_ALL_SPEEDS',
  ADD_NEW_SPEED: 'ADD_NEW_SPEED',
};
export interface SpeedsForTrain {
  name: string;
  speeds: number[];
}
export interface AllSpeedsState {
  allSpeeds: { data: SpeedsForTrain };
}
