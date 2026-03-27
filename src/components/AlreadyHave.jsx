import React from 'react';
import './AlreadyHave.css';

const AlreadyHave = () => {
  const ArrowIcon = () => (
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="17" cy="17" r="16" stroke="#ffffff" strokeWidth="1.5" />
      <path d="M14 11L20 17L14 23" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  return (
    <section className="already-have">
      <div className="already-have-wrapper">
        <div className="already-content-left">
          <div className="already-header-group">
            <h3 className="already-header-cyan">
              If your firm serves sophisticated enterprise clients, you likely possess:
            </h3>
            <ul className="already-list">
              <li className="already-list-item">
                <div className="already-icon-wrapper"><ArrowIcon /></div>
                <span>Structured decision frameworks</span>
              </li>
              <li className="already-list-item">
                <div className="already-icon-wrapper"><ArrowIcon /></div>
                <span>Deep operational knowledge of how your clients function</span>
              </li>
              <li className="already-list-item">
                <div className="already-icon-wrapper"><ArrowIcon /></div>
                <span>Proprietary data and accumulated insight</span>
              </li>
              <li className="already-list-item">
                <div className="already-icon-wrapper"><ArrowIcon /></div>
                <span>Repeatable expertise that drives measurable outcomes</span>
              </li>
            </ul>
          </div>

          <div className="already-header-group">
            <h3 className="already-header-cyan">
              That intelligence does not need to remain embedded in services delivery. It can become:
            </h3>
            <ul className="already-list">
              <li className="already-list-item">
                <div className="already-icon-wrapper"><ArrowIcon /></div>
                <span>AI Products</span>
              </li>
              <li className="already-list-item">
                <div className="already-icon-wrapper"><ArrowIcon /></div>
                <span>Generating annual recurring revenue</span>
              </li>
              <li className="already-list-item">
                <div className="already-icon-wrapper"><ArrowIcon /></div>
                <span>Built for scalable enterprise economics</span>
              </li>
              <li className="already-list-item">
                <div className="already-icon-wrapper"><ArrowIcon /></div>
                <span>The opportunity is already inside your firm.</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="already-graphic-right">
          <div className="already-slant-bg"></div>
          <div className="hud-container">
            <img src="/newimg5.png" alt="HUD Graphic" className="hud-graphic" />
            <div className="hud-center-ellipse">
              <div className="hud-inner-glow"></div>
              <img src="/Ellipse 11.png" alt="Center Ellipse" className="ellipse-img" />
              <div className="hud-text-overlay">
                <span>Monetize Your Untapped IP</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AlreadyHave;
