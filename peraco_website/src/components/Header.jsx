import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link desde react-router-dom
import logo from '../assests/images/logo_horizontal.png';

const Header = () => {
  return (
    <header>
      <Link to="/">
        <img src={logo} alt="Logo de Peraco" className="logo"  />
      </Link>
      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/about">Sobre Nosotros</Link>
        <Link to="/services">Servicios</Link>
        <Link to="/contact">Contacto</Link>
      </nav>
    </header>
  );
};

export default Header;