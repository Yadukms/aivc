import React from 'react';
import './PrivacyPolicyHero.css';

const PrivacyPolicyHero = () => {
  return (
    <section className="pp-hero">
      {/* Right: photo background */}
      <div className="pp-hero-bg-image" />

      {/* Left: diagonal teal overlay using svg1.png */}
      <div className="pp-hero-overlay">
        <img src="/svg1.png" alt="" className="pp-hero-overlay-img" />
      </div>

      {/* Content sits above both layers */}
      <div className="pp-hero-content">
        <h1 className="pp-hero-title">Terms & Condition</h1>
        <p className="pp-hero-subtitle">
          This is a template document. Please have this reviewed and
          customized by your legal counsel before publishing.
        </p>
      </div>
    </section>
  );
};

export default PrivacyPolicyHero;
