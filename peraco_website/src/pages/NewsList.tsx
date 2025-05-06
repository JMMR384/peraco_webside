import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const NewsList = () => {
  type NewsItem = { id: number; title: string; content: string };
const [news, setNews] = useState<NewsItem[]>([]);


  useEffect(() => {
    // Simulación de una llamada a una API
    const fakeNews = [
      { id: 1, title: 'Noticia 1', content: 'Contenido de la noticia 1.' },
      { id: 2, title: 'Noticia 2', content: 'Contenido de la noticia 2.' },
      { id: 3, title: 'Noticia 3', content: 'Contenido de la noticia 3.' },
    ];
    setNews(fakeNews);
  }, []);

  return (
    <div>
      <h2>Últimas Noticias</h2>
      <ul>
        {news.map((item) => (
          <li key={item.id}>
            <Link to={`/news/${item.id}`}>
              <h3>{item.title}</h3>
            </Link>
            <p>{item.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsList;