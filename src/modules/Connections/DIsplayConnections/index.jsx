import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class index extends Component {
  render() {
    return (
      <div>
        <p onClick={() => this.props.history.push('/')}>Aaaaaaaa</p>
        Display Connections
        <img src='https://images.pexels.com/photos/3754277/pexels-photo-3754277.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=9400' />{' '}
      </div>
    );
  }
}

export default index;
