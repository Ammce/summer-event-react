import React, { Component } from 'react';
import { Row, Col, Button, Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';

import Input from '../../../commonComponents/Input';
import Loader from '../../../commonComponents/Loader';

import { loadData } from '../_redux/actions';

class index extends Component {
  state = {
    data: {
      limit: '5',
      from: 'Zermatt',
      to: 'Stallikon',
      date: moment().format('YYYY-MM-DD'),
      time: '17:15',
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
    const { loadData: loadDataHandler, history } = this.props;
    await loadDataHandler(data, history);
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
              isRequired
              value={data.from}
              type='text'
              name='from'
              id='from'
              onChange={this.handleChangeData}
              label='What is your location? '
            />
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={6}>
            <Input
              isRequired
              value={data.to}
              type='text'
              name='to'
              id='to'
              onChange={this.handleChangeData}
              label='Where are you traveling? '
            />
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={6}>
            <Input
              value={data.date}
              type='date'
              name='date'
              id='date'
              onChange={this.handleChangeData}
              label='Date'
            />
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={6}>
            <Input
              value={data.time}
              type='time'
              name='time'
              id='time'
              onChange={this.handleChangeData}
              label='Time'
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
              label='Number of connections? '
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

index.propTypes = {
  history: PropTypes.PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.object,
      PropTypes.string,
      PropTypes.number,
      PropTypes.func,
    ]),
  ).isRequired,
  connections: PropTypes.PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.object,
      PropTypes.string,
      PropTypes.number,
      PropTypes.func,
    ]),
  ).isRequired,
  loadData: PropTypes.func.isRequired,
};
