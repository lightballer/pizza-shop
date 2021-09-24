import React, { useEffect } from 'react';
import s from './PizzaList.module.css';
import PizzaCard from '../PizzaCard';

function PizzaList({ pizzaArray, onAddToCart, onRemoveFromCart, cartState }) {
  useEffect(() => {});
  return (
    <div className={s.pizza_cards_container}>
      {pizzaArray.map((pizzaData, index) => {
        const id = pizzaData._id;
        return (
          <PizzaCard
            pizzaData={pizzaData}
            key={index}
            pizzaCardState={cartState[id] ? cartState[id] : {}}
            onAddToCart={onAddToCart}
            onRemoveFromCart={onRemoveFromCart}
          />
        );
      })}
      ;
    </div>
  );
}

export default React.memo(PizzaList);
