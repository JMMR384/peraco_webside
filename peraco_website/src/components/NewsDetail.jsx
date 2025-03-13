import React from 'react';
import { useParams } from 'react-router-dom';

const NewsDetail = ({ news }) => {
  const { id } = useParams();
  const article = news.find(item => item.id === parseInt(id));

  if (!article) {
    return <p>Noticia no encontrada</p>;
  }

  return (
    <div className="news-detail-container">
      <h1 className="news-title">{article.title}</h1>
      <p className="news-meta">Por {article.author} - {article.date}</p>
      <div className="news-content">
        <img src={article.image} alt={article.title} className="news-image" />
        <p className="news-text">{article.content}</p>
      </div>
    </div>
  );
};

export default NewsDetail;