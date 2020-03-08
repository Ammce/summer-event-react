import React, { useState } from 'react';
import { Collapse } from 'react-bootstrap';
import PropTypes from 'prop-types';

import FormatDate from '../../../../../helpers/dateFormatters';

import './index.css';

function PathList({ data }) {
  const [open, setOpen] = useState(false);
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

export default PathList;

PathList.propTypes = {
  data: PropTypes.PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.object,
      PropTypes.bool,
      PropTypes.array,
    ]),
  ).isRequired,
};
