import React, { useState } from 'react';
import { Button, Collapse } from 'react-bootstrap';

import FormatDate from '../../../../../helpers/dateFormatters';

import './index.css';

export default function({ data }) {
  const [open, setOpen] = useState(false);
  console.log('DOSTA JE', data);
  return (
    <>
      <p
        onClick={() => setOpen(!open)}
        aria-controls='example-collapse-text'
        aria-expanded={open}
        className='text-muted text-center text-warning customP'
      >
        <i
          className={`fa fa-arrow-${open ? 'up' : 'down'}`}
          aria-hidden='true'
        />{' '}
        View Trip Details
      </p>
      {open && <hr />}
      <Collapse in={open}>
        <div>
          {data.map(station => {
            return (
              <p key={station.station}>
                <small className='text-muted'>
                  <i className='fa fa-clock-o' /> {station.station} -{' '}
                  {new FormatDate(station.arrival).formatFullDate()}
                </small>
              </p>
            );
          })}
        </div>
      </Collapse>
    </>
  );
}
