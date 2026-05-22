import React from 'react';
import './InvestorsHero.css';

const InvestorsHero = () => {
  return (
    <section className="investors-hero">
      <div className="investors-hero-bg-image" style={{ backgroundImage: `url('/investors.png')` }}></div>
      <div className="investors-hero-overlay"></div>

      <div className="investors-hero-content">
        <h1 className="investors-hero-title">
          The Fastest Path<br />
          to a Higher Exit Multiple Is<br />
          Already Inside Your Portfolio.
        </h1>
        <p className="investors-hero-subtitle">
          We are Private Equity Operating Partners<br />
          who convert portfolio IP into scalable AI product revenue.
        </p>
        <p className="investors-hero-highlight">
          We build a stronger valuation story before your next exit.
        </p>
      </div>
    </section>
  );
};

export default InvestorsHero;
