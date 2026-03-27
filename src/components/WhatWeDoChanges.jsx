import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './WhatWeDoChanges.css';

const WhatWeDoChanges = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="wwd-changes">
      <div className="wwd-changes-wrapper">
        <div className="wwd-changes-header">
          <h2 className="wwd-changes-title">What Changes For You</h2>
          <p className="wwd-changes-intro">
            When your proprietary IP becomes an AI product, three things happen that don't happen any other way.
          </p>
        </div>

        <div className="wwd-changes-grid">
          <div className="wwd-changes-col">
            <div className="col-top-bar"></div>
            <h3 className="col-title">New revenue that doesn't require new headcount.</h3>
            <p className="col-text">
              Product revenue scales independently of your services business — 
              generating income month after month at higher gross margins than 
              your traditional work. The intelligence your people deliver becomes 
              an asset that earns on its own
            </p>
          </div>

          <div className="wwd-changes-divider"></div>

          <div className="wwd-changes-col">
            <div className="col-top-bar"></div>
            <h3 className="col-title">Full control. Zero dilution</h3>
            <p className="col-text">
              Our revenue-share model means no equity raise, no new investors 
              at the table, and no loss of decision-making authority. You build 
              a product business that is entirely and permanently yours
            </p>
          </div>

          <div className="wwd-changes-divider"></div>

          <div className="wwd-changes-col">
            <div className="col-top-bar"></div>
            <h3 className="col-title">Transformed Valuation.</h3>
            <p className="col-text">
              AI product revenue increases valuation multiples by an average of 
              <span className="text-highlight">25–30x</span>. For firms that pursue a carve-out, multiples 
              reach <span className="text-highlight">6–18x EBITDA</span> or higher. That's not incremental 
              improvement. That's a fundamentally different conversation with 
              buyers, investors, or partners
            </p>
          </div>
        </div>

        <div className="wwd-changes-footer">
          <p className="footer-highlight">New revenue. Higher margins. Full ownership. A transformed valuation. That's what changes.</p>
          <p className="footer-footnote">( Based on research from Peppardine PCM 2025 – EisnerAmper 2025 – Capstone Partners )</p>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoChanges;
