import React from 'react';
import './AIBusinessBuildingPartner.css';

const AIBusinessBuildingPartner = () => {
  const items = [
    "Firms serving Fortune and Global 2000 clients.",
    "Firms with repeatable intelligence embedded in delivery",
    "Firms ready to build product revenue without surrendering equity."
  ];

  return (
    <section className="aib-partner">
      <div className="aib-partner-top">
        <h2 className="aib-partner-title">Who We Partner With</h2>
        <p className="aib-partner-desc">
          IP-dense, enterprise-embedded services firms, typically in risk and
          compliance, IT and data services, healthcare, legal operations, and
          insight-driven marketing, where structured expertise already influences
          enterprise decisions at scale
        </p>
      </div>

      <div className="aib-partner-main">
        <div className="aib-partner-teal-bg">
          <div className="aib-partner-content">
            <div className="aib-partner-items">
              {items.map((item, index) => (
                <div key={index} className="aib-partner-item">
                  <div className="aib-partner-icon">
                    <img src="/i10.png" alt="Check" className="aib-partner-check-img" />
                  </div>
                  <p className="aib-partner-item-text">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="aib-partner-visual">
            <div className="aib-partner-img-container">
              <img src="/a4.png" alt="Partnership" className="aib-partner-img" />
            </div>
            <div className="aib-partner-stripe aib-partner-stripe-1"></div>
            <div className="aib-partner-stripe aib-partner-stripe-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIBusinessBuildingPartner;
