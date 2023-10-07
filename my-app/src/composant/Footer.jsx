import React from 'react';
import LogoFooter from './LogoFooter';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className='logo_footer'>
       <LogoFooter/>
       </div>
        <p className="footer__text">© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
