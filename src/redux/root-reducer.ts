import { combineReducers } from 'redux';

import { TrainSpeedReducer, TrainSpeedState } from '../components/MainPage';

const rootReducer = combineReducers({
  trainSpeed: TrainSpeedReducer,
});

export interface State {
  trainSpeed: TrainSpeedState;
}

export default rootReducer;
