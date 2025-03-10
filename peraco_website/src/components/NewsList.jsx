import React, { useEffect, useState } from 'react';

const NewsList = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    // Aquí puedes hacer una llamada a una API para obtener las noticias
    const fakeNews = [
      { id: 1, title: 'Noticia 1', content: 'Contenido de la noticia 1' },
      { id: 2, title: 'Noticia 2', content: 'Contenido de la noticia 2' },
    ];
    setNews(fakeNews);
  }, []);

  return (
    <div>
      <h2>Últimas Noticias</h2>
      <ul>
        {news.map((item) => (
          <li key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsList;