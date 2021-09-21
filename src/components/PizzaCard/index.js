import React, { useState } from 'react';
import margarita from '../../images/margarita.jpg';
import s from './style.module.css';
import { PIZZA_SIZE } from '../../constants';

export default function PizzaCard({
  pizzaData,
  onAddToCart,
  onRemoveFromCart,
}) {
  const {
    name,
    description,
    // image_url,
    price_small,
    price_medium,
    price_large,
  } = pizzaData;

  const [price, setPrice] = useState(price_small);
  const [size, setSize] = useState(PIZZA_SIZE.SMALL);
  const [itemsCount, setItemsCount] = useState({
    SMALL: 0,
    MEDIUM: 0,
    LARGE: 0,
  });
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
            className={
              s.button + ' ' + (size === PIZZA_SIZE.SMALL ? s.active : '')
            }
            onClick={() => {
              setPrice(price_small);
              setSize(PIZZA_SIZE.SMALL);
            }}
          >
            Маленькая
          </button>
          <button
            className={
              s.button + ' ' + (size === PIZZA_SIZE.MEDIUM ? s.active : '')
            }
            onClick={() => {
              setPrice(price_medium);
              setSize(PIZZA_SIZE.MEDIUM);
            }}
          >
            Средняя
          </button>
          <button
            className={
              s.button + ' ' + (size === PIZZA_SIZE.LARGE ? s.active : '')
            }
            onClick={() => {
              setPrice(price_large);
              setSize(PIZZA_SIZE.LARGE);
            }}
          >
            Большая
          </button>
        </div>
        <div className={s.pizza_card_footer}>
          <div className={s.pizza_price}>{price} грн.</div>
          <button
            className={itemsCount[size] === 0 ? s.pizza_add_to_cart : s.hidden}
            onClick={() => {
              onAddToCart(price);
              setItemsCount(prev => ({
                ...prev,
                [size]: prev[size] + 1,
              }));
            }}
          >
            В корзину
          </button>
          <div
            className={
              itemsCount[size] === 0
                ? s.hidden
                : s.pizza_plus_minus_count_container
            }
          >
            <button
              className={s.pizza_plus}
              onClick={() => {
                onAddToCart(price);
                setItemsCount(prev => ({
                  ...prev,
                  [size]: prev[size] + 1,
                }));
              }}
            >
              +
            </button>
            <div className={s.items_count}>{itemsCount[size]}</div>
            <button
              className={s.pizza_minus}
              onClick={() => {
                onRemoveFromCart(price);
                setItemsCount(prev => ({
                  ...prev,
                  [size]: prev[size] - 1,
                }));
              }}
            >
              -
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
