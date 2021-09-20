import React, { useState, useEffect } from 'react';
import PizzaList from '../PizzaList';
import './style.module.css';

export default function Main({ pizzaArray }) {
  return (
    <main>
      {
        pizzaArray.length ? (
          <PizzaList pizzaArray={pizzaArray} />
        ) : (
          <div>LOADING</div>
        ) // loading
      }
    </main>
  );
}
