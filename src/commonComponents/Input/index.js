import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

const Input = ({ name, className, id, value, onChange, label, type }) => {
  return (
    <>
      <input
        type={type}
        value={value}
        onChange={onChange}
        name={name}
        className={`question ${className}`}
        id={id}
        required
        autoComplete='off'
      />
      <label htmlFor='nme'>
        <span>{label}</span>
      </label>
    </>
  );
};

export default Input;

Input.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

Input.defaultProps = {
  className: '',
};
