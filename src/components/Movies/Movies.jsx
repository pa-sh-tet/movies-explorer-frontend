import MoviesCardList from './MoviesCardList/MoviesCardList';
import SearchForm from './SearchForm/SearchForm';
import React from 'react';

export default function Movies() {
  return (
    <div className='movies'>
      <SearchForm />
      <MoviesCardList />
    </div>
  );
}