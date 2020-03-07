import React from 'react';

import { Route, Switch, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './App.css';

import { FindConnections, DisplayConnections, DisplayPath } from './modules';

function App() {
  const connections = useSelector(state => state.connections);
  console.log(connections);
  return (
    <div className='App'>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/choose-route'>Choose Route</NavLink>
      <NavLink to='/choose-route/path'>Haa</NavLink>
      <Switch>
        <Route exact path='/choose-route/path' component={DisplayPath} />
        <Route path='/choose-route' component={DisplayConnections} />
        <Route path='/' component={FindConnections} />
      </Switch>
    </div>
  );
}

export default App;
