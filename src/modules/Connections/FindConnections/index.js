import React, { Component } from 'react';
import { Row, Col, Button, Container } from 'react-bootstrap';
import { connect } from 'react-redux';

import Input from '../../../commonComponents/Input/';
import Loader from '../../../commonComponents/Loader';

import { loadData } from '../_redux/actions';

class index extends Component {
  state = {
    data: {
      limit: '5',
      from: 'Zermatt',
      to: 'Stallikon',
    },
  };

  handleChangeData = e => {
    e.persist();
    this.setState(state => {
      return {
        ...state,
        data: {
          ...state.data,
          [e.target.name]: e.target.value,
        },
      };
    });
  };

  submitData = async () => {
    const { data } = this.state;
    const { loadData, history } = this.props;
    await loadData(data, history);
  };

  render() {
    const { data } = this.state;
    const { connections } = this.props;
    let displayLoader = null;
    if (connections.isLoading) {
      displayLoader = <Loader />;
    }
    return (
      <Container>
        <Row>
          <Col sm={12} md={6}>
            <Input
              value={data.from}
              type='text'
              name='from'
              id='from'
              onChange={this.handleChangeData}
              label={'What is your location? '}
            />
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={6}>
            <Input
              value={data.to}
              type='text'
              name='to'
              id='to'
              onChange={this.handleChangeData}
              label={'Where are you traveling? '}
            />
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={6}>
            <Input
              value={data.limit}
              type='number'
              name='limit'
              id='limit'
              onChange={this.handleChangeData}
              label={'Number of connections? '}
            />
          </Col>
        </Row>
        <Row className='mt-4'>
          <Col sm={12} md={6}>
            <div>
              <Button
                className='text-white'
                onClick={this.submitData}
                variant='outline-warning'
                size='lg'
              >
                Submit
              </Button>
            </div>
          </Col>
        </Row>
        {displayLoader}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  connections: state.connections,
});

export default connect(mapStateToProps, { loadData })(index);
