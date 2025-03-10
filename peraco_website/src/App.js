import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import Contact from './pages/Contact';
import './App.css';

const App = () => {
  return (
    <Router>
      {/* Encabezado */}
      <Header />

      {/* Contenido Principal */}
      <main>
        <Routes>
          {/* Página de Inicio */}
          <Route path="/" element={<Home />} />

          {/* Sobre Nosotros */}
          <Route path="/about" element={<AboutUs />} />

          {/* Servicios */}
          <Route path="/services" element={<Services />} />

          {/* Contacto */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {/* Pie de Página */}
      <Footer />
    </Router>
  );
};

export default App;