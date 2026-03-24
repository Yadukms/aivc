import React from 'react';
import './WhatWeDoHow.css';

const WhatWeDoHow = () => {
  return (
    <section className="wwd-how">
      <div className="wwd-how-bg-right"></div>
      <div className="wwd-how-bg-bottom"></div>
      <div className="wwd-how-bg-triangle"></div>

      <div className="wwd-how-container">
        <div className="wwd-how-left">
          <h2 className="wwd-how-title">How We Do It</h2>
        </div>
        <div className="wwd-how-right">
          <p className="wwd-how-text">
            We operate as collaborative venture partners. We build AI product businesses from your proprietary IP, fund development, and drive commercialization until the business stands on its own.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoHow;
