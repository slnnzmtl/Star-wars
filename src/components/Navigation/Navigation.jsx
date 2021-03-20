import React from 'react';
import { HashRouter as Router, NavLink } from 'react-router-dom';
import './Navigation.scss';

const Navigation = () => (
  <div className="navigation">
    <Router>
      <NavLink
        to="/favorites"
        activeClassName="active"
        className="navigation__link"
      >
        Favorites List
      </NavLink>
      <NavLink
        to="/people"
        activeClassName="active"
        className="navigation__link"
      >
        People List
      </NavLink>
    </Router>
  </div>
);

export default Navigation;
