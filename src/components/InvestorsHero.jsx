import React from 'react';
import './InvestorsHero.css';

const InvestorsHero = () => {
  return (
    <section className="investors-hero">
      <div className="investors-hero-bg-image" style={{ backgroundImage: `url('/c1.png')` }}></div>
      <div className="investors-hero-overlay"></div>

      <div className="investors-hero-content">
        <h1 className="investors-hero-title">
          AI Venture Creation for<br />
          IP-Rich Portfolio Companies
        </h1>
        <p className="investors-hero-subtitle">
          We partner with venture and growth investors to convert proprietary IP inside portfolio companies into scalable AI product businesses — co-building and co-investing through aligned, revenue-based structures
        </p>
      </div>
    </section>
  );
};

export default InvestorsHero;
