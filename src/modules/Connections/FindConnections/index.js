import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { connect } from 'react-redux';

import Input from '../../../commonComponents/Input/';
import Loader from '../../../commonComponents/Loader';

import { loadData } from '../_redux/actions';

class index extends Component {
  state = {
    data: {
      limit: '5',
      from: 'Zermatt',
      to: 'Zurich',
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
    console.log(connections);
    let displayLoader = null;
    if (connections.isLoading) {
      displayLoader = <Loader />;
    }
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
        {displayLoader}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  connections: state.connections,
});

export default connect(mapStateToProps, { loadData })(index);
