import React from 'react';
import Logo_Footer from './Logo_footer';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className='logo_footer'>
       <Logo_Footer/>
       </div>
        <p className="footer__text">© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
