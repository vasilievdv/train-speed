import createReducer from '../../redux/create-reducer';

import { addAllSpeedsReducer } from './reducers';
import { addNewSpeed, setSpeedEdit } from '../SpeedsTable/reducers'

import { types, AllSpeedsState } from './types';


export const initialState: AllSpeedsState = {
  allSpeeds: {
    data: {name: '', speeds: []}, 
  },
};

export const AllSpeedsReducer = createReducer(initialState, {
  [types.ADD_ALL_SPEEDS]: addAllSpeedsReducer,
  [types.ADD_NEW_SPEED]: addNewSpeed,
  [types.SET_SPEED_EDIT]: setSpeedEdit,
});
