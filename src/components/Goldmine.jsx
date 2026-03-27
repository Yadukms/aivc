import React from 'react';
import './Goldmine.css';

const Goldmine = () => {
  const Chevron = ({ text, isFirst }) => (
    <div className="process-chevron-container">
      <svg width="240" height="80" viewBox="0 0 240 80" preserveAspectRatio="none" className="process-chevron-svg">
        {/* Shadow/Cutout on the left */}
        <path d="M0 0L30 40L0 80H30L60 40L30 0H0Z" fill="#165159" />

        {/* Main Chevron Body */}
        <path
          d="M30 0H210L240 40L210 80H30L60 40L30 0Z"
          fill="url(#chevron-grad)"
        />

        <defs>
          <linearGradient id="chevron-grad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#26A3AF" />
            <stop offset="100%" stopColor="#1E7B8B" />
          </linearGradient>
        </defs>
      </svg>

      {/* Decoupled Translucent Overlay SVG */}
      <svg width="248" height="48" viewBox="0 0 248 48" className="chevron-overlay-svg">
        <path
          d="M247.865 47.8855H38.4159L0 0H209.353L247.865 47.8855Z"
          fill="#3CCED7"
          fillOpacity="0.38"
        />
      </svg>
      <span className="chevron-text">{text}</span>
    </div>
  );

  const ArrowDown = () => (
    <svg width="60" height="40" viewBox="0 0 60 40" fill="none" className="arrow-down-svg">
      <path d="M22 0H38V20H55L30 40L5 20H22V0Z" fill="#009797" />
    </svg>
  );

  return (
    <section className="goldmine">
      <div className="goldmine-wrapper">
        <h2 className="goldmine-title-centered">We Build AI Product Businesses From Proprietary IP</h2>

        <div className="goldmine-process">
          <div className="process-column">
            <svg width="233" height="7" viewBox="0 0 233 7" fill="none" className="chevron-top-svg">
              <path d="M0 0H227.248L232.189 6.54883H5.8364L0 0Z" fill="#009999" />
            </svg>
            <Chevron text="From" isFirst={false} />
            <div className="process-box">
              <span>Identify & Architect</span>
            </div>
            <ArrowDown />
            <p className="process-text">AI Product Blueprint &<br />Interactive Demo</p>
          </div>

          <div className="process-column">
            <svg width="233" height="7" viewBox="0 0 233 7" fill="none" className="chevron-top-svg">
              <path d="M0 0H227.248L232.189 6.54883H5.8364L0 0Z" fill="#009999" />
            </svg>
            <Chevron text="To" isFirst={false} />
            <div className="process-box">
              <span>Build & Launch</span>
            </div>
            <ArrowDown />
            <p className="process-text">AI Product Rollout</p>
          </div>

          <div className="process-column">
            <svg width="233" height="7" viewBox="0 0 233 7" fill="none" className="chevron-top-svg">
              <path d="M0 0H227.248L232.189 6.54883H5.8364L0 0Z" fill="#009999" />
            </svg>
            <Chevron text="To" isFirst={false} />
            <div className="process-box">
              <span>Commercialize & Scale</span>
            </div>
            <ArrowDown />
            <p className="process-text">Recurring Revenue</p>
          </div>
        </div>

        <div className="goldmine-footer-content">
          <p className="footer-main">We Fund & Share Risk Revenue Model. No Dilution</p>
          <p className="footer-accent-italic">Our Incentives Are Tied To Performance - Not Fees</p>
          <p className="footer-text">We Don't Succeed Unless You Do</p>

          <div className="footer-why-section">
            <h3 className="footer-why-title">Our Why</h3>
            <p className="footer-why-italic">
              IP - Rich Services Firms Are Sitting On AI Product <br />
              Business They Haven't Built Yet. We Exist To Change That
            </p>
          </div>
        </div>
      </div>

      <div className="goldmine-vector">
        <svg width="365" height="286" viewBox="0 0 365 286" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M365 0V286H67.5L365 0Z" fill="#ffffff" />
          <path d="M0 286L57 206L67.5 286H0Z" fill="#214950" />
          <path d="M365 0L67.5 286L57 206L365 0Z" fill="#09888E" />
        </svg>
      </div>
    </section>
  );
};

export default Goldmine;
