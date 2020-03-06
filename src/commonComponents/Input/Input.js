import React from 'react';

import './Input.css';

const Input = () => {
  return (
    <>
      <input
        type='text'
        name='name'
        className='question'
        id='nme'
        required
        autocomplete='off'
      />
      <label for='nme'>
        <span>What's your name?</span>
      </label>
    </>
  );
};

export default Input;
