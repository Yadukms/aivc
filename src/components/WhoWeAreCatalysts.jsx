import React from 'react';
import './WhoWeAreCatalysts.css';

const WhoWeAreCatalysts = () => {
  return (
    <section className="wwa-catalysts">
      <div className="wwa-catalysts-header">
        <div className="wwa-catalysts-header-container">
          <div className="wwa-catalysts-header-left">
            <h2 className="wwa-catalysts-title">We Are Your Catalysts</h2>
            <p className="wwa-catalysts-subtitle">That is what we do.</p>
          </div>
          <div className="wwa-catalysts-header-right">
            <p className="wwa-catalysts-intro">
              In this era of transformation, services firms don't need advisors.
              <span className="wwa-accent-text"> They need catalysts.</span>
            </p>
          </div>
        </div>
      </div>

      <div className="wwa-catalysts-image-section">
        <div className="wwa-catalysts-image-container">
          <img src="/b2.png" alt="Catalyst Visualization" className="wwa-catalysts-image" />
          <div className="wwa-catalysts-svg-overlay">
            <svg xmlns="http://www.w3.org/2000/svg" width="408" height="297" viewBox="0 0 408 297" fill="none" className="wwa-catalysts-slant-svg">
              <path d="M407.21 335.815L406.282 0L0 335.815H407.21Z" fill="#063F45" />
            </svg>
            <div className="wwa-catalysts-teal-overlay">
              <div className="wwa-catalysts-overlay-content">
                <p>Catalysts who generate real change.</p>
                <p>Who convert expertise into scalable product businesses.</p>
                <p>Who elevate strong companies into category-defining ones.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreCatalysts;
