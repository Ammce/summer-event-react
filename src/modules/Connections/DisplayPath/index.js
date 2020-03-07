import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useRouteMatch } from 'react-router-dom';

export default function() {
  const connections = useSelector(state => state.connections);
  const dispatch = useDispatch();
  const history = useHistory();
  const match = useRouteMatch();

  return (
    <Container fluid>
      <Row className='mt-4 pl-3'>
        <Col xs={12} md={12}>
          <h1>SADDD</h1>
        </Col>
      </Row>
    </Container>
  );
}
