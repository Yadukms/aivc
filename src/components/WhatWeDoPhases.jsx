import React, { useState } from 'react';
import './WhatWeDoPhases.css';

const phasesData = [
  {
    id: 1,
    title: 'Identify AI Product Opportunity',
    content: "We isolate the intelligence that makes your firm exceptional and shape it into a product thesis strong enough to stand on its own. Then we pressure-test it. What’s defensible? What will buyers pay for as a standalone product? What can be architected into AI? What revenue model fits?",
    takeaway: "At the end of Phase 1, the output is an AI product blueprint — ready to develop the pilot."
  },
  {
    id: 2,
    title: 'Build & Launch AI Products',
    content: "We work as operators. We build the product infrastructure, convert your workflow intelligence into software, and activate go-to-market into your enterprise channels. Our economics are aligned through our revenue-share approach. We have skin in the game from day one.",
    takeaway: "At the end of Phase 2, we will have successfully rolled out AI products at beta customers."
  },
  {
    id: 3,
    title: 'Commercialize & Scale',
    content: "Once product revenue is real, the dynamics shift. Margins strengthen. Enterprise clients deepen. Defensibility compounds. We optimize economics and accelerate expansion — turning your AI product into a durable source of recurring revenue.",
    takeaway: "By the end of Phase 3, you've turned your proprietary IP into a recurring revenue engine — without dilution, without losing control."
  }
];

const WhatWeDoPhases = () => {
  const [openPhaseId, setOpenPhaseId] = useState(1);

  const togglePhase = (id) => {
    setOpenPhaseId(openPhaseId === id ? null : id);
  };

  return (
    <section className="wwd-phases">
      <div className="wwd-phases-bg-shape"></div>
      <div className="wwd-phases-background">
        <img src="/w1.png" alt="Office Background" className="wwd-bg-img" />
        <div className="wwd-phases-overlay"></div>
      </div>

      <div className="wwd-phases-container">
        <div className="wwd-phases-card">
          <div className="wwd-phases-accordion">
            {phasesData.map((phase) => (
              <div
                key={phase.id}
                className={`wwd-phase-item ${openPhaseId === phase.id ? 'open' : ''}`}
              >
                <div
                  className="wwd-phase-header"
                  onClick={() => togglePhase(phase.id)}
                >
                  <div className="wwd-phase-title-group">
                    <span className="wwd-phase-number">{phase.id}</span>
                    <h3>{phase.title}</h3>
                  </div>
                  <span className="wwd-phase-icon">
                    {openPhaseId === phase.id ? (
                      <svg width="18" height="2" viewBox="0 0 18 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 1H18" stroke="white" strokeWidth="1.5"/>
                      </svg>
                    ) : (
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 9H18" stroke="white" strokeWidth="1.5"/>
                        <path d="M9 0V18" stroke="white" strokeWidth="1.5"/>
                      </svg>
                    )}
                  </span>
                </div>

                <div className="wwd-phase-content-wrapper" style={{ 
                  maxHeight: openPhaseId === phase.id ? '600px' : '0',
                  opacity: openPhaseId === phase.id ? 1 : 0,
                  visibility: openPhaseId === phase.id ? 'visible' : 'hidden'
                }}>
                  <div className="wwd-phase-content">
                    <p className="wwd-phase-desc">{phase.content}</p>
                    <div className="wwd-phase-takeaway-container">
                      <p className="wwd-phase-takeaway">
                        {phase.takeaway}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoPhases;
