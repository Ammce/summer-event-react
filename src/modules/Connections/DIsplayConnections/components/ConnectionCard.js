import React from 'react';
import { Card } from 'react-bootstrap';

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
      onClick={() => {
        console.log('Kliknuo si me');
      }}
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
