import React from 'react';
import './Opportunity.css';

const Opportunity = () => {
  const bullets = [
    "Inside your firm is more than expertise. Its structed intelligence",
    "Most services firm monetize that intelligence through labor",
    "A small number are beginning to productize it in to recurring revenue streams",
    "Its proprietary insights refined over years",
    "Its deep knowledge of how your clients operate and make critical decision",
    [
      "In as little as one month, the firm that acted will be engaging customers in the sale of their new AI product.",
      "The ones that wait become more susceptible to AI competitors"
    ]
  ];

  const BulletIcon = () => (
    <div className="bullet-icon-container">
      <img src="/icon1.png" alt="icon" className="bullet-icon-image" />
    </div>
  );

  return (
    <section className="opportunity-section">
      <div className="opportunity-header-top">
        <h2 className="opportunity-main-title">You're Sitting On A Goldmine</h2>
        <p className="opportunity-top-subtitle">
          Is your firm sitting on a hidden goldmine of untapped AI product potential
        </p>
      </div>

      <div className="opportunity-layout-grid">
        <div className="opportunity-image-column">
          <img
            src="/newimg7.png"
            alt="AI Gold Opportunity"
            className="opportunity-main-image"
          />
        </div>

        <div className="opportunity-text-column">
          <div className="opportunity-content-wrapper">
            <h3 className="opportunity-section-title">The Opportunity</h3>
            <ul className="opportunity-list">
              {bullets.map((content, index) => (
                <li key={index} className="opportunity-item">
                  <div className="opportunity-icon-box">
                    <BulletIcon />
                  </div>
                  <div className="opportunity-text-box">
                    {Array.isArray(content) ? (
                      content.map((p, i) => (
                        <p key={i} className={i > 0 ? "mt-4" : ""}>{p}</p>
                      ))
                    ) : (
                      <p>{content}</p>
                    )}
                  </div>
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
