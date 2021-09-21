import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './style.module.css';
import { PAGES } from '../../constants';

export default function Navbar() {
  const [currentPage, setCurrentPage] = useState(() => {
    return document.location.pathname;
  });
  return (
    <nav>
      <NavLink
        to={PAGES.MAIN}
        onClick={() => setCurrentPage(PAGES.MAIN)}
        style={currentPage === PAGES.MAIN ? {} : { textDecoration: 'none' }}
      >
        <div>
          <p>Главная</p>
        </div>
      </NavLink>
      <NavLink
        to={PAGES.MENU}
        onClick={() => setCurrentPage(PAGES.MENU)}
        style={currentPage === PAGES.MENU ? {} : { textDecoration: 'none' }}
      >
        <div>
          <p>Меню</p>
        </div>
      </NavLink>
      <NavLink
        to={PAGES.ABOUT}
        onClick={() => setCurrentPage(PAGES.ABOUT)}
        style={currentPage === PAGES.ABOUT ? {} : { textDecoration: 'none' }}
      >
        <div>
          <p>О нас</p>
        </div>
      </NavLink>
    </nav>
  );
}
