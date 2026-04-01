import React from 'react';
import './IPReady.css';

const IPReady = () => {
  return (
    <section className="ip-ready">
      <div className="ip-ready-bg">
        <img src="/c8.png" alt="Background" className="ip-ready-base-img" />
        <img src="/c9.png" alt="Overlay Shape" className="ip-ready-vector-shape" />
      </div>

      <div className="ip-ready-container">
        <div className="ip-ready-content">
          <h2 className="ip-ready-title">
            Is Your IP Ready to Become an <br />
            AI Business?
          </h2>
          <p className="ip-ready-text">
            Which portfolio companies are sitting on venture-grade IP? <br />
            Schedule a 30-minute AI Venture Assessment. <br />
            No pitch. Just clarity on where AI venture formation makes <br />
            strategic and financial sense.
          </p>
          <button className="ip-ready-btn" id="schedule-btn">
            Schedule the Conversation
          </button>
        </div>
      </div>
    </section>
  );
};

export default IPReady;
