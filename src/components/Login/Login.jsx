import { Link } from 'react-router-dom';
import React from 'react';

export default function Login() {
  return (
    <div className='login'>
      <div className="login__container">
        <Link className='login__logo link' to='/'></Link>
        <h2 className='login__title'>Рады видеть!</h2>
        <form className='login__form'>
          <div className="login__section">
            <h3 className='login__section-title'>E-mail</h3>
            <input type="text" className='login__section-input' placeholder='Введите почту' />
            <span className='login__section-error'>Что-то пошло не так...</span>
          </div>
          <div className="login__section">
            <h3 className='login__section-title'>Пароль</h3>
            <input type="text" className='login__section-input' placeholder='Введите пароль' />
            <span className='login__section-error'>Что-то пошло не так...</span>
          </div>
          <button className='login__submit-button'>Войти</button>
          <p className='login__register-text'>Ещё не зарегистрированы?<Link to='/signup' className='login__register-link link'>Регистрация</Link></p>
        </form>
      </div>
    </div>
  );
}