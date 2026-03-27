import React from 'react';
import './WhyModel.css';

const WhyModel = () => {
  const models = [
    {
      icon: <img src="/i1.png" alt="Revenue Icon" className="whymodel-icon-img" />,
      text: "Revenue expands beyond headcount"
    },
    {
      icon: <img src="/i2.png" alt="Relationship Icon" className="whymodel-icon-img" />,
      text: "Enterprise relationships deepen"
    },
    {
      icon: <img src="/i3.png" alt="Optionality Icon" className="whymodel-icon-img" />,
      text: "Optionality increases"
    },
    {
      icon: <img src="/i4.png" alt="Growth Icon" className="whymodel-icon-img" />,
      text: "Growth narratives shift."
    }
  ];

  return (
    <section className="whymodel-section">
      <div className="whymodel-container">
        <div className="whymodel-header">
          <h2 className="whymodel-title">Why We Built This Model</h2>
          <p className="whymodel-subtitle">
            Not because you hired advisors. Because you built something fundamentally different
          </p>
        </div>
        
        <div className="whymodel-grid">
          {models.map((item, index) => (
            <div key={index} className="whymodel-item">
              <div className="whymodel-icon">
                {item.icon}
              </div>
              <span className="whymodel-text">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyModel;
