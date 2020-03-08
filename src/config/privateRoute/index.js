/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-confusing-arrow */
/* eslint-disable react/prop-types */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

function PrivateRoute({ component: Component, ...rest }) {
  const connections = useSelector(state => state.connections);
  return (
    <Route
      {...rest}
      render={
        props =>
          connections.data.connections ? (
            <Component {...props} />
          ) : (
            <Redirect to='/' />
          )
        // eslint-disable-next-line react/jsx-curly-newline
      }
    />
  );
}

export default PrivateRoute;
