import React from 'react';
import logo from '../../images/logo.fw.png';
import Navbar from '../Navbar';
import Contacts from '../Contacts';
import Search from '../Search';
import Cart from '../Cart';
import s from './style.module.css';

export default function Header({ currentCost }) {
  return (
    <header>
      <div className={s.header_content}>
        <img src={logo} alt='54 pizza logo' />
        <Navbar />
        <Contacts />
      </div>
      <div className={s.search_cart_container}>
        <div className={s.stub}></div>
        <Search />
        <Cart currentCost={currentCost} />
      </div>
    </header>
  );
}
