import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';

import Navlink from '../../../commonComponents/Navlink';
import PathBox from './components/PathBox';

import { formatDuration } from '../../../helpers/dateFormatters';

export default function() {
  const connections = useSelector(state => state.connections);
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <Navlink to='/' text='Select Another Locations' />
            <Navlink to='/choose-route' text='Select Another Route' />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className='mt-4 pl-3'>
          <Col xs={12} md={12}>
            <div className='page-header'>
              <h3 id='timeline' className='text-warning'>
                {connections.data.from} - {connections.data.to}
              </h3>
              <p className='text-muted undertimeline'>
                <span className='text-warning'>
                  {connections.selectedConnection.transfers}
                </span>{' '}
                Transfers
                <span className='text-warning'>
                  {formatDuration(connections.selectedConnection.duration)}
                </span>{' '}
                (HH:mm) of travel
              </p>
            </div>
            <ul className='timeline'>
              {connections.selectedConnection.sections &&
                connections.selectedConnection.sections.map(
                  (section, index) => {
                    return (
                      <PathBox
                        key={section.arrival.station}
                        data={section}
                        sectionIndex={index}
                      />
                    );
                  },
                )}
            </ul>
          </Col>
        </Row>
      </Container>{' '}
    </>
  );
}
