import React from 'react';
import { FaFacebook, FaLinkedin } from 'react-icons/fa'; // Iconos de Font Awesome
import { FaXTwitter } from 'react-icons/fa6'; // Ícono de X (Twitter)

const Footer = () => {
  return (
    <footer>
      <p>Peraco © 2023 - Todos los derechos reservados</p>
      <div className="social-links">
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
    </footer>
  );
};

export default Footer;