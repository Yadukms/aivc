import React from 'react';
import './WhyModel.css';

const WhyModel = () => {
  const benefits = [
    { text: ["Revenue expands", "beyond headcount."] },
    { text: ["Enterprise", "relationships deepen."] },
    { text: ["Growth narratives", "shift."] }
  ];

  return (
    <section className="whymodel-section">
      <div className="whymodel-ellipse"></div>
      <div className="whymodel-container">
        <h2 className="whymodel-intro">
          When your intelligence becomes a scalable product business:
        </h2>
        
        <div className="whymodel-grid">
          {benefits.map((benefit, index) => (
            <div key={index} className="whymodel-column">
              <div className="whymodel-icon">
                <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="20" cy="20" r="16" stroke="#00D1D4" strokeWidth="2" />
                  <path d="M14 20L18 24L26 16" stroke="#00D1D4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <p className="whymodel-benefit-text">
                <span style={{ whiteSpace: 'nowrap' }}>{benefit.text[0]}</span>
                <br />
                <span style={{ whiteSpace: 'nowrap' }}>{benefit.text[1]}</span>
              </p>
              <div className="whymodel-divider"></div>
            </div>
          ))}
        </div>

        <p className="whymodel-outro">
          Not because you hired advisors. Because you built something <span className="whymodel-teal">fundamentally different.</span>
        </p>
      </div>
    </section>
  );
};

export default WhyModel;
