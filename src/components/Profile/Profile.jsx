import React from 'react';

export default function Profile() {
  return (
    <div className='profile'>
      <h2 className='profile__title'>Привет, Виталий!</h2>
      <div className='profile__labels'>
        <div className='profile__label'>
          <p className='profile__label-title'>Имя</p>
          <p className='profile__label-text'>Виталий</p>
        </div>
        <div className='profile__label'>
          <p className='profile__label-title'>E-mail</p>
          <p className='profile__label-text'>pochta@yandex.ru</p>      
        </div>
      </div>
      <button className='profile__edit-button link'>Редактировать</button>
      <button className='profile__exit-button link'>Выйти из аккаунта</button>
    </div>
  );
}