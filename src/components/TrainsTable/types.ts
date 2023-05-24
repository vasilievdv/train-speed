export const types = {
  ADD_ALL_SPEEDS: 'ADD_ALL_SPEEDS',
  ADD_NEW_SPEED: 'ADD_NEW_SPEED',
  SET_SPEED_EDIT: 'SET_SPEED_EDIT',
};

export interface SpeedRowType {
  speed: number;
  isEdit: boolean;
}

export interface SpeedsForTrain {
  name: string;
  speeds: SpeedRowType[];
}

export interface AllSpeedsState {
  allSpeeds: { data: SpeedsForTrain };
}
