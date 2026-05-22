import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './IPReady.css';

const IPReady = () => {
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
    <section className="ip-ready">
      <div className="ip-ready-bg">
        <img src="/y1.png" alt="Background" className="ip-ready-base-img" />
        <svg className="ip-ready-overlay-svg" xmlns="http://www.w3.org/2000/svg" width="1379" height="857" viewBox="0 0 1379 857" fill="none">
          <path d="M-4.88281 0L1378.51 8.46386e-05L1019.38 856.614H-4.88281V0Z" fill="#001116" fill-opacity="0.78"/>
        </svg>
      </div>

      <div className="ip-ready-container">
        <div className="ip-ready-content">
          <h2 className="ip-ready-title">
            Which of Your Portfolio<br />
            Companies Are Sitting on<br />
            Unrealized AI Revenue?
          </h2>
          <p className="ip-ready-text">
            We'll assess your B2B services holdings against our IP<br />
            evaluation framework — identifying which portfolio companies<br />
            have the specialized knowledge, workflows, and data to<br />
            generate recurring AI product revenue.
          </p>
          <p className="ip-ready-subtext">
            No pitch. Just a clear picture of where the value creation<br />
            opportunity exists across your portfolio.
          </p>
          <button className="ip-ready-btn" id="schedule-btn" onClick={scrollToConnect}>
            Let's Schedule a Call
          </button>
        </div>
      </div>
    </section>
  );
};

export default IPReady;
