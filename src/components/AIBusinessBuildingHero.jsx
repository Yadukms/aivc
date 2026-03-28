import React from 'react';
import './AIBusinessBuildingHero.css';

const AIBusinessBuildingHero = () => {
  return (
    <section className="aib-hero">
      <div className="aib-hero-bg-image" style={{ backgroundImage: `url('/a1.png')` }}></div>
      <div className="aib-hero-overlay"></div>

      <div className="aib-hero-content">
        <h1 className="aib-hero-title">
          AI Business Building &<br />
          Commercialization
        </h1>
        <p className="aib-hero-subtitle">
          Most IP-rich services firms are sitting on productizable AI revenue they haven't unlocked
        </p>
      </div>
    </section>
  );
};

export default AIBusinessBuildingHero;
