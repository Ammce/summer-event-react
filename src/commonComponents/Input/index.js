import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

const Input = ({
  name,
  className,
  id,
  value,
  onChange,
  label,
  type,
  isRequired,
}) => {
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
      <label htmlFor={name}>
        <span style={{ zIndex: '33' }}>
          {label} {isRequired && <i className='text-warning'>*</i>}
        </span>
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
  isRequired: PropTypes.bool,
};

Input.defaultProps = {
  className: '',
  isRequired: false,
};
