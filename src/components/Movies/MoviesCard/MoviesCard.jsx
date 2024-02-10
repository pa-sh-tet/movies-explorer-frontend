import {useLocation} from 'react-router-dom';
import React from 'react';

export default function MoviesCard() {
  const location = useLocation();
  
  return (
    <li className='card'>
      <div className='card__image'></div>
      <div className="card__container">
        <h3 className='card__name'>33 слова о дизайне</h3>
        {location.pathname === '/movies'
          ? (<input type="checkbox" className='card__save-button link'></input>)        
          : (<button className='card__delete-button link'></button>)
        }
      </div>
      <p className='card__time'>1ч42м</p>
    </li>
  );
}