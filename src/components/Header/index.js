import React from 'react';
import logo from '../../images/logo.fw.png';
import s from './Header.module.css';
import Navbar from '../Navbar';
import Contacts from '../Contacts';
import Search from '../Search';
import Cart from '../Cart';

const Header = ({ currentCost, filterItems }) => {
  return (
    <header>
      <div className={s.header_content}>
        <img src={logo} alt='54 pizza logo' />
        <Navbar />
        <Contacts />
      </div>
      <div className={s.search_cart_container}>
        <div className={s.stub}></div>
        <Search filterItems={filterItems} />
        <Cart currentCost={currentCost} />
      </div>
    </header>
  );
};

export default Header;
