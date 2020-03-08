import React from 'react';
import { NavLink } from 'react-router-dom';

import './index.css';

const Navlink = ({ text, to }) => (
  <NavLink class='btn btn-default btn-white' to={to}>
    <i className='fa fa-subway' /> {text}
  </NavLink>
);

export default Navlink;
