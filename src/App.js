import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import React, { useState, useEffect } from 'react';

function App() {
  const [pizzaArray, setPizzaArray] = useState([]);
  const [currentCost, setCurrentCost] = useState(0);
  const [cartState, setCartState] = useState({});
  useEffect(() => {
    const url = 'http://localhost:5000/api/pizza';
    fetch(url)
      .then(data => {
        return data.json();
      })
      .then(data => {
        setPizzaArray(data);
      });
  }, []);

  // const onAddToCart = price => {
  //   setCurrentCost(prevPrice => prevPrice + price);
  // };

  // const onRemoveFromCart = price => {
  //   setCurrentCost(prevPrice => prevPrice - price);
  // };

  const countCost = ({ _id, size }) => {
    const SIZE_ACCORDANCE = {
      SMALL: 'price_small',
      MEDIUM: 'price_medium',
      LARGE: 'price_large',
    };
    const priceType = SIZE_ACCORDANCE[size];
    const price = pizzaArray.find(pizza => {
      return pizza._id === _id;
    })[priceType];
    return price;
  };

  const onAddToCart = ({ _id, size }) => {
    const count = cartState[_id]?.[size] || 0;
    setCartState({ ...cartState, [_id]: { [size]: count + 1 } });
    const cost = countCost({ _id, size });
    setCurrentCost(prevCost => prevCost + cost);
  };

  const onRemoveFromCart = ({ _id, size }) => {
    const count = cartState[_id]?.[size] || 0;
    setCartState({ ...cartState, [_id]: { [size]: count - 1 } });
    const cost = countCost({ _id, size });
    setCurrentCost(prevCost => prevCost - cost);
  };

  return (
    <div>
      <Header currentCost={currentCost} />
      <Main
        pizzaArray={pizzaArray}
        onAddToCart={onAddToCart}
        onRemoveFromCart={onRemoveFromCart}
      />
      <Footer />
    </div>
  );
}

export default App;
