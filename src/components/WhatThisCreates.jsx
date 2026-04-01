import React from 'react';
import './WhatThisCreates.css';

const WhatThisCreates = () => {
  const stakeholderGroups = [
    {
      title: "For Investors",
      items: [
        "Faster AI revenue realization",
        "Reduced product execution risk",
        "Recurring, defensible revenue streams",
        "Optional carve-out pathways",
        "Premium growth positioning"
      ]
    },
    {
      title: "For Portfolio Companies",
      items: [
        "Non-dilutive AI expansion",
        "Preserved ownership",
        "Venture-grade product capability"
      ]
    },
    {
      title: "For AIVC",
      items: [
        "Shared upside tied to real results"
      ]
    }
  ];

  return (
    <section className="what-creates">
      <div className="what-creates-bg">
        <div className="what-creates-bg-left">
          <img src="/c7.png" alt="What This Creates background" className="what-creates-img" />
        </div>
        <div className="what-creates-bg-right"></div>
      </div>
      
      <div className="what-creates-container">
        <div className="what-creates-box">
          <div className="what-creates-header">
            <h2 className="what-creates-title">What This Creates</h2>
            <p className="what-creates-subtitle">Alignment is intentional.</p>
          </div>
          
          <div className="what-creates-groups">
            <div className="what-creates-column">
              <div className="what-creates-group">
                <h3 className="what-creates-group-title">{stakeholderGroups[0].title}</h3>
                <ul className="what-creates-list">
                  {stakeholderGroups[0].items.map((item, idx) => (
                    <li key={idx} className="what-creates-item">
                      <span className="what-creates-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="12" cy="12" r="11" stroke="#00D1D1" strokeWidth="2"/>
                          <path d="M11 8L15 12L11 16" stroke="#00D1D1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                      <span className="what-creates-item-text">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="what-creates-column">
              <div className="what-creates-group">
                <h3 className="what-creates-group-title">{stakeholderGroups[1].title}</h3>
                <ul className="what-creates-list">
                  {stakeholderGroups[1].items.map((item, idx) => (
                    <li key={idx} className="what-creates-item">
                      <span className="what-creates-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="12" cy="12" r="11" stroke="#00D1D1" strokeWidth="2"/>
                          <path d="M11 8L15 12L11 16" stroke="#00D1D1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                      <span className="what-creates-item-text">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="what-creates-group" style={{ marginTop: '60px' }}>
                <h3 className="what-creates-group-title">{stakeholderGroups[2].title}</h3>
                <ul className="what-creates-list">
                  {stakeholderGroups[2].items.map((item, idx) => (
                    <li key={idx} className="what-creates-item">
                      <span className="what-creates-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="12" cy="12" r="11" stroke="#00D1D1" strokeWidth="2"/>
                          <path d="M11 8L15 12L11 16" stroke="#00D1D1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                      <span className="what-creates-item-text">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatThisCreates;
