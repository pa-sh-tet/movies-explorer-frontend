import { Link } from 'react-router-dom';
import React from 'react';

export default function Register() {
  return (
    <div className='register'>
      <div className="register__container">
        <Link className='register__logo link' to='/'></Link>
        <h2 className='register__title'>Добро пожаловать!</h2>
        <form className='register__form'>
          <div className="register__section">
            <h3 className='register__section-title'>Имя</h3>
            <input type="text"
              className='register__section-input'
              placeholder='Введите имя'
              minLength={2}
              maxLength={30}
              required />
            <span className='register__section-error'>Что-то пошло не так...</span>
          </div>
          <div className="register__section">
            <h3 className='register__section-title'>E-mail</h3>
            <input type="email"
            className='register__section-input'
            placeholder='Введите почту'
            minLength={2}
            maxLength={50}
            required />
            <span className='register__section-error'>Что-то пошло не так...</span>
          </div>
          <div className="register__section">
            <h3 className='register__section-title'>Пароль</h3>
            <input type="password"
            className='register__section-input'
            placeholder='Введите пароль'
            minLength={4}
            maxLength={30}
            required />
            <span className='register__section-error'>Что-то пошло не так...</span>
          </div>
          <button className='register__submit-button'>Зарегистрироваться</button>
          <p className='register__login-text'>Уже зарегистрированы?<Link to='/signin' className='register__login-link link'>Войти</Link></p>
        </form>
      </div>
    </div>
  );
}