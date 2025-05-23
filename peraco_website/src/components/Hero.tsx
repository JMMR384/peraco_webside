import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Hero = () => {
  // Configuración del carrusel
  const settings = {
    dots: true, // Muestra los puntos de navegación
    infinite: true, // Navegación infinita
    speed: 500, // Velocidad de transición
    slidesToShow: 1, // Muestra una imagen a la vez
    slidesToScroll: 1, // Desplaza una imagen a la vez
    autoplay: true, // Reproducción automática
    autoplaySpeed: 3000, // Intervalo de 3 segundos
  };

  // Datos de ejemplo para las noticias
  const news = [
    {
      id: 1,
      image: 'https://i.pinimg.com/736x/00/b3/31/00b3319d9355586ba6a759649b947814.jpg', // URL de la imagen
      title: 'Nueva asociación con agricultores locales',
      description: 'Peraco ha firmado un acuerdo con agricultores locales para promover productos frescos y sostenibles.',
    },
    {
      id: 2,
      image: 'https://i.pinimg.com/736x/7d/d0/41/7dd0412f3272d107fe3eb08e6eb9614d.jpg', // URL de la imagen
      title: 'Lanzamiento de la nueva línea de productos orgánicos',
      description: 'Presentamos nuestra nueva línea de productos orgánicos, cultivados con técnicas respetuosas con el medio ambiente.',
    },
    {
      id: 3,
      image: 'https://i.pinimg.com/736x/bb/42/be/bb42be855d6344ead4ec99ab0971c22c.jpg', // URL de la imagen
      title: 'Evento de sostenibilidad en la comunidad',
      description: 'Participamos en un evento comunitario para promover prácticas agrícolas sostenibles y responsables.',
    },
  ];

  return (
    <section className="hero">
      <Slider {...settings}>
        {news.map((item) => (
          <div key={item.id} className="hero-slide">
            <img src={item.image} alt={item.title} className="hero-image" />
            <div className="hero-content">
              <h1>{item.title}</h1>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Hero;