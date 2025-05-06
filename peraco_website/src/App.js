import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import Contact from './pages/Contact';
import News from './pages/News'; // Importa el componente de noticias
import NewsDetail from './pages/NewsDetail';
import Login from './pages/Login';
import './App.css';
import './Login.css';
import StudioDashboard from './peraco_studio/App/';


const App = () => {
  return (
    <Router>
      {/* Encabezado */}
      <Header />

      {/* Contenido Principal */}
      <main>
        <Routes>
          {/* Página de Inicio */}
          <Route path="/peraco_website" element={<Home />} />

          {/* Sobre Nosotros */}
          <Route path="/about" element={<AboutUs />} />

          {/* Servicios */}
          <Route path="/services" element={<Services />} />

          {/* Contacto */}
          <Route path="/contact" element={<Contact />} />

          {/* Noticias */}
          <Route path="/news" element={<News />} />
          <Route path="/news/:id" element={<NewsDetail />} />
          {/*Login*/}
          <Route path="/login" element={<Login />} />
         {/*PeraCo Studio */}
         <Route path="/peraco_studio/*" element={<StudioDashboard />} />

        </Routes>
      </main>

      {/* Pie de Página */}
      <Footer />
    </Router>
  );
};

export default App;