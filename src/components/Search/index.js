import React, { useState } from 'react';
import s from './Search.module.css';

export default function Search({ filterItems }) {
  const [text, setText] = useState('');
  return (
    <div className={s.search_container}>
      <input
        className={s.search}
        type='text'
        placeholder='Поиск...'
        value={text}
        onChange={event => {
          const value = event.target.value;
          setText(value);
          filterItems(value);
        }}
      />
      <button className={s.search_button} type='submit'></button>
    </div>
  );
}
