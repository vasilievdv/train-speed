import React, { useEffect } from 'react';
import { getTrainSpeedRequest } from './actions';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import { TrainsTable } from '../TrainsTable';
import { SpeedsTable } from '../SpeedsTable';
import styles from './main-page.module.css';

function MainPage() {
  const { data, fetch } = useAppSelector(
    (state) => state.trainSpeed.trainSpeed
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTrainSpeedRequest());
  }, []);

  if (fetch === 'pending') {
    return <Spinner animation="grow" />;
  }

  return (
    <Container className={styles.mainWrapper}>
      <Row className={styles.row}>
        <Col className={`${styles.col} ${styles.col1}`} md={6}>
          <TrainsTable columnName={'Поезд'} data={data} />
        </Col>
        <Col className={styles.col} md={6}>
          <SpeedsTable />
        </Col>
      </Row>
    </Container>
  );
}

export default MainPage;
