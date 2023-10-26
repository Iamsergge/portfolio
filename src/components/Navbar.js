import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { links } from '../Data';
import './navbar.css';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="nav">
      <div className={`nav__menu ${showMenu ? 'show-menu' : ''}`}>
        <ul className="nav__list">
          {links.map(({ name, icon, path }, index) => (
            <li className="nav__item" key={index}>
              <NavLink
                to={path}
                className={`nav__link ${showMenu ? 'active-nav' : ''}`}
                activeClassName="active-nav"
              >
                {icon}
                <h3 className="nav__name">{name}</h3>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      <div
        className={`nav__toggle ${showMenu ? 'animate-toggle' : ''}`}
        onClick={() => setShowMenu(!showMenu)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
