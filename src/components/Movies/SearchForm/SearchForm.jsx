import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import React from 'react';

export default function SearchForm() {
  return (
    <div className='search'>
      <form className='search__container'>
        <div className='search__logo'></div>
        <input type="text"
          className='search__input'
          placeholder='Фильм'
          required />
        <button className='search__button'><div className='search__button-image'></div></button>
        <FilterCheckbox />
      </form>
    </div>
  );
}