import { combineReducers } from 'redux';

import { TrainSpeedReducer, TrainSpeedState } from '../components/MainPage';
import { AllSpeedsReducer, AllSpeedsState } from '../components/TrainsTable';

const rootReducer = combineReducers({
  trainSpeed: TrainSpeedReducer,
  allSpeeds: AllSpeedsReducer,
});

export interface State {
  trainSpeed: TrainSpeedState;
  allSpeeds: AllSpeedsState;
}

export default rootReducer;
