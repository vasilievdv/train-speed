import createReducer from '../../redux/create-reducer';

import {
  addAllSpeedsReducer,
} from './reducers';

import { types, AllSpeedsState } from './types';

export const initialState: AllSpeedsState = {
  allSpeeds: {
    data: [], 
  },
};

export const AllSpeedsReducer = createReducer(initialState, {
  [types.ADD_ALL_SPEEDS]: addAllSpeedsReducer,
});
