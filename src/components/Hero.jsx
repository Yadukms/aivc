import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const scrollToConnect = () => {
    if (pathname === '/') {
      const el = document.getElementById('connect');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById('connect');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 400);
    }
  };

  return (
    <section className="hero">
      {/* Layer 1: Teal Smoke Video */}
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        poster="/teal-smoke-poster.jpg"
      >
        <source src="/landingpage.mp4" type="video/mp4" />
      </video>

      {/* Layer 2: Dark Scrim for Text Readability */}
      <div className="hero-scrim"></div>

      {/* Layer 3: Hero Content */}
      <div className="hero-content">
        <h1 className="hero-title">
          Turn Your IP Into AI Revenue
        </h1>
        <p className="hero-subtitle">
          Clients are spending big on AI products that compete directly with your services . We build, fund, and commercialize AI product businesses from proprietary IP.
        </p>
        <button onClick={scrollToConnect} className="hero-cta">
          Let's Talk
        </button>
      </div>
    </section>
  );
};

export default Hero;