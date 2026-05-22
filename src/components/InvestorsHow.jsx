import React from 'react';
import './InvestorsHow.css';

const InvestorsHow = () => {
  return (
    <section className="inv-how">
      <div className="inv-how-container">
        <h2 className="inv-how-title">
          How AI Venture Catalyst Increases<br/>
          Your Exit Multiple
        </h2>
        
        <div className="inv-how-columns">
          <div className="inv-how-col">
            <div className="inv-how-col-header">
              <h3 className="inv-how-col-multiplier">6 - 8 X</h3>
              <p className="inv-how-col-desc">Median EBITDA multiple today</p>
            </div>
            <div className="inv-how-bar-wrapper">
              <img src="/investor1.png" alt="6-8X bar" className="inv-how-chart" />
              <img src="/investorhow1.png" alt="effect" className="inv-how-effect" />
            </div>
            <div className="inv-how-text-box inv-how-text-box-1">
              <p className="inv-how-box-text">Traditional B2B Mid-<br/>Cap Services Firm</p>
            </div>
          </div>
          
          <div className="inv-how-col">
            <div className="inv-how-col-header">
              <h3 className="inv-how-col-multiplier">8 - 10 X</h3>
              <p className="inv-how-col-desc">Median EBITDA multiple with<br/>AI product revenue</p>
            </div>
            <div className="inv-how-bar-wrapper">
              <img src="/investor2.png" alt="8-10X bar" className="inv-how-chart" />
              <img src="/investorhow2.png" alt="effect" className="inv-how-effect" />
            </div>
            <div className="inv-how-text-box inv-how-text-box-2">
              <p className="inv-how-box-text">+ Recurring AI<br/>Product Revenue</p>
            </div>
          </div>
          
          <div className="inv-how-col">
            <div className="inv-how-col-header">
              <h3 className="inv-how-col-multiplier">Up to 16 - 18 X</h3>
              <p className="inv-how-col-desc">EBITDA multiple at carve-out</p>
            </div>
            <div className="inv-how-bar-wrapper">
              <img src="/investor3.png" alt="16-18X bar" className="inv-how-chart" />
              <img src="/investorhow3.png" alt="effect" className="inv-how-effect" />
            </div>
            <div className="inv-how-text-box inv-how-text-box-3">
              <p className="inv-how-box-text">AI Tech Business<br/>Carve-Out</p>
            </div>
          </div>
        </div>

        <div className="inv-how-drivers">
          <div className="inv-how-driver inv-how-driver-1">
            <div className="inv-how-driver-indicator"></div>
            <p className="inv-how-driver-text">
              <span className="highlight-cyan">Value driver 1 : </span> 
              Adding annual recurring AI product revenue to a traditional B2B Mid-Cap services firm increases the EBITDA multiple by +2X — revenue your portfolio companies never had before.
            </p>
          </div>
          
          <div className="inv-how-driver inv-how-driver-2">
            <div className="inv-how-driver-indicator"></div>
            <p className="inv-how-driver-text">
              <span className="highlight-cyan">Value driver 2 : </span> 
              Carving out the AI business as a standalone tech entity re-rates the entire valuation — reaching 16–18X EBITDA.
            </p>
          </div>
        </div>

        <p className="inv-how-source">
          *Source: Based on research from Pepperdine Private Capital Markets Project (PCMP)
        </p>
      </div>
    </section>
  );
};

export default InvestorsHow;
