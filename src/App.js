import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import store from './config/redux/store';

import './App.css';

import { FindConnections, DisplayConnections } from './modules';

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <Switch>
          <Route path='/choose-route' component={DisplayConnections} />
          <Route path='/' component={FindConnections} />
        </Switch>
      </div>
    </Provider>
  );
}

export default App;
