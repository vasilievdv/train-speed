import React, { useRef, useState, ChangeEvent } from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { Table, Form, InputGroup, Button, Row, Col } from 'react-bootstrap';
import { addNewSpeedAction } from './actions';
import styles from './speeds.module.css';
import { BsFillXSquareFill, BsFillPencilFill } from 'react-icons/bs';

function SpeedsTable() {
  const [validated, setValidated] = useState(false);
  const [newSpeedLimit, setNewSpeedLimit] = useState(0);
  const { speeds, name } = useAppSelector(
    (state) => state.allSpeeds.allSpeeds.data
  );
  const speedInputRef = useRef<HTMLFormElement>(null);
  const dispatch = useAppDispatch();

  const onChangeSpeed = (e: ChangeEvent<HTMLInputElement>) => {
    setNewSpeedLimit(+e.target.value);
  };

  function onSubmitNewSpeedLimit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (Number.isInteger(newSpeedLimit) && newSpeedLimit > 0) {
      dispatch(addNewSpeedAction(newSpeedLimit));
      speedInputRef.current?.reset();
      setValidated(false);
    } else {
      setValidated(true);
    }
  }

  return (
    <>
      <div className={styles.tableWrapper}>
        <Table striped size="sm">
          <thead>
            <tr>
              <th>{name || 'Поезд не выбран'}</th>
              <th>{name && 'Лимит скорости'}</th>
              <th>{name && 'Редактирование'}</th>
            </tr>
          </thead>
          <tbody>
            {speeds.map((s, id) => {
              return (
                <tr key={id}>
                  <td>{`Скорость №${id}`}</td>
                  <td>{s}</td>
                  <td>
                    <BsFillPencilFill />{' '}
                    <BsFillXSquareFill />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
      {name && (
        <div className={styles.speedInput}>
          <Row>
            <Col sm={9}>
              <Form onSubmit={onSubmitNewSpeedLimit} ref={speedInputRef}>
                  {validated && (
                    <div className={styles.notValid}>
                      Cкоростное ограничение должно быть положительным целым
                      числом.
                    </div>
                  )}
                <InputGroup className="mb-3" size="sm">
                  <Button
                    variant="secondary"
                    id="button-addon2"
                    type="submit"
                  >
                    Добавить
                  </Button>
                  <Form.Control
                    placeholder="новый лимит скорости"
                    aria-label="text"
                    aria-describedby="basic-addon1"
                    onChange={onChangeSpeed}
                    required
                  />
                </InputGroup>
              </Form>
            </Col>
            <Col sm={3}>
              <Button variant="success" id="button-addon1" size="sm">
                Сохранить
              </Button>
            </Col>
          </Row>
        </div>
      )}
    </>
  );
}

export default SpeedsTable;
