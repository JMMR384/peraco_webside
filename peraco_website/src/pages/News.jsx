import React from 'react';

const News = () => {
  // Datos de ejemplo para las noticias
  const news = [
    {
      id: 1,
      title: 'Nueva asociación con agricultores locales',
      date: '2023-10-01',
      content: 'Peraco ha firmado un acuerdo con agricultores locales para promover productos frescos y sostenibles.',
    },
    {
      id: 2,
      title: 'Lanzamiento de la nueva línea de productos orgánicos',
      date: '2023-09-25',
      content: 'Presentamos nuestra nueva línea de productos orgánicos, cultivados con técnicas respetuosas con el medio ambiente.',
    },
    {
      id: 3,
      title: 'Evento de sostenibilidad en la comunidad',
      date: '2023-09-15',
      content: 'Participamos en un evento comunitario para promover prácticas agrícolas sostenibles y responsables.',
    },
  ];

  return (
    <section className="news">
      <h1>Noticias de Peraco</h1>
      <div className="news-list">
        {news.map((item) => (
          <div key={item.id} className="news-item">
            <h2>{item.title}</h2>
            <p className="news-date">{item.date}</p>
            <p className="news-content">{item.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default News;