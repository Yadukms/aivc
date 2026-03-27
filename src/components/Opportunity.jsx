import React from 'react';
import './Opportunity.css';

const Opportunity = () => {
  const bullets = [
    "Inside your firm is more than expertise. Its structed intelligence",
    "Most services firm monetize that intelligence through labor",
    "A small number are beginning to productize it in to recurring revenue streams",
    "Its proprietary insights refined over years",
    "Its deep knowledge of how your clients operate and make critical decision",
    "In as little as one month, the firm that acted will be engaging customers in the sale of their new AI product. The ones that wait become more susceptible to AI competitors"
  ];

  const BulletIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="bullet-icon">
      <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="1.5" />
      <path d="M10 8L14 12L10 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  return (
    <section className="opportunity">
      <div className="opportunity-bg-slants">
        <img src="/Rectangle%2058.png" alt="" className="slant-image-bg" />
        <img src="/Rectangle%2058.png" alt="" className="slant-image-bg2" />
      </div>

      <div className="opportunity-wrapper">
        <div className="opportunity-header">
          <h2 className="opportunity-title">You're Sitting On A Goldmine,</h2>
          <p className="opportunity-subtitle">
            Is your firm sitting on a hidden goldmine of untapped AI product potential
          </p>
        </div>

        <div className="opportunity-content">
          <div className="opportunity-image-container">
            <img
              src="/Rectangle%203.png"
              alt="Hand holding gold Ai nuggets"
              className="opportunity-image"
            />
          </div>

          <div className="opportunity-top-rect"></div>
          <div className="opportunity-teal-box">
            <h3 className="teal-box-title">The Opportunity</h3>
            <ul className="opportunity-bullets">
              {bullets.map((text, index) => (
                <li key={index} className="opportunity-bullet-item">
                  <div className="icon-wrapper">
                    <BulletIcon />
                  </div>
                  <span className="bullet-text">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Opportunity;
