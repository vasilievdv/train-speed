import React, { useRef, useState, ChangeEvent, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { Table, Form, InputGroup, Button, Row, Col } from 'react-bootstrap';
import {
  addNewSpeedAction,
  setSpeedEditAction,
  editSpeedAction,
} from './actions';
import { BsFillXSquareFill, BsFillPencilFill } from 'react-icons/bs';
import { SpeedRowType } from '../TrainsTable';
import styles from './speeds.module.css';

function SpeedsTable() {
  const { speeds, name } = useAppSelector(
    (state) => state.allSpeeds.allSpeeds.data
  );
  const [speedLimits, setSpeedLimits] = useState<SpeedRowType[]>([]);
  const [validated, setValidated] = useState(false);
  const [newSpeedLimit, setNewSpeedLimit] = useState(0);
  const speedInputRef = useRef<HTMLFormElement>(null);
  const dispatch = useAppDispatch();

  function onChangeSpeed(e: ChangeEvent<HTMLInputElement>) {
    setNewSpeedLimit(+e.target.value);
  }

  function onSubmitNewSpeedLimit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (Number.isInteger(newSpeedLimit) && newSpeedLimit > 0) {
      dispatch(addNewSpeedAction({ speed: newSpeedLimit, isEdit: false }));
      speedInputRef.current?.reset();
      setValidated(false);
    } else {
      setValidated(true);
    }
  }

  function onSubmitEditSpeed(
    event: React.FormEvent<HTMLFormElement>,
    id: number
  ) {
    event.preventDefault();
    const editedSpeedLimits = [...speedLimits];
    editedSpeedLimits[id].isEdit = false;
    dispatch(editSpeedAction(editedSpeedLimits));
  }

  function onChangeEditSpeed(e: ChangeEvent<HTMLInputElement>, id: number) {
    const updateSpeedLimits = speedLimits.map((s, i) => {
      if (id === i) {
        return { ...s, speed: +e.target.value };
      }
      return s;
    });
    setSpeedLimits(updateSpeedLimits);
  }

  function onClickEdit(id: number) {
    dispatch(setSpeedEditAction(id));
  }

  function onClickDelete(id: number) {
    const thinSpeedLimits = speedLimits.filter((_, i) => i !== id);
    setSpeedLimits(thinSpeedLimits);
    dispatch(editSpeedAction(thinSpeedLimits));
  }

  useEffect(() => {
    setSpeedLimits(speeds);
  }, [speeds]);

  return (
    <>
      <div className={styles.tableWrapper}>
        <Table striped size="sm" className={styles.table}>
          <thead>
            <tr>
              <th>{name || 'Поезд не выбран'}</th>
              <th>{name && 'Лимит скорости'}</th>
              <th>{name && 'Редактирование'}</th>
            </tr>
          </thead>
          <tbody>
            {speedLimits.map((s, id) => {
              return (
                <tr key={id}>
                  <td>{`Скорость №${id}`}</td>
                  {s.isEdit ? (
                    <td>
                      <form
                        onSubmit={(e: React.FormEvent<HTMLFormElement>) =>
                          onSubmitEditSpeed(e, id)
                        }
                        id={String(id)}
                      >
                        <input
                          value={s.speed}
                          type="text"
                          size={4}
                          className={styles.editInput}
                          onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            onChangeEditSpeed(e, id)
                          }
                        ></input>
                      </form>
                    </td>
                  ) : (
                    <td>{s.speed}</td>
                  )}
                  <td>
                    <a
                      href="#"
                      className={styles.btn}
                      onClick={() => onClickEdit(id)}
                    >
                      <BsFillPencilFill />
                    </a>
                    <a
                      href="#"
                      className={styles.btn}
                      onClick={() => onClickDelete(id)}
                    >
                      <BsFillXSquareFill />
                    </a>
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
                  <Button variant="secondary" id="button-addon2" type="submit">
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
