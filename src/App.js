import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { Switch, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

function App() {
  const [pizzaArray, setPizzaArray] = useState([]);
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
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/'>
          <Main pizzaArray={pizzaArray} />
        </Route>
        <Route exact path='/menu'>
          <div style={{ color: 'black' }}>menu</div>
        </Route>
        <Route path='/about'>
          <div style={{ color: 'black' }}>about</div>
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
