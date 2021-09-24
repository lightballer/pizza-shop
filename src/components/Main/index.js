import React from 'react';
import { Route } from 'react-router-dom';
import './Main.module.css';
import PizzaList from '../PizzaList';

export default function Main({
  pizzaArray,
  onAddToCart,
  onRemoveFromCart,
  cartState,
}) {
  return (
    <main>
      <Route exact path='/'>
        <div>/MAIN</div>
      </Route>
      <Route exact path='/menu'>
        {pizzaArray.length ? (
          <PizzaList
            pizzaArray={pizzaArray}
            cartState={cartState}
            onAddToCart={onAddToCart}
            onRemoveFromCart={onRemoveFromCart}
          />
        ) : (
          <div>LOADING</div>
        )}
      </Route>
      <Route path='/about'>
        <div>/ABOUT</div>
      </Route>
    </main>
  );
}
