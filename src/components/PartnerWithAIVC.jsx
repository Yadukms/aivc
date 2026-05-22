import React from 'react';
import './PartnerWithAIVC.css';

const PartnerWithAIVC = () => {
  const provides = [
    "Operator-led AI venture formation",
    "Enterprise-aware commercialization",
    "Risk-aligned revenue participation",
    "Reduced execution burden on fund teams",
    "Structured optionality for future capital or exit"
  ];

  return (
    <section className="partner-aivc">
      <div className="partner-container">
        <div className="partner-left">
          <h2 className="partner-title">Why Venture Investors Partner With AIVC</h2>
          <p className="partner-subtitle">Your AI thesis becomes tangible, measurable revenue.</p>
        </div>
        
        <div className="partner-right">
          <h3 className="partner-list-title">We Provide:</h3>
          <ul className="partner-list">
            {provides.map((item, index) => (
              <li key={index} className="partner-item">
                <span className="partner-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="11" stroke="#00D1D1" strokeWidth="2"/>
                    <path d="M11 8L15 12L11 16" stroke="#00D1D1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <span className="partner-item-text">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PartnerWithAIVC;
