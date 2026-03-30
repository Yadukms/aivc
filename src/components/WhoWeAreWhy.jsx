import React from 'react';
import './WhoWeAreWhy.css';

const WhoWeAreWhy = () => {
  return (
    <section className="wwa-why">
      <div className="wwa-why-container">
        <div className="wwa-why-left">
          <h2 className="wwa-why-title">Why We Exist</h2>
          <p className="wwa-why-left-text">
            Exceptional firms often sit on extraordinary intellectual capital.
          </p>
        </div>
        
        <div className="wwa-why-right">
          <p className="wwa-why-description">
            AI Venture Catalyst exists to help IP-rich services firms convert 
            what they already know into scalable product businesses that 
            generate recurring revenue and lasting enterprise value.
          </p>
          
          <div className="wwa-why-list">
            <div className="wwa-why-item">
              <span className="wwa-why-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 8 16 12 12 16"></polyline>
                  <line x1="8" y1="12" x2="16" y2="12"></line>
                </svg>
              </span>
              <span className="wwa-why-text">Structured | Decision | Frameworks</span>
            </div>
            
            <div className="wwa-why-item">
              <span className="wwa-why-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 8 16 12 12 16"></polyline>
                  <line x1="8" y1="12" x2="16" y2="12"></line>
                </svg>
              </span>
              <span className="wwa-why-text">But rarely productized</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreWhy;
