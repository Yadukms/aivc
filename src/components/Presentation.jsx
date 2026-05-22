import React from 'react';
import './Presentation.css';

const Presentation = () => {
  const benefits = [
    { text: ["Revenue expands", "beyond headcount."] },
    { text: ["Enterprise", "relationships deepen."] },
    { text: ["Growth narratives", "shift."] }
  ];

  return (
    <section className="presentation-section">
      {/* Background Image Section */}
      <div className="presentation-bg">
        <img src="/presentation2.png" alt="What Becomes Possible" className="presentation-bg-image" />
      </div>

      {/* Overlay Gradient */}
      <div className="presentation-overlay-gradient"></div>

      {/* Title Content */}
      <div className="presentation-content">
        <span className="presentation-label">AI VENTURE CATALYST</span>
        <h2 className="presentation-title">What Becomes Possible</h2>
      </div>

      {/* Benefits Grid Section */}
      <div className="presentation-benefits">
        <div className="presentation-ellipse"></div>
        <div className="presentation-benefits-container">
          <p className="presentation-benefits-intro">
            When your intelligence becomes a scalable product business:
          </p>
          
          <div className="presentation-benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="presentation-benefit-column">
                <div className="presentation-benefit-icon">
                  <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20" cy="20" r="16" stroke="#00D1D4" strokeWidth="2" />
                    <path d="M14 20L18 24L26 16" stroke="#00D1D4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <p className="presentation-benefit-text">
                  <span style={{ whiteSpace: 'nowrap' }}>{benefit.text[0]}</span>
                  <br />
                  <span style={{ whiteSpace: 'nowrap' }}>{benefit.text[1]}</span>
                </p>
                <div className="presentation-benefit-divider"></div>
              </div>
            ))}
          </div>

          <p className="presentation-benefits-outro">
            Not because you hired advisors. Because you built something <span className="presentation-teal">fundamentally different.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Presentation;
