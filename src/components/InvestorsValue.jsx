import React from 'react';
import './InvestorsValue.css';

const InvestorsValue = () => {
  const items = [
    "Embedded enterprise workflows",
    "Proprietary decision logic",
    "Industry-specific datasets",
    "Repeatable operational systems"
  ];

  return (
    <section className="investors-value">
      <div className="investors-value-container">
        <div className="investors-value-left">
          <h2 className="investors-value-title">The Untapped Value Inside Services Firms</h2>
          <div className="investors-value-left-content">
            <p className="investors-value-text">
              It drives services revenue today. With the right architecture, it becomes recurring AI product revenue.
            </p>
            <p className="investors-value-accent">
              The opportunity is real. The execution gap is where most firms stall. We close that gap.
            </p>
          </div>
        </div>

        <div className="investors-value-right">
          <p className="investors-value-desc">
            Many venture-backed and growth-stage services firms are sitting on structured, defensible intelligence
          </p>
          <div className="investors-value-list">
            {items.map((item, index) => (
              <div key={index} className="investors-value-item">
                <span className="investors-value-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00d1d1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 8 16 12 12 16"></polyline>
                    <line x1="8" y1="12" x2="16" y2="12"></line>
                  </svg>
                </span>
                <span className="investors-value-item-text">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestorsValue;
