import React from 'react';
import PizzaCard from '../PizzaCard';
import s from './style.module.css';

export default function PizzaList({ pizzaArray }) {
  return (
    <main>
      <section className={s.pizza_cards_container}>
        {pizzaArray.map((pizza, key) => (
          <PizzaCard pizzaData={pizza} key={key} />
        ))}
        {/* <PizzaCard /> */}
      </section>
    </main>
  );
}
