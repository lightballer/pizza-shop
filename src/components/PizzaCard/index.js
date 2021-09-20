import React, { useState } from 'react';
import margarita from '../../images/margarita.jpg';
import s from './style.module.css';

export default function PizzaCard({ pizzaData }) {
  const {
    name,
    description,
    image_url,
    price_small,
    price_medium,
    price_large,
  } = pizzaData;

  const SIZE = {
    SMALL: 'SMALL',
    MEDIUM: 'MEDIUM',
    LARGE: 'LARGE',
  };

  const [price, setPrice] = useState(price_small);
  const [size, setSize] = useState(SIZE.SMALL);
  return (
    <div className={s.pizza_card}>
      <div className={s.pizza_photo_container}>
        <img src={margarita} alt='margarita' className={s.pizza_photo} />
      </div>

      <div className={s.pizza_description_content}>
        <div className={s.pizza_name}>
          <h1>{name}</h1>
        </div>

        <div className={s.pizza_composition}>{description}</div>

        <div className={s.buttons_block}>
          <button
            className={s.button + ' ' + (size === SIZE.SMALL ? s.active : '')}
            onClick={() => {
              setPrice(price_small);
              setSize(SIZE.SMALL);
            }}
          >
            Маленькая
          </button>
          <button
            className={s.button + ' ' + (size === SIZE.MEDIUM ? s.active : '')}
            onClick={() => {
              setPrice(price_medium);
              setSize(SIZE.MEDIUM);
            }}
          >
            Средняя
          </button>
          <button
            className={s.button + ' ' + (size === SIZE.LARGE ? s.active : '')}
            onClick={() => {
              setPrice(price_large);
              setSize(SIZE.LARGE);
            }}
          >
            Большая
          </button>
        </div>

        <div className={s.pizza_card_footer}>
          <div className={s.pizza_price}>{price} грн.</div>
          <button className={s.pizza_add_to_cart}>В корзину</button>
        </div>
      </div>
    </div>
  );
}
