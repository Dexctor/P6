import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import '../styles/notFoundPage.scss';

const NotFoundPage = () => {
  const location = useLocation();
  const reason = location.state?.reason || "La page que vous demandez n'existe pas";

  return (
    <div className="container-404">
      <h2 className='title_'>404</h2>
      <p className="text_404">Oups! {reason}.</p>
      <NavLink to="/" className="backtohome">Retourner sur la page d'accueil</NavLink>
    </div>
  );
};

export default NotFoundPage;
