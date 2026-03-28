import React from 'react';
import './AIBusinessBuildingReady.css';

const AIBusinessBuildingReady = () => {
  return (
    <section className="aib-ready">
      <div className="aib-ready-bg">
        <img src="/a8.png" alt="Ready Background" className="aib-ready-bg-img" />
      </div>
      
      <div className="aib-ready-container">
        <div className="aib-ready-card">
          {/* Overlapping dark teal card */}
          <div className="aib-ready-card-content">
            <h2 className="aib-ready-title">Is Your IP Ready?</h2>
            <p className="aib-ready-text">
              Most IP never becomes product. Yours doesn't have to be one of them.
              <br />
              No pitch. Just clarity.
            </p>
            <button className="aib-ready-btn">
              Schedule a 30-Minute AI Value Creation Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIBusinessBuildingReady;
