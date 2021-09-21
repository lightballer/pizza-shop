import React from 'react';
import PizzaCard from '../PizzaCard';
import s from './style.module.css';

export default function PizzaList({
  pizzaArray,
  onAddToCart,
  onRemoveFromCart,
}) {
  return (
    <div className={s.pizza_cards_container}>
      {pizzaArray.map((pizza, index) => (
        <PizzaCard
          pizzaData={pizza}
          key={index}
          onAddToCart={onAddToCart}
          onRemoveFromCart={onRemoveFromCart}
        />
      ))}
    </div>
  );
}
