import React from 'react';
import { useParams } from 'react-router-dom';


const news = [
  {
    id: 1,
    title: 'Nueva asociación con agricultores locales',
    date: '2023-10-01',
    author: 'Juan Pérez',
    image: 'https://i.pinimg.com/736x/07/bc/db/07bcdb99be021af34d47ca260708766f.jpg',
    content: 'Peraco ha firmado un acuerdo con agricultores locales para promover productos frescos y sostenibles.',
  },
  {
    id: 2,
    title: 'Lanzamiento de la nueva línea de productos orgánicos',
    date: '2023-09-25',
    author: 'Ana Gómez',
    image: 'https://i.pinimg.com/736x/ba/c5/69/bac569e7155c021f846e1def9d3793ce.jpg',
    content: 'Presentamos nuestra nueva línea de productos orgánicos, cultivados con técnicas respetuosas con el medio ambiente.',
  },
  {
    id: 3,
    title: 'Evento de sostenibilidad en la comunidad',
    date: '2023-09-15',
    author: 'Carlos López',
    image: 'https://i.pinimg.com/736x/53/37/ae/5337ae0ff8e357bb8e530b426dc35122.',
    content: 'Participamos en un evento comunitario para promover prácticas agrícolas sostenibles y responsables.',
  },
];

const NewsDetail = () => {
  const { id } = useParams<{id : string}>();
  const newsItem = news.find((item) => item.id === Number(id));

  if (!newsItem) {
    return <p>Noticia no encontrada</p>;
  }

  return (
    <div className="news-detail">
      {newsItem.image && <img src={newsItem.image} alt={newsItem.title} className="news-image" />}
      
      <div className="news-detail-content">
        <h1>{newsItem.title}</h1>
        <p className="news-meta">
          {newsItem.author} | {newsItem.date}
        </p>
        <p>{newsItem.content}</p>
      </div>

   
    </div>
  );
};

export default NewsDetail;
