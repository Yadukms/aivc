import React from 'react';
import './WhatWeDoHero.css';

const WhatWeDoHero = () => {
  return (
    <section className="wwd-hero">
      <div className="wwd-hero-bg-image" style={{ backgroundImage: `url('/img8.png')` }}></div>
      <div className="wwd-hero-overlay"></div>

      <div className="wwd-hero-content">
        <h1 className="wwd-hero-title">
          We Turn Proprietary IP<br />
          Into Scalable AI Product<br />
          Businesses
        </h1>
        <p className="wwd-hero-subtitle">
          From concept to commercialization — we build, fund, and scale
        </p>
      </div>
    </section>
  );
};

export default WhatWeDoHero;
