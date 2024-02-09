import React from 'react';
import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCard from '../Movies/MoviesCard/MoviesCard';

export default function SavedMovies() {
  return (
    <div className='saved-movies'>
      <SearchForm />
      <div className="saved-movies__container">
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
      </div>
    </div>
  );
}