// NotFoundPage.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/notFoundPage.scss';

const NotFoundPage = () => {
  return (
    <div className="container-404">
      <h2>404</h2>
      <p className="text_404">Oups! La page que vous demandez n'existe pas.</p>
      <NavLink to="/" className="backtohome">Retourner sur la page d'accueil</NavLink>
    </div>
  );
};

export default NotFoundPage;
