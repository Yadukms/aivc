import React from 'react';
import './StartWithClarity.css';

const StartWithClarity = () => {
  return (
    <section className="start-with-clarity" id="start-with-clarity">
      <div className="swc-container">
        <div className="swc-content-wrapper">
          <div className="swc-text-box">
            <div className="swc-content">
              <h2 className="swc-title">Start With Clarity</h2>
              <p className="swc-subtitle">
                Is the intelligence inside your firm venture-grade? Schedule a
                30-minute AI Venture Assessment. No pitch. Just clarity.
              </p>
              <a href="#" className="swc-button">
                Schedule a 30-Minute AI Value Creation Consultation
              </a>
            </div>
          </div>
          
          <div className="swc-image-box">
            {/* Background image handled in CSS for better control */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartWithClarity;
