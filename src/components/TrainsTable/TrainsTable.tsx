import React, { MouseEvent } from 'react';
import { useAppDispatch } from '../../hooks';
import { Table } from 'react-bootstrap';
import { TrainSpeedTypes } from '../MainPage';
import { addAllSpeeds } from './actions';
import styles from './table.module.css';

type Props = {
  columnName: string;
  data: TrainSpeedTypes[];
};

function TrainsTable(props: Props) {
  const { columnName, data } = props;

  const dispatch = useAppDispatch();

  function onClickName(event: MouseEvent<HTMLElement>) {
    if (event.target instanceof HTMLAnchorElement) {
      const { speedLimits, name } = data[Number(event.target.id)];
      const speeds = speedLimits.map((s) => s.speedLimit);
      const speedsForCurrentTrain = {speeds, name}
      dispatch(addAllSpeeds(speedsForCurrentTrain));
    }
  }

  return (
    <Table striped size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>{columnName}</th>
        </tr>
      </thead>
      <tbody>
        {data.map((r, id) => {
          return (
            <tr key={id}>
              <td>{id + 1}</td>
              <td>
                  <a
                    href="#"
                    className={styles.link}
                    id={String(id)}
                    onClick={onClickName}
                  >
                    {r.name}
                  </a>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

export default TrainsTable;
