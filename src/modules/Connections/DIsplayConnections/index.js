import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useRouteMatch } from 'react-router-dom';

import ConnectionCard from './components/ConnectionCard';
import Navlink from '../../../commonComponents/Navlink';

import { setSelectedConnection } from '../_redux/actions';

export default function() {
  const connections = useSelector(state => state.connections);
  const dispatch = useDispatch();
  const history = useHistory();
  const match = useRouteMatch();

  function choosePath(connection) {
    dispatch(setSelectedConnection(connection));
    history.push(`${match.url}/path`);
  }

  return (
    <Container fluid>
      <Row>
        <Col>
          <Navlink to='/' text='Select Another Locations' />
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={12}>
          <Row className='justify-content-center'>
            <Col xs={6} className='text-center'>
              {connections.data.from && connections.data.to && (
                <h3 className='text-warning'>
                  {connections.data.from} - {connections.data.to}
                </h3>
              )}
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={12}>
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
                      onClick={() => choosePath(connection)}
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
    </Container>
  );
}
