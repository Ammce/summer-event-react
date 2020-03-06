import React from 'react';
import { Button } from 'react-bootstrap';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import { spring, AnimatedSwitch } from 'react-router-transition';

import './App.css';

import { FindConnections, DisplayConnections } from './modules';

function mapStyles(styles) {
  return {
    opacity: styles.opacity,
    transform: `scale(${styles.scale})`,
  };
}

function bounce(val) {
  return spring(val, {
    stiffness: 330,
    damping: 22,
  });
}

const bounceTransition = {
  atEnter: {
    opacity: 0,
    scale: 1.2,
  },
  atLeave: {
    opacity: bounce(0),
    scale: bounce(0.8),
  },
  atActive: {
    opacity: bounce(1),
    scale: bounce(1),
  },
};

function App() {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    // <Provider store={null}>
    <div className='App'>
      <AnimatedSwitch
        atEnter={bounceTransition.atEnter}
        atLeave={bounceTransition.atLeave}
        atActive={bounceTransition.atActive}
        mapStyles={mapStyles}
        className='route-wrapper'
      >
        <Route path='/b' component={DisplayConnections} />
        <Route path='/' component={FindConnections} />
      </AnimatedSwitch>
    </div>
    // </Provider>
  );
}

export default App;
