import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Importa Link desde react-router-dom
import logo from '../assests/images/logo_horizontal.png';
import { FaBars, FaTimes } from 'react-icons/fa'; // Íconos de hamburguesa y cerrar


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para controlar el menú

  // Función para alternar el menú
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <Link to="/">
        <img src={logo} alt="Logo de Peraco" className="logo" />
      </Link>

      {/* Ícono de hamburguesa (solo en móviles) */}
      <div className="menu-icon" onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Menú de navegación */}
      <nav className={isMenuOpen ? 'nav-active' : ''}>
        <Link to="/" onClick={toggleMenu}>Inicio</Link>
        <Link to="/about" onClick={toggleMenu}>Sobre Nosotros</Link>
        <Link to="/services" onClick={toggleMenu}>Servicios</Link>
        <Link to="/news" onClick={toggleMenu}>Noticias</Link>
        <Link to="/contact" onClick={toggleMenu}>Contacto</Link>
      </nav>
    </header>
  );
};


export default Header;