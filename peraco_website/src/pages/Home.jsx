import React from 'react';
import Hero from '../components/Hero';
import Values from '../components/Values';
import NewsList from '../components/NewsList';
const Home = () => {
  return (
    <div>
      <Hero />
      <NewsList />
      <Values />
    </div>
  );
};

export default Home;