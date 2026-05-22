import React, { useState } from 'react';
import './TurnIP.css';

const TurnIP = () => {
  const [activePhase, setActivePhase] = useState(1);

  const phases = [
    {
      id: 1,
      title: "Phase I — Define the Venture",
      content: "We identify defensible IP, validate enterprise demand, and architect a clear product thesis",
      highlight: "Intelligence becomes strategy."
    },
    {
      id: 2,
      title: "Phase II — Build & Commercialize",
      content: "We build the core product, establish initial go-to-market strategies, and secure lighthouse customers.",
      highlight: "Execution meets opportunity."
    },
    {
      id: 3,
      title: "Phase III — Scale & Create Optionality",
      content: "We provide full-stack growth support, institutional capital access, and strategic exit paths.",
      highlight: "Scale achieves value."
    }
  ];

  return (
    <section className="turn-ip">
      <div className="svg-bg">
        <svg width="871" height="735" viewBox="0 0 871 735" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M853.068 0H0V504.164L282.653 734.849H870.363L853.068 0Z" fill="url(#paint0_linear_1_180)" fillOpacity="0.5"/>
          <defs>
            <linearGradient id="paint0_linear_1_180" x1="87.4596" y1="876.952" x2="17.4861" y2="-44.3654" gradientUnits="userSpaceOnUse">
              <stop stop-color="#ABD0D0"/>
              <stop offset="0.922336" stop-color="white"/>
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="turn-ip-container">
        <div className="turn-ip-header">
          <div className="header-left">
            <h2>How We Turn IP Into AI Revenue</h2>
            <p className="teal-subtext">It unfolds in three integrated phases:</p>
          </div>
          <div className="header-right">
            <p>We don't run pilots. We build ventures.</p>
            <p>Our core service is a structured, turnkey model designed to convert proprietary intelligence into scalable product businesses.</p>
          </div>
        </div>

        <div className="turn-ip-main">
          <div className="image-wrapper">
            <div className="svg-middle">
              <svg width="871" height="735" viewBox="0 0 871 735" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M853.068 0H0V504.164L282.653 734.849H870.363L853.068 0Z" fill="url(#paint0_linear_13_89)" fillOpacity="0.5"/>
                <defs>
                  <linearGradient id="paint0_linear_13_89" x1="87.4596" y1="876.952" x2="17.4861" y2="-44.3654" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#ABD0D0"/>
                    <stop offset="0.922336" stop-color="white"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <svg 
              className="main-image-svg"
              width="696" height="882" viewBox="0 0 696 882" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <path d="M0 0H695.715V881.497H253.363L0 680.19V0Z" fill="url(#pattern0_1_181)"/>
              <defs>
                <pattern id="pattern0_1_181" patternContentUnits="objectBoundingBox" width="1" height="1">
                  <use xlinkHref="#image0_1_181" transform="matrix(0.000976562 0 0 0.000770745 0 -0.091932)"/>
                </pattern>
                <image id="image0_1_181" width="1024" height="1536" preserveAspectRatio="none" xlinkHref="/img1.png"/>
              </defs>
            </svg>
          </div>

          <div className="accordion-wrapper">
            {phases.map((phase) => (
              <div 
                key={phase.id} 
                className={`accordion-item ${activePhase === phase.id ? 'active' : ''}`}
                onClick={() => setActivePhase(phase.id === activePhase ? 0 : phase.id)}
              >
                <div className="accordion-header">
                  <h3>{phase.title}</h3>
                  <span className="icon">{activePhase === phase.id ? '−' : '+'}</span>
                </div>
                {activePhase === phase.id && (
                  <div className="accordion-content">
                    <p>{phase.content}</p>
                    {phase.highlight && <p className="teal-subtext">{phase.highlight}</p>}
                  </div>
                )}
                <div className="accordion-divider"></div>
              </div>
            ))}
          </div>
        </div>

        <p className="turn-ip-footer">From concept to commercialization — fully built, funded, and scaled.</p>
      </div>
    </section>
  );
};

export default TurnIP;
