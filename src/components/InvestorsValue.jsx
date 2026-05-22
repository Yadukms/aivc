import React from 'react';
import './InvestorsValue.css';

const InvestorsValue = () => {
  const items = [
    "Proprietary IP and Frameworks",
    "Industry-specific benchmarks",
    "Client-specific data"
  ];

  return (
    <section className="investors-value">
      <div className="investors-value-container">
        <div className="investors-value-left">
          <h2 className="investors-value-title">Your Portfolio Is Sitting<br/>on <span className="inv-value-highlight">Unrealized AI<br/>Revenue.</span></h2>
          <div className="investors-value-left-content">
            <p className="investors-value-text">
              The B2B services companies in your portfolio have spent years building extraordinarily valuable IP. With the right architecture, it becomes recurring AI product revenue and a fundamentally stronger exit.
            </p>
          </div>
        </div>

        <div className="investors-value-right">
          <p className="investors-value-desc">
            PE-backed professional and B2B services firms are sitting on structured, defensible intelligence:
          </p>
          <div className="investors-value-list">
            {items.map((item, index) => (
              <div key={index} className="investors-value-item">
                <span className="investors-value-icon">
                  <img src="/investoricon.png" alt="check" width="24" height="24" />
                </span>
                <span className="investors-value-item-text">{item}</span>
              </div>
            ))}
          </div>
          <p className="investors-value-accent">
            The opportunity is real. The execution gap is where most portfolio companies stall. We close that gap.
          </p>
        </div>
      </div>
    </section>
  );
};

export default InvestorsValue;
