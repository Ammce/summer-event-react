import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';

import ConnectionCard from './components/ConnectionCard';
import ChooseAnotherLocation from './components/ChooseAnotherLocation';

export default function() {
  const connections = useSelector(state => state.connections);
  console.log(connections);
  return (
    <div>
      <Row>
        <Col>
          <Row className='mt-4 pl-3'>
            <Col xs={12} md={8}>
              <Row>
                <Col xs={6}>
                  <h4>Choose your path</h4>
                  {connections.data.from && connections.data.to && (
                    <h3 className='text-warning'>
                      {connections.data.from} - {connections.data.to}
                    </h3>
                  )}
                </Col>
                <Col xs={6} className='text-right'>
                  <ChooseAnotherLocation />
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className='mt-4 pl-3'>
            <Col xs={12} md={8}>
              <Row>
                {connections.data &&
                  connections.data.connections &&
                  connections.data.connections.map((connection, index) => {
                    return (
                      <Col
                        key={
                          connection.duration +
                          connection.transfers +
                          connection.arrival
                        }
                        xs={12}
                        md={4}
                      >
                        <ConnectionCard
                          index={index}
                          header={connection.duration}
                          title={connection.transfers}
                          arrival={connection.arrival}
                          departure={connection.departure}
                          sections={connection.sections.length}
                        />
                      </Col>
                    );
                  })}
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}
