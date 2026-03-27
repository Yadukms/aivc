import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-video-container">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="hero-video"
          src="/h1.mp4"
        >
          Your browser does not support the video tag.
        </video>
        <div className="hero-overlay"></div>
      </div>

      <div className="hero-content">
        <h1 className="hero-title">
          Turn Your IP Into AI Revenue
        </h1>
        <p className="hero-subtitle">
          Clients are spending big on AI products that compete directly with your services. We build, fund, and commercialize AI product businesses from proprietary IP.
        </p>
        <div className="hero-actions">
          <a href="#consultation" className="cta-btn">
            Lets Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
