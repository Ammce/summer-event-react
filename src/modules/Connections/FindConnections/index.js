import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import queryString from 'query-string';

import Input from '../../../commonComponents/Input/';

class index extends Component {
  state = {
    isLoading: false,
    data: {
      limit: '',
      from: '',
      to: '',
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
    console.log(data);
  };

  render() {
    const { data } = this.state;
    console.log(data);
    return (
      <div>
        <Row>
          <Col>
            <Row className='mt-4 ml-3'>
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
            <Row className='mt-4 ml-3'>
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
            <Row className='mt-4 ml-3'>
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
            <Row className='mt-4 ml-3'>
              <Col sm={12} md={6}>
                <div>
                  <Button onClick={this.submitData} variant='warning' size='lg'>
                    Submit
                  </Button>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

export default index;
