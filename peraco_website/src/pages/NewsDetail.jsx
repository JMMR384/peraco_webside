import React from 'react';
import { useParams } from 'react-router-dom';
import NewsCarousel from '../components/NewsList'; // Importamos el carrusel
import NewsDetail from '../components/NewsDetail';


const Newsdetails = () => {
  const { id } = useParams();
  return (
    <div>
      <NewsDetail id = {id}/>
      <NewsCarousel/>
    </div>
  );
};

export default Newsdetails;
