import React from 'react';
import './WhoWeAreWhyMatters.css';

const WhoWeAreWhyMatters = () => {
  return (
    <section className="wwa-why-matters">
      {/* Background shape for the right content side */}
      <div className="wwa-why-matters-z2-container">
        <img src="/z2.png" alt="" className="wwa-z2" />
      </div>

      <div className="wwa-why-matters-container">
        <div className="wwa-why-matters-left">
          <h2 className="wwa-why-matters-title">Why This Matters</h2>
          <p className="wwa-why-matters-subtext">
            And the kind of company you become is shaped by how you build it.
          </p>
        </div>

        <div className="wwa-why-matters-right">
          <div className="wwa-why-matters-content">
            <p className="wwa-why-matters-para">
              We believe companies can grow, scale, and increase valuation while 
              improving lives, elevating teams, and contributing meaningfully to the 
              markets they serve
            </p>
            <p className="wwa-why-matters-quote">
              Doing good and doing well are not in conflict. They reinforce each other
            </p>
            
            <div className="wwa-why-matters-list">
              <div className="wwa-why-matters-item">
                <span className="wwa-why-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="11" stroke="#09888E" strokeWidth="2"/>
                    <path d="M10 8L14 12L10 16" stroke="#09888E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <span className="wwa-why-text">Transformation without values creates volatility.</span>
              </div>
              <div className="wwa-why-matters-item">
                <span className="wwa-why-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="11" stroke="#09888E" strokeWidth="2"/>
                    <path d="M10 8L14 12L10 16" stroke="#09888E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <span className="wwa-why-text">Transformation grounded in purpose creates progress.</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Vector shape at the bottom */}
      <img src="/z1.png" alt="" className="wwa-z1" />
    </section>
  );
};

export default WhoWeAreWhyMatters;
