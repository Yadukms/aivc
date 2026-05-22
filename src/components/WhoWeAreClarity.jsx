import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './WhoWeAreClarity.css';

const WhoWeAreClarity = () => {
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
    <section className="wwa-clarity">
      <div className="wwa-clarity-container">
        <div className="wwa-clarity-image-side">
          <img src="/b10.png" alt="Team meeting" className="wwa-clarity-img" />
        </div>
        
        <div className="wwa-clarity-content-side">
          <div className="wwa-clarity-content">
            <h2 className="wwa-clarity-title">We Don't Advise on AI Ventures. We Build Them.</h2>
            <div className="wwa-clarity-text">
              <p className="wwa-clarity-pitch">No pitch. Just clarity.</p>
            </div>
            
            <button className="wwa-clarity-btn" onClick={scrollToConnect}>
              Let's Talk
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreClarity;
