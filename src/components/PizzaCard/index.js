import React from 'react';
import margarita from '../../images/margarita.jpg';
import s from './style.module.css';

export default function PizzaCard() {
  return (
    <div className={s.pizza_card}>
      <div className={s.pizza_photo_container}>
        <img src={margarita} alt='margarita' className={s.pizza_photo} />
      </div>

      <div className={s.pizza_description_content}>
        <div className={s.pizza_name}>
          <h1>Margarita</h1>
        </div>

        <div className={s.pizza_composition}>
          Томатный соус, моцарелла, базилик
        </div>

        <div className={s.buttons_block}>
          <button className={`${s.button} ${s.active}`}>Маленькая</button>
          <button className={s.button}>Средняя</button>
          <button className={s.button}>Большая</button>
        </div>

        <div className={s.pizza_card_footer}>
          <div className={s.pizza_price}>129.99 грн.</div>
          <button className={s.pizza_add_to_cart}>В корзину</button>
        </div>
      </div>
    </div>
  );
}
