import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

const ChooseAnotherLocation = props => {
  return (
    <h4 onClick={() => props.history.push('/')} style={{ cursor: 'pointer' }}>
      Home Page
    </h4>
  );
};

export default withRouter(ChooseAnotherLocation);

ChooseAnotherLocation.propTypes = {
  history: PropTypes.PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.object,
      PropTypes.string,
      PropTypes.number,
      PropTypes.func,
    ]),
  ).isRequired,
};
