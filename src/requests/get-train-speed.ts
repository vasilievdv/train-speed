import axios from 'axios';
import { TRAIN_SPEED_BASE_URL } from './constatnts';

export const getTrainSpeed = async () => {
  const { data } = await axios.get<[]>(
    `${TRAIN_SPEED_BASE_URL}/GlennMiller1991/152583a1bf1e057e8db06f5949ae3dda/raw/f84adf51092706ae0e7c0abc7589ad49800d8112/trains.json`
  );
  return data;
};
