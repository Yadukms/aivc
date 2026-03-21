import React from 'react';
import './Goldmine.css';

const Goldmine = () => {
  const ArrowIcon = () => (
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="17" cy="17" r="16" stroke="#09888E" strokeWidth="1.5" />
      <path d="M14 11L20 17L14 23" stroke="#09888E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  return (
    <section className="goldmine">
      <div className="goldmine-wrapper">
        <div className="goldmine-container">
          <h2 className="goldmine-title">You're Sitting On A Goldmine,</h2>

          <div className="goldmine-grid">
            <div className="goldmine-column">
              <div className="goldmine-item">
                <div className="goldmine-icon"><ArrowIcon /></div>
                <p>It's structured intelligence</p>
              </div>
              <div className="goldmine-item">
                <div className="goldmine-icon"><ArrowIcon /></div>
                <p>It's proprietary insight refined over years.</p>
              </div>
              <div className="goldmine-item">
                <div className="goldmine-icon"><ArrowIcon /></div>
                <p>It's deep knowledge of how your clients operate and make critical decisions</p>
              </div>
            </div>

            <div className="goldmine-column">
              <div className="goldmine-item">
                <div className="goldmine-icon"><ArrowIcon /></div>
                <p>Most services firms monetize that intelligence through labor</p>
              </div>
              <div className="goldmine-item">
                <div className="goldmine-icon"><ArrowIcon /></div>
                <p>A small number are beginning to productize it into recurring revenue streams</p>
              </div>
              <div className="goldmine-item">
                <div className="goldmine-icon"><ArrowIcon /></div>
                <p>Six months from now, the firms that acted will be shipping product.</p>
              </div>
            </div>
          </div>

          <p className="goldmine-footer">The ones that waited will still be planning........</p>
        </div>
      </div>

      <div className="goldmine-vector">
        <svg width="365" height="286" viewBox="0 0 365 286" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Background fill for corner space */}
          <path d="M365 0V286H67.5L365 0Z" fill="#0f2a2d" />
          {/* Small dark triangle */}
          <path d="M0 286L57 206L67.5 286H0Z" fill="#214950" />
          {/* Large teal triangle */}
          <path d="M365 0L67.5 286L57 206L365 0Z" fill="#09888E" />
        </svg>
      </div>
    </section>
  );
};

export default Goldmine;
