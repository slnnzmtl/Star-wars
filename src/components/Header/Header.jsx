import React from 'react';
import { NavLink, HashRouter as Router } from 'react-router-dom';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import './Header.scss';

const Header = () => (
  <div className="header">
    <div className="header__container">
      <Router>
        <NavLink to="/">
          <Logo />
        </NavLink>
        <Navigation />
      </Router>
    </div>
  </div>
);

export default Header;
