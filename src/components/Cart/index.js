import React from 'react';
import s from './style.module.css';

export default function Cart() {
  return (
    <div className={s.cart_container}>
      <div className={s.cart_price}>104 грн.</div>
      <div className={s.cart_icon}>
        <i className='fas fa-shopping-cart'></i>
      </div>
    </div>
  );
}
