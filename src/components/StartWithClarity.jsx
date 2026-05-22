import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './StartWithClarity.css';

const StartWithClarity = () => {
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
    <section className="start-with-clarity" id="start-with-clarity">
      <div className="swc-bg-shapes">
        <svg className="swc-shape swc-left-1" xmlns="http://www.w3.org/2000/svg" width="353" height="435" viewBox="0 0 443 435" fill="none">
          <path d="M442.394 440.964V0L-21.9446 440.964H442.394Z" fill="#092a2dd5" />
        </svg>
        <svg className="swc-shape swc-left-2" xmlns="http://www.w3.org/2000/svg" width="435" height="690" viewBox="0 0 435 690" fill="none">
          <path d="M434.814 731.109L2.91302 -2.36328L-165.562 731.109H434.814Z" fill="#043d41ff" />
        </svg>
        <svg className="swc-shape swc-right-1" xmlns="http://www.w3.org/2000/svg" width="503" height="690" viewBox="0 0 503 690" fill="none">
          <path d="M600.376 -33.7379L168.475 699.734L3.08702e-06 -33.7379L600.376 -33.7379Z" fill="#097C81" />
        </svg>
        <svg className="swc-shape swc-right-2" xmlns="http://www.w3.org/2000/svg" width="360" height="441" viewBox="0 0 360 441" fill="none">
          <path d="M464.339 -0.00012207L464.339 440.963L-5.30025e-05 -0.000162664L464.339 -0.00012207Z" fill="#022d31ff" />
        </svg>
      </div>

      <div className="swc-container">
        <div className="swc-content">
          <h2 className="swc-title">Start With Clarity</h2>
          <p className="swc-subtitle">
            What if your proprietary IP could generate annual recurring revenue on its own?
          </p>
          <p className="swc-pitch">No pitch. Just clarity.</p>
          <button onClick={scrollToConnect} className="swc-button">
            Let's Talk
          </button>
        </div>
      </div>
    </section>
  );
};

export default StartWithClarity;
