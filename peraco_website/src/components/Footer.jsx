import React from 'react';
import { FaFacebook, FaLinkedin } from 'react-icons/fa'; // Iconos de Font Awesome
import { FaXTwitter } from 'react-icons/fa6'; // Ícono de X (Twitter)
import logo from '../assests/images/logo_original.png';

const Footer = () => {
  return (
    <footer className="footer">
    <div className="footer-left">
      <p>Peraco © 2023 - Todos los derechos reservados</p>
      <div className="footer-social">
        <a href="https://facebook.com/peraco" target="_blank" rel="noopener noreferrer">
          <FaFacebook size={24} />
        </a>
        <a href="https://twitter.com/peraco" target="_blank" rel="noopener noreferrer">
          <FaXTwitter size={24} /> {/* Ícono de X */}
        </a>
        <a href="https://linkedin.com/company/peraco" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={24} />
        </a>
      </div>
    </div>
    <img src={logo} alt="Peraco Logo" className="footer-logo" />
  </footer>
  );
};

export default Footer;
