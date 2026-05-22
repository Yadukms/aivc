import React from 'react';
import './AlignedExecution.css';

const AlignedExecution = () => {
  const checkPoints = [
    "We assume execution risk.",
    "No dilution required to begin.",
    "You retain full ownership of your IP."
  ];

  return (
    <section className="aligned-execution">
      <div className="ae-bg-pattern"></div>
      
      <div className="ae-container">
        <div className="ae-content-wrapper">
          {/* Left Side: Text and List */}
          <div className="ae-left-column">
            <h2 className="ae-title">
              Our Incentives Are Tied to <br />
              <span className="ae-highlight">Your Outcomes.</span>
            </h2>
            
            <p className="ae-description">
              Most firms charge retainers to explore transformation. <br />
              <span className="ae-description-highlight">
                We co-build and co-invest — and we only succeed <br />
                when you do.
              </span>
            </p>
            
            <ul className="ae-checklist">
              {checkPoints.map((text, index) => (
                <li key={index} className="ae-check-item">
                  <div className="ae-check-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="11" stroke="#00D1D4" strokeWidth="2" />
                      <path d="M7 12.5L10.5 16L17 9" stroke="#00D1D4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="ae-check-text">{text}</span>
                </li>
              ))}
            </ul>
            
            <div className="ae-bottom-text">
              <p>We don't charge for ambition.</p>
              <p className="ae-highlight">We participate in results.</p>
            </div>
          </div>

          {/* Right Side: Comparison Cards */}
          <div className="ae-right-column">
            {/* Traditional Model Card */}
            <div className="ae-card ae-card-traditional">
              <div className="ae-card-label">TRADITIONAL MODEL</div>
              <h3 className="ae-card-title">Pay retainers. Hope for results.</h3>
              <div className="ae-card-content">
                <p>Upfront fees regardless of outcome. Risk sits entirely with you.</p>
                <p>The advisor gets paid whether the transformation works or not.</p>
              </div>
            </div>

            {/* VS Divider */}
            <div className="ae-vs-divider">
              <div className="ae-vs-line"></div>
              <span className="ae-vs-text">VS</span>
              <div className="ae-vs-line"></div>
            </div>

            {/* AIVC Model Card */}
            <div className="ae-card ae-card-aivc">
              <div className="ae-card-label">THE AIVC MODEL</div>
              <h3 className="ae-card-title">Revenue-share. Shared risk. Shared upside.</h3>
              <div className="ae-card-content">
                <p>
                  We invest our capital, talent, and operating expertise to build your AI product business. 
                  We earn when you earn — through structured revenue participation. 
                  No retainers. No equity dilution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AlignedExecution;
