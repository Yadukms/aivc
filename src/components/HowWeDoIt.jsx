import React from 'react';
import './HowWeDoIt.css';

const HowWeDoIt = () => {
  return (
    <section className="how-we-do-it-new">
      <div className="how-container-new">
        <div className="how-header-new">
          <h2 className="how-title-new">How We Do It</h2>
          <p className="how-subtitle-new">
            We build AI product businesses from proprietary IP -and only get paid when you do.
          </p>
        </div>

        <div className="how-grid-new">
          {/* Background lines for the grid */}
          <div className="grid-horizontal-line-top"></div>
          <div className="grid-horizontal-line-bottom"></div>

          {/* Phase 1 */}
          <div className="how-column-new">
            <div className="phase-circle-wrapper">
              <div className="phase-circle">1</div>
            </div>
            <div className="phase-content-new">
              <p className="phase-label-new">PHASE ONE</p>
              <h3 className="phase-title-new">Identify AI Product<br />Opportunity</h3>
              <div className="phase-divider-short"></div>
              <p className="phase-deliverable-label">DELIVERABLE</p>
              <p className="phase-deliverable-value">AI PRODUCT BLUEPRINT &<br />INTERACTIVE DEMO</p>
            </div>
            <div className="phase-bottom-new">
              <p>WE FUND</p>
            </div>
            <div className="grid-vertical-line"></div>
          </div>

          {/* Phase 2 */}
          <div className="how-column-new">
            <div className="phase-circle-wrapper">
              <div className="phase-circle">2</div>
            </div>
            <div className="phase-content-new">
              <p className="phase-label-new">PHASE TWO</p>
              <h3 className="phase-title-new">Build & Launch AI<br />Products</h3>
              <div className="phase-divider-short"></div>
              <p className="phase-deliverable-label">DELIVERABLE</p>
              <p className="phase-deliverable-value">AI PRODUCT ROLLOUT</p>
            </div>
            <div className="phase-bottom-new">
              <p>WE SHARE RISK</p>
            </div>
            <div className="grid-vertical-line"></div>
          </div>

          {/* Phase 3 */}
          <div className="how-column-new phase-last">
            <div className="phase-circle-wrapper">
              <div className="phase-circle">3</div>
            </div>
            <div className="phase-content-new">
              <p className="phase-label-new">PHASE THREE</p>
              <h3 className="phase-title-new">Commercialize &<br />Scale</h3>
              <div className="phase-divider-short"></div>
              <p className="phase-deliverable-label">DELIVERABLE</p>
              <p className="phase-deliverable-value">RECURRING REVENUE</p>
            </div>
            <div className="phase-bottom-new">
              <p>NO DILUTION</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HowWeDoIt;
