import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';

export default function MoviesCardList() {
  return (
    <section className='cardlist'>
      <div className="cardlist__cards">
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
      </div>
      <button className="cardlist__more-button">Ещё</button>
    </section>
  );
}