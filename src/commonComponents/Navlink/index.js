import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import './index.css';

const Navlink = ({ text, to }) => (
  <NavLink className='btn btn-default btn-white' to={to}>
    <i className='fa fa-subway' /> {text}
  </NavLink>
);

export default Navlink;

Navlink.propTypes = {
  text: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};
