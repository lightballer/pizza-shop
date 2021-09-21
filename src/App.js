import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import React, { useState, useEffect } from 'react';

function App() {
  const [pizzaArray, setPizzaArray] = useState([]);
  const [currentCost, setCurrentCost] = useState(0);
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
  const onAddToCart = price => {
    setCurrentCost(prevPrice => prevPrice + price);
  };

  const onRemoveFromCart = price => {
    setCurrentCost(prevPrice => prevPrice - price);
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
