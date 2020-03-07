import React from 'react';
import { withRouter } from 'react-router-dom';

const ChooseAnotherLocation = props => {
  return (
    <h4 onClick={() => props.history.push('/')} style={{ cursor: 'pointer' }}>
      Home Page
    </h4>
  );
};

export default withRouter(ChooseAnotherLocation);
