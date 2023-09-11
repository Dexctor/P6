// NavBar.js
import React from 'react';
import Logo from './Logo'
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <div className="nav-bar">
       <NavLink to="/">
            <Logo />
        </NavLink>
      
      <div className="nav-links">
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/apropos">À propos</NavLink>
      </div>
    </div>
  );
}

export default NavBar;
