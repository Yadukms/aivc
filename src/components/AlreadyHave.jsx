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
      <div className="already-have-container">
        <h2 className="already-have-title">What You Already Have</h2>

        <div className="already-have-grid">
          {/* Top Block */}
          <div className="already-have-block">
            <div className="already-have-left">
              <p className="highlight-text">If your firm serves sophisticated enterprise clients, you likely possess:</p>
              <div className="divider-small"></div>
            </div>
            <div className="already-have-right">
              <div className="already-have-item">
                <div className="already-have-icon"><ArrowIcon /></div>
                <p>Structured decision frameworks</p>
              </div>
              <div className="already-have-item">
                <div className="already-have-icon"><ArrowIcon /></div>
                <p>Deep operational knowledge of how your clients function</p>
              </div>
              <div className="already-have-item">
                <div className="already-have-icon"><ArrowIcon /></div>
                <p>Proprietary data and accumulated insight</p>
              </div>
              <div className="already-have-item">
                <div className="already-have-icon"><ArrowIcon /></div>
                <p>Repeatable expertise that drives measurable outcomes</p>
              </div>
              <div className="divider-large"></div>
            </div>
          </div>

          {/* Bottom Block */}
          <div className="already-have-block">
            <div className="already-have-left">
              <p className="highlight-text">That intelligence does not need to remain embedded in services delivery. It can become:</p>
              <div className="divider-small"></div>
            </div>
            <div className="already-have-right">
              <div className="already-have-item">
                <div className="already-have-icon"><ArrowIcon /></div>
                <p>A standalone product business</p>
              </div>
              <div className="already-have-item">
                <div className="already-have-icon"><ArrowIcon /></div>
                <p>Generating annual recurring revenue</p>
              </div>
              <div className="already-have-item">
                <div className="already-have-icon"><ArrowIcon /></div>
                <p>Built for scalable enterprise economics</p>
              </div>
              <div className="already-have-item">
                <div className="already-have-icon"><ArrowIcon /></div>
                <p>The opportunity is already inside your firm.</p>
              </div>
              <div className="divider-large"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AlreadyHave;
