import React from 'react';
import './WhoWeAreClarity.css';

const WhoWeAreClarity = () => {
  return (
    <section className="wwa-clarity">
      <div className="wwa-clarity-container">
        <div className="wwa-clarity-image-side">
          <img src="/b10.png" alt="Team meeting" className="wwa-clarity-img" />
        </div>
        
        <div className="wwa-clarity-content-side">
          <div className="wwa-clarity-content">
            <h2 className="wwa-clarity-title">Start With Clarity</h2>
            <div className="wwa-clarity-text">
              <p className="wwa-clarity-desc">
                Is your intelligence venture-grade? 
                Schedule a 30-minute AI Venture Assessment.
              </p>
              <p className="wwa-clarity-pitch">No pitch. Just clarity.</p>
            </div>
            
            <button className="wwa-clarity-btn">
              Start the Conversation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreClarity;
