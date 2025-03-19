import React from "react";
import { FaFacebook, FaLinkedin, FaInstagram, FaPinterest, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import logo from "../assests/images/logo_original.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Columna 1: Compañía */}
        <div className="footer-column">
          <h4>Compañía</h4>
          <a href="#">Carreras</a>
          <a href="#">Nuestro Café</a>
          <a href="#">Noticias</a>
          <a href="#">Foodservice</a>
        </div>

        {/* Columna 2: Centro (Logo + formulario + checkbox) */}
        <div className="footer-center">
          <img src={logo} alt="Peraco Logo" className="footer-logo" />
          <h4>Recibe nuestras noticias</h4>
          <form className="footer-form">
            <input type="email" placeholder="Tu correo electrónico" />
            <button type="submit">Suscribirse</button>
          </form>
          <label>
            <input type="checkbox" /> Acepto que soy mayor de 16 años.
          </label>
        </div>

        {/* Columna 3: Soporte + redes sociales */}
        <div className="footer-column">
          <h4>Soporte</h4>
          <a href="#">Atención al Cliente</a>
          <a href="#">Alumni</a>
          <a href="#">Peraco Canadá</a>
          <a href="#">Peraco México</a>
          <div className="footer-social">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaInstagram /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
