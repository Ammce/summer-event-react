import React from 'react';

import { Route, Switch } from 'react-router-dom';

import './App.css';

import PrivateRoute from './config/privateRoute';

import { FindConnections, DisplayConnections, DisplayPath } from './modules';

function App() {
  return (
    <div className='App mt-3'>
      <Switch>
        <PrivateRoute exact path='/choose-route/path' component={DisplayPath} />
        <PrivateRoute path='/choose-route' component={DisplayConnections} />
        <Route path='/' component={FindConnections} />
      </Switch>
    </div>
  );
}

export default App;
