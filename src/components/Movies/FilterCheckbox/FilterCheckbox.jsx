import React from 'react';

export default function FilterCheckbox() {
  return (
    <div className='filter'>
      <input type="checkbox"
      className='filter__button' 
      id="switch" />
      <p className='filter__text'>Короткометражки</p>
    </div>
  );
}