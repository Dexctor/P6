// NotFoundPage.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/NotFoundPage.scss';
const NotFoundPage = () => {
  return (
    <div className="container-404">
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <NavLink to="/" className="backtohome">Retourner sur la page d'accueil</NavLink>
    </div>
  );
};

export default NotFoundPage;
