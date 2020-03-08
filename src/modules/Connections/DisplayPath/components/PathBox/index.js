import React from 'react';
import PropTypes from 'prop-types';

import PassList from '../PassList';

import FormatDate from '../../../../../helpers/dateFormatters';

import './index.css';

const index = ({ data, sectionIndex }) => {
  let duration = '';
  if (data.journey) {
    duration = new FormatDate(
      data.arrival.arrival,
      data.departure.departure,
    ).calculateDuration();
  } else {
    duration = new FormatDate(data.walk.duration).secondsToHHmm();
  }

  let passList = null;
  if (data && data.journey && data.journey.passList) {
    passList = <PassList data={data.journey.passList} />;
  }

  return (
    <li className={sectionIndex % 2 === 0 ? 'timeline-inverted' : ''}>
      {/* className='timeline-inverted' on li if on right and bus etc */}
      <div className='timeline-badge warning'>
        <i className={`fa fa-${data.journey ? 'train' : 'male'} text-white`} />
      </div>
      <div className='timeline-panel'>
        <div className='timeline-heading'>
          {data.journey ? (
            <h4 className='timeline-title'>
              Take{' '}
              <span className='text-warning customSpan'>
                {data.journey.name}
              </span>{' '}
              to {data.arrival.station}
            </h4>
          ) : (
            <h4 className='timeline-title'>
              {' '}
              <span className='text-warning customSpan'>Walk</span> to{' '}
              {data.arrival.station}{' '}
            </h4>
          )}
          <p>
            <small className='text-muted'>
              <i className='fa fa-clock-o text-warning' /> Trip Duration:{' '}
              {duration} (HH:mm)
            </small>
          </p>
          <p>
            <small className='text-muted'>
              <i className='fa fa-clock-o text-warning' /> Departure:{' '}
              {new FormatDate(data.departure.departure).formatFullDate()}
            </small>
          </p>
          <p>
            <small className='text-muted'>
              <i className='fa fa-clock-o text-warning' /> Arrival:{' '}
              {new FormatDate(data.arrival.arrival).formatFullDate()}
            </small>
          </p>
          {passList}
        </div>
        <div className='timeline-body'>
          {/* <p>Here I will put collapsed things if exista</p> */}
        </div>
      </div>
    </li>
  );
};

export default index;

index.propTypes = {
  data: PropTypes.PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.object,
      PropTypes.string,
      PropTypes.number,
      PropTypes.func,
    ]),
  ).isRequired,
  sectionIndex: PropTypes.number.isRequired,
};
