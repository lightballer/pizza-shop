import React from 'react';
import s from './style.module.css';

export default function Search() {
  return (
    <div className={s.search_container}>
      <input className={s.search} type='text' placeholder='Поиск...' />
      <button className={s.search_button} type='submit'></button>
    </div>
  );
}
