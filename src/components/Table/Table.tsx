import React, { memo, MouseEvent } from 'react';
import { useAppDispatch } from '../../hooks';
import { Table as BaseTable } from 'react-bootstrap';
import { TrainSpeedTypes } from '../MainPage';
import { addAllSpeeds } from './actions';
import styles from './table.module.css';

type Props = {
  columnName: string;
  data: TrainSpeedTypes[];
};

function Table(props: Props) {
  const { columnName, data } = props;

  const dispatch = useAppDispatch();

  function onClickName(event: MouseEvent<HTMLElement>) {
    if (event.target instanceof HTMLAnchorElement) {
      const speedLimits = data[Number(event.target.id)].speedLimits;
      const pureSpeedLimits = speedLimits.map((s) => s.speedLimit);
      console.log(pureSpeedLimits);
      dispatch(addAllSpeeds(pureSpeedLimits));
    }
  }

  return (
    <BaseTable striped size="sm">
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
                <form>
                  <a
                    href="#"
                    className={styles.link}
                    id={String(id)}
                    onClick={onClickName}
                  >
                    {r.name}
                  </a>
                </form>
              </td>
            </tr>
          );
        })}
      </tbody>
    </BaseTable>
  );
}

export default memo(Table);
