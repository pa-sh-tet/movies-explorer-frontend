import { Link } from 'react-router-dom';
import React from 'react';

export default function Navigation({ openMenu }) {
  return (
    <nav className="header__navigation">
      <div className="header__links">
        <Link to="/movies" className="header__movies link">
          Фильмы
        </Link>
        <Link to="/saved-movies" className="header__saved-movies link">
          Сохранённые фильмы
        </Link>
      </div>
      <Link to="/profile" className="header__profile link">
        <div className="header__profile-logo"></div>
        <div className="header__profile-text">
          Аккаунт
        </div>
      </Link>
      <button className='header__menu' onClick={openMenu}></button>
    </nav>
  )
}