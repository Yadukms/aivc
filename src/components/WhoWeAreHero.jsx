import React from 'react';
import './WhoWeAreHero.css';

const WhoWeAreHero = () => {
  return (
    <section className="wwa-hero">
      <div className="wwa-hero-bg-image" style={{ backgroundImage: `url('/b1.png')` }}></div>
      <div className="wwa-hero-overlay"></div>

      <div className="wwa-hero-content">
        <h1 className="wwa-hero-title">
          AI Venture Partners for<br />
          IP-Rich Services Firms
        </h1>
        <p className="wwa-hero-subtitle">
          We build, fund, and commercialize AI product businesses from proprietary IP.
        </p>
        <p className="wwa-hero-accent">
          Revenue-share model. No dilution. Full turnkey execution.
        </p>
      </div>
    </section>
  );
};

export default WhoWeAreHero;
