import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';

import PathBox from './components/PathBox';

export default function() {
  const connections = useSelector(state => state.connections);

  return (
    <Container>
      <Row className='mt-4 pl-3'>
        <Col xs={12} md={12}>
          <div className='page-header'>
            <h1 id='timeline'>Timeline</h1>
          </div>
          <ul className='timeline'>
            {connections.selectedConnection.sections &&
              connections.selectedConnection.sections.map((section, index) => {
                return (
                  <PathBox
                    key={section.arrival.station}
                    data={section}
                    sectionIndex={index}
                  />
                );
              })}
          </ul>
        </Col>
      </Row>
    </Container>
  );
}
