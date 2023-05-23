import React, { useEffect } from 'react';
import { getTrainSpeedRequest } from './actions';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { Container, Row, Col, Form, Button, Spinner } from 'react-bootstrap';
import { Table } from '../Table';
import styles from './main-page.module.css';

function MainPage() {
  const { data, fetch } = useAppSelector((state) => state.trainSpeed.trainSpeed);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTrainSpeedRequest());
  }, []);

  if (fetch === 'pending') {
    return <Spinner animation="grow" />;
  }

  return (
    <Container fluid="md" className={styles.mainWrapper}>
      <Row className={styles.row}>
        <Col className={styles.col}>
          <Table columnName={'Поезд'} data={data} />
        </Col>
        <Col className={styles.col}>
          <Form onSubmit={() => console.log('submit')}>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default MainPage;
