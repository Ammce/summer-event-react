import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';

import FormatDate, {
  formatDuration,
} from '../../../../../helpers/dateFormatters';

import './index.css';

const ConnectionCard = ({
  header,
  onClick,
  title,
  arrival,
  departure,
  sections,
}) => {
  return (
    <div onClick={onClick} className='social-box'>
      <Container>
        <Row>
          <Col xs={12} className='text-center'>
            <div className='box'>
              <i className='fa fa-train fa-3x' aria-hidden='true' />
              <div className='box-title'>
                <h3>{formatDuration(header)} hours</h3>
              </div>
              <div className='box-text'>
                <span>Transfers: {title}</span>
                <span>Sections: {sections}</span>
                <span className='tripData'>
                  {new FormatDate(arrival).formatFullDate()} -{' '}
                  {new FormatDate(departure).formatFullDate()}
                </span>
              </div>
              <div className='box-btn'>
                <p>Learn More</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ConnectionCard;

ConnectionCard.propTypes = {
  header: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  title: PropTypes.number.isRequired,
  arrival: PropTypes.string.isRequired,
  departure: PropTypes.string.isRequired,
  sections: PropTypes.number.isRequired,
};
