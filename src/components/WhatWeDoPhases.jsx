import React, { useState } from 'react';
import './WhatWeDoPhases.css';

const phasesData = [
  {
    id: 1,
    title: 'Phase I — Identify AI Product Opportunity',
    content: "We go deep inside your delivery model to isolate the intelligence that makes your firm exceptional — the expertise, the decision logic, the data flows that enterprise clients depend on. Then we pressure-test it. What's defensible? What will buyers pay for as a standalone product? What can be architected into AI? What revenue model fits?",
    takeaway: "You leave this phase with a product blueprint built on enterprise reality, not a slide deck."
  },
  {
    id: 2,
    title: 'Phase II — Build & Activate',
    content: "Our AI engineering and product teams turn your blueprint into a scalable, enterprise-grade AI product. We design the architecture, train the models, and build the interfaces required to bring your proprietary intelligence to market securely.",
    takeaway: "You leave this phase with an operational, market-ready AI product generating initial usage and feedback."
  },
  {
    id: 3,
    title: 'Phase III — Scale & Expand',
    content: "We shift focus to commercialization, establishing the go-to-market motion, sales enablement, and operational processes needed to scale the product revenue stream independently from your core services.",
    takeaway: "You achieve a standalone, recurring revenue asset that commands product valuations."
  }
];

const WhatWeDoPhases = () => {
  const [openPhaseId, setOpenPhaseId] = useState(1); // default to first phase open

  const togglePhase = (id) => {
    setOpenPhaseId(openPhaseId === id ? null : id);
  };

  return (
    <section className="wwd-phases">
      <div className="wwd-phases-svg-bg">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 1919 1257" fill="none" preserveAspectRatio="none">
          <defs>
            <clipPath id="phaseClip">
              <path d="M0 0H2238.72L1553.34 1256.78H0V0Z" />
            </clipPath>
          </defs>
          <path d="M0 0H2238.72L1553.34 1256.78H0V0Z" fill="#DAEAEA" />
          <image
            href="/newimg.jpg"
            width="1800"
            height="1024"
            x="0"
            y="-1"
            clipPath="url(#phaseClip)"
            preserveAspectRatio="xMidYMid slice"
          />
        </svg>
      </div>

      <div className="wwd-phases-container">
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
