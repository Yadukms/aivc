import React from 'react';
import './Opportunity.css';

const Opportunity = () => {
  const bullets = [
    "Your IP already earns trust. AI makes it earn revenue.",
    "Labor scales with headcount. AI products scale with demand.",
    "Your best clients already depend on this intelligence. They'll pay to access it directly.",
    "The firms that productize their expertise now will define the category. The ones that wait will follow it."
  ];

  const BulletIcon = () => (
    <div className="bullet-icon-container">
      <img src="/oppurtunity arrow.png" alt="Gold nugget" className="bullet-icon-image" />
    </div>
  );

  return (
    <section className="opportunity-section">

      <div className="opportunity-layout-grid">
        <div className="opportunity-image-column">
          <img
            src="/oppurtunity image.png"
            alt="AI Gold Opportunity"
            className="opportunity-main-image"
          />
        </div>

        <div className="opportunity-text-column">
          <div className="opportunity-content-wrapper">
            <h2 className="opportunity-top-title">You're Sitting On A Goldmine</h2>
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
