import React from 'react';
import { useParams } from 'react-router-dom';

const newsData = [
  { id: 1, title: 'Nueva asociación con agricultores locales', date: '2023-10-01', content: 'Peraco ha firmado un acuerdo con agricultores locales para promover productos frescos y sostenibles.', author: 'Juan Pérez' },
  { id: 2, title: 'Lanzamiento de la nueva línea de productos orgánicos', date: '2023-09-25', content: 'Presentamos nuestra nueva línea de productos orgánicos, cultivados con técnicas respetuosas con el medio ambiente.', author: 'María López' },
  { id: 3, title: 'Evento de sostenibilidad en la comunidad', date: '2023-09-15', content: 'Participamos en un evento comunitario para promover prácticas agrícolas sostenibles y responsables.', author: 'Carlos Gómez' }
];

const NewsDetail = () => {
  const { id } = useParams();
  const newsItem = newsData.find(item => item.id === parseInt(id));

  if (!newsItem) {
    return <h2>Noticia no encontrada</h2>;
  }

  return (
    <div className="news-detail">
      <h1>{newsItem.title}</h1>
      <p className="news-date">{newsItem.date} - <strong>{newsItem.author}</strong></p>
      <p className="news-content">{newsItem.content}</p>
    </div>
  );
};

export default NewsDetail;
