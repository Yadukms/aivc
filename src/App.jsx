import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import WhatWeDo from './pages/WhatWeDo';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/what-we-do" element={<WhatWeDo />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
