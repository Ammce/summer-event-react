import React from 'react';
import { Spinner } from 'react-bootstrap';

import './index.css';

const LoadingSpinner = () => (
  <>
    <div className='wrapper'>
      <Spinner
        animation='grow'
        className='spinner'
        variant='warning'
        size='lg'
      />
    </div>
  </>
);

export default LoadingSpinner;
