import React, { useState } from 'react';
import './AIBusinessBuildingHow.css';

const AIBusinessBuildingHow = () => {
  const [openPhaseId, setOpenPhaseId] = useState(1);

  const phases = [
    {
      id: 1,
      title: 'Identify AI Product Opportunity',
      content: 'We isolate the intelligence that makes your firm exceptional and shape it into a product thesis strong enough to stand on its own. Defensibility mapping. Enterprise demand validation. AI architecture. Recurring revenue design',
      takeaway: 'The output is a product blueprint — not an innovation initiative.'
    },
    {
      id: 2,
      title: 'Phase II — Build & Activate',
      content: 'Our engineering team develops the commercial-grade AI product based on the blueprint, ensuring security and scalability.',
      takeaway: 'Market-ready AI product rollout.'
    },
    {
      id: 3,
      title: 'Phase III — Scale & Expand',
      content: 'We establish standalone commercial operations and go-to-market motions to scale the recurring revenue.',
      takeaway: 'Standalone recurring revenue asset.'
    }
  ];

  return (
    <section className="aib-how">
      <div className="aib-how-visual">
         <div className="aib-how-img-container">
           <img src="/a3.png" alt="Person" className="aib-how-img" />
         </div>
         <div className="aib-how-slant-overlay"></div>
      </div>
      
      <div className="aib-how-content-side">
        <div className="aib-how-card">
          <h2 className="aib-how-title">How It Works</h2>
          
          <div className="aib-how-accordion">
            {phases.map((phase) => (
              <div key={phase.id} className={`aib-how-item ${openPhaseId === phase.id ? 'open' : ''}`}>
                <div 
                  className="aib-how-header" 
                  onClick={() => setOpenPhaseId(openPhaseId === phase.id ? null : phase.id)}
                >
                  <h3 className="aib-how-phase-title">{phase.title}</h3>
                  <span className="aib-how-icon">{openPhaseId === phase.id ? '—' : '+'}</span>
                </div>
                
                {openPhaseId === phase.id && (
                  <div className="aib-how-body">
                    <p className="aib-how-desc">{phase.content}</p>
                    <p className="aib-how-takeaway">{phase.takeaway}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIBusinessBuildingHow;
