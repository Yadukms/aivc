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
          Turn Your IP Into AI Revenue, <br />
          Before Competitors Do
        </h1>
        <p className="hero-subtitle">
          We build, fund, and commercialize AI product businesses from proprietary IP.
        </p>
        <p className="hero-tags">
          Revenue-share aligned | No dilution | Enterprise-grade execution
        </p>
        <div className="hero-actions">
          <a href="#consultation" className="cta-btn">
            Schedule Your AI Value Creation Consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
