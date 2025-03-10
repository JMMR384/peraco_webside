import React from 'react';
import { useParams } from 'react-router-dom';

const NewsDetail = () => {
  const { id } = useParams(); // Obtiene el ID de la noticia desde la URL

  // Simulación de datos de noticias
  const newsData = [
    { id: 1, title: 'Noticia 1', content: 'Contenido detallado de la noticia 1.' },
    { id: 2, title: 'Noticia 2', content: 'Contenido detallado de la noticia 2.' },
    { id: 3, title: 'Noticia 3', content: 'Contenido detallado de la noticia 3.' },
  ];

  // Busca la noticia correspondiente al ID
  const newsItem = newsData.find((item) => item.id === parseInt(id));

  if (!newsItem) {
    return <div>Noticia no encontrada.</div>;
  }

  return (
    <div>
      <h2>{newsItem.title}</h2>
      <p>{newsItem.content}</p>
    </div>
  );
};

export default NewsDetail;
