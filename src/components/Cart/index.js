import React from 'react';
import s from './Cart.module.css';

const Cart = ({ currentCost }) => {
  return (
    <div className={s.cart_container}>
      <div className={s.cart_price}>{currentCost} грн.</div>
      <div className={s.cart_icon}>
        <i className='fas fa-shopping-cart'></i>
      </div>
    </div>
  );
};

export default Cart;
