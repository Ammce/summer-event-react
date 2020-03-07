import React from 'react';
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';

import FormatDate, { formatDuration } from '../../../../helpers/dateFormatters';

const ConnectionCard = ({
  header,
  onClick,
  title,
  arrival,
  departure,
  sections,
}) => {
  return (
    <Card
      onClick={onClick}
      border='warning'
      text='white'
      className='mt-3'
      style={{ cursor: 'pointer' }}
    >
      <Card.Header>Duration {formatDuration(header)} hours</Card.Header>
      <Card.Body>
        <Card.Title>Transfers: {title}</Card.Title>
        <Card.Text>
          <p>Arrival: {new FormatDate(arrival).formatFullDate()}</p>
          <p>Departure: {new FormatDate(departure).formatFullDate()}</p>
          <p>Sections: {sections}</p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ConnectionCard;

ConnectionCard.propTypes = {
  header: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  arrival: PropTypes.string.isRequired,
  departure: PropTypes.string.isRequired,
  sections: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.object,
      PropTypes.array,
    ]),
  ).isRequired,
};
