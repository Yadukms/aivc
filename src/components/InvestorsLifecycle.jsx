import React, { useState } from 'react';
import './InvestorsLifecycle.css';

const lifecycleData = [
  {
    id: 'post-investment',
    title: 'Post-Investment AI Expansion',
    text: 'The investment thesis includes AI leverage but product execution capacity is limited.',
    listItems: [
      'Identify venture-grade IP',
      'Architect the AI product thesis',
      'Build enterprise-ready AI products',
      'Commercialize into recurring revenue'
    ],
    outcome: 'AI becomes operational revenue — not a slide in the board deck..'
  },
  {
    id: 'venture-formation',
    title: 'AI Venture Formation & Spinout Strategy',
    text: 'Forming new AI ventures or spinning out internal technology assets.',
    listItems: [
      'Market opportunity analysis',
      'Strategic roadmap definition',
      'Technology & product development',
      'Investment & spinout support'
    ],
    outcome: 'Successful spinout of high-value AI ventures.'
  },
  {
    id: 'revenue-acceleration',
    title: 'Enterprise Revenue Acceleration',
    text: 'Accelerating revenue growth for established enterprises through AI products.',
    listItems: [
      'Product portfolio audit',
      'AI-driven revenue optimization',
      'New revenue stream development',
      'Market expansion strategies'
    ],
    outcome: 'Sustained revenue growth through AI-powered solutions.'
  }
];

const InvestorsLifecycle = () => {
  const [openId, setOpenId] = useState('post-investment');

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="inv-lifecycle">
      <div className="inv-lifecycle-vectors">
        <img src="/c2.png" alt="" className="inv-vector-c2" />
        <img src="/c3.png" alt="" className="inv-vector-c3" />
        <div className="inv-vector-overlay"></div>
      </div>
      
      <div className="inv-lifecycle-container">
        <div className="inv-lifecycle-info">
          <h2 className="inv-lifecycle-title">Where AIVC Fits in the Investment Lifecycle</h2>
        </div>
        
        <div className="inv-lifecycle-content">
          <p className="inv-lifecycle-subtext">We operate alongside investors and management teams to transform AI intent into AI revenue.</p>
          <div className="inv-lifecycle-accordion">
            {lifecycleData.map((item) => (
              <div 
                key={item.id} 
                className={`inv-accordion-item ${openId === item.id ? 'open' : ''}`}
              >
                <div 
                  className="inv-accordion-header" 
                  onClick={() => toggleAccordion(item.id)}
                >
                  <h3 className="inv-accordion-title">{item.title}</h3>
                  <span className="inv-accordion-icon">
                    {openId === item.id ? '−' : '+'}
                  </span>
                </div>
                
                <div className="inv-accordion-body">
                  <p className="inv-accordion-text">{item.text}</p>
                  
                  {item.listItems && (
                    <div className="inv-accordion-we">
                      <p className="inv-we-title">We:</p>
                      <ul className="inv-we-list">
                        {item.listItems.map((listItem, index) => (
                          <li key={index} className="inv-we-item">
                            <span className="inv-we-icon">
                              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00d1d1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="10"></circle>
                                <polyline points="12 8 16 12 12 16"></polyline>
                                <line x1="8" y1="12" x2="16" y2="12"></line>
                              </svg>
                            </span>
                            <span className="inv-we-item-text">{listItem}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {item.outcome && (
                    <div className="inv-accordion-outcome">
                      <p className="inv-outcome-label">Outcome:</p>
                      <p className="inv-outcome-text">{item.outcome}</p>
                    </div>
                  )}
                </div>
                <div className="inv-accordion-divider"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestorsLifecycle;
