import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import WhatWeDo from './pages/WhatWeDo';
import AIBusinessBuilding from './pages/AIBusinessBuilding';
import Insights from './pages/Insights';
import WhoWeAre from './pages/WhoWeAre';
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
          <Route path="/ai-business" element={<AIBusinessBuilding />} />
          <Route path="/who-we-are" element={<WhoWeAre />} />
          <Route path="/insights" element={<Insights />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
