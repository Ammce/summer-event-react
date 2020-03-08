import React from 'react';
import { ToastContainer } from 'react-toastify';
import { Route, Switch } from 'react-router-dom';

import 'react-toastify/dist/ReactToastify.css';
import './App.css';

import PrivateRoute from './config/privateRoute';

import { FindConnections, DisplayConnections, DisplayPath } from './modules';

function App() {
  return (
    <div className='App mt-3'>
      <ToastContainer />
      <Switch>
        <PrivateRoute exact path='/choose-route/path' component={DisplayPath} />
        <PrivateRoute path='/choose-route' component={DisplayConnections} />
        <Route path='/' component={FindConnections} />
      </Switch>
    </div>
  );
}

export default App;
