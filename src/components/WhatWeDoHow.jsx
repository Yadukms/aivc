import React from 'react';
import './WhatWeDoHow.css';

const WhatWeDoHow = () => {
  return (
    <section className="wwd-how">
      <div className="wwd-how-main-section">
        <div className="wwd-how-container">
          <div className="wwd-how-left">
            <h2 className="wwd-how-title">How We Do It</h2>
          </div>
          <div className="wwd-how-right">
            <p className="wwd-how-text">
              We operate as <span className="teal-text">collaborative venture partners.</span> We build AI product businesses from your proprietary IP, fund development, and drive commercialization.
            </p>
          </div>
        </div>
      </div>

      <div className="wwd-how-bottom-bar">
        <div className="wwd-how-bottom-container">
          <div className="wwd-how-bottom-items">
            <span className="wwd-bottom-item">NO DILUTION</span>
            <span className="wwd-bottom-arrow">&gt;</span>
            <span className="wwd-bottom-item">NO THEORETICAL ROADMAPS</span>
            <span className="wwd-bottom-arrow">&gt;</span>
            <span className="wwd-bottom-item">THREE PHASES FROM IP TO REVENUE</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoHow;
