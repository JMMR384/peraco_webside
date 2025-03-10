import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import NewsList from './pages/NewsList';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<NewsList />} />
        <Route path="/noticias" element={<NewsList />} />
      </Routes>
    </Router>
  );
};

export default App;