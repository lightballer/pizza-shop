import React from 'react';
import PizzaCard from '../PizzaCard';
import s from './style.module.css';

export default function PizzaList() {
  return (
    <main>
      <section className={s.pizza_cards_container}>
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
      </section>
    </main>
  );
}
