import React from 'react';
import './WhoWeAreHero.css';

const WhoWeAreHero = () => {
  return (
    <section className="wwa-hero">
      <div className="wwa-hero-bg-image" style={{ backgroundImage: `url('/whowearehero.jpeg')` }}></div>
      <div className="wwa-hero-overlay">
        <img src="/whowe1.png" alt="Overlay Shape" className="wwa-hero-overlay-img" />
      </div>

      <div className="wwa-hero-right-overlay"></div>

      <div className="wwa-hero-content">
        <h1 className="wwa-hero-title">
          Operators, Not Consultants.
        </h1>
        <p className="wwa-hero-subtitle">
          Building AI Businesses That Are Transforming B2B Services.
        </p>
        {/* <p className="wwa-hero-accent">
          Revenue-share model. No dilution. Full turnkey execution.
        </p> */}
      </div>
    </section>
  );
};

export default WhoWeAreHero;
