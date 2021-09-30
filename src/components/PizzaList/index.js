import React, { useEffect } from 'react';
import s from './PizzaList.module.css';
import PizzaCard from '../PizzaCard';

const PizzaList = ({
  pizzaArray,
  onAddToCart,
  onRemoveFromCart,
  cartState,
}) => {
  useEffect(() => {});
  return (
    <div className={s.pizza_cards_container}>
      {pizzaArray.length ? (
        pizzaArray.map((pizzaData, index) => {
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
        })
      ) : (
        <div>No pizza found!</div>
      )}
    </div>
  );
};

export default PizzaList;
