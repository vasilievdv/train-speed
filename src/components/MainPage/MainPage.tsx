import React, { useEffect } from 'react';
import { getTrainSpeedRequest } from './actions';
import { useAppDispatch, useAppSelector } from '../../hooks';

import { Container } from 'react-bootstrap';

function MainPage() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTrainSpeedRequest());
  }, []);

  return <Container fluid="md">asdf</Container>;
}

export default MainPage;
