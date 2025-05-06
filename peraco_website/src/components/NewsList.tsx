import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

const newsData = [
  {
    id: 1,
    title: 'Nueva actualización de la app',
    date: '12 de marzo de 2025',
    content: 'Nuestra aplicación ha recibido una actualización con nuevas funcionalidades.',
    image: 'https://i.pinimg.com/736x/53/37/ae/5337ae0ff8e357bb8e530b426dc35122.jpg',
  },
  {
    id: 2,
    title: 'Evento de lanzamiento',
    date: '15 de marzo de 2025',
    content: 'Únete a nuestro evento especial de lanzamiento y conoce todas las novedades.',
    image: 'https://i.pinimg.com/736x/11/26/6d/11266d9fda1d762e95687b54fd989f22.jpg',
  },
  {
    id: 3,
    title: 'Colaboraciones estratégicas',
    date: '20 de marzo de 2025',
    content: 'Estamos trabajando con empresas líderes para mejorar la experiencia del usuario.',
    image: 'https://i.pinimg.com/736x/0c/ad/09/0cad09d3285f68b11e043cfceb0b4fe6.jpg',
  },
  {
    id: 4,
    title: "Expansión de servicios",
    date: "2 de marzo de 2025",
    content: "Nos expandimos a nuevas regiones para brindarte un mejor servicio.",
    image: "https://i.pinimg.com/736x/ba/c5/69/bac569e7155c021f846e1def9d3793ce.jpg",
  },
];

const NewsList = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="news-slider">
      <h2>Últimas Noticias</h2>
      <Slider {...settings}>
        {newsData.map((news) => (
          <div key={news.id} className="news-card">
            <img src={news.image} alt={news.title} className="news-image" />
            <div className="news-info">
              <h3>{news.title}</h3>
              <p className="news-date">{news.date}</p>
              <p className="news-content">{news.content}</p>
              <button className="read-more">Leer más</button>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default NewsList;