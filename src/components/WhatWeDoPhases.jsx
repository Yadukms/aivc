import React, { useState } from 'react';
import './WhatWeDoPhases.css';

const phasesData = [
  {
    id: 1,
    title: 'Phase I — Identify AI Product Opportunity',
    content: "We isolate the intelligence that makes your firm exceptional and shape it into a product thesis strong enough to stand on its own. Then we pressure-test it. What’s defensible? What will buyers pay for as a standalone product? What can be architected into AI? What revenue model fits?",
    takeaway: "At the end of Phase 1, the output is an AI product blueprint — ready to develop the pilot."
  },
  {
    id: 2,
    title: 'Phase II — Build & Launch AI Products',
    content: "Our AI engineering and product teams turn your blueprint into a scalable, enterprise-grade AI product. We design the architecture, train the models, and build the interfaces required to bring your proprietary intelligence to market securely.",
    takeaway: "You achieve an operational, market-ready AI product generating initial usage and feedback."
  },
  {
    id: 3,
    title: 'Phase III — Commercialize & Scale',
    content: "We shift focus to commercialization, establishing the go-to-market motion, sales enablement, and operational processes needed to scale the product revenue stream independently.",
    takeaway: "You achieve a standalone, recurring revenue asset that commands product valuations."
  }
];

const WhatWeDoPhases = () => {
  const [openPhaseId, setOpenPhaseId] = useState(1);

  const togglePhase = (id) => {
    setOpenPhaseId(openPhaseId === id ? null : id);
  };

  return (
    <section className="wwd-phases">
      <div className="wwd-phases-visuals">
        <img src="/w4.png" alt="Base background" className="wwd-phases-r20" />
        <div className="wwd-phases-r30-container">
          <img src="/w1.png" alt="Phases Visual" className="wwd-phases-r30" />
        </div>
      </div>

      <div className="wwd-phases-content-side">
        <div className="wwd-phases-card">
          <p className="wwd-phases-intro">
            No dilution. No capital raise required. No theoretical
            roadmaps. We operate in three phases.
          </p>

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
                  <h3>{phase.title}</h3>
                  <span className="wwd-phase-icon">
                    {openPhaseId === phase.id ? '—' : '+'}
                  </span>
                </div>

                <div className="wwd-phase-content-wrapper" style={{ height: openPhaseId === phase.id ? 'auto' : 0 }}>
                  <div className="wwd-phase-content">
                    <p className="wwd-phase-desc">{phase.content}</p>
                    <p className="wwd-phase-takeaway">
                      {phase.takeaway}
                    </p>
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
