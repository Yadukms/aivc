import React from 'react';
import './WhatWeDoOpportunity.css';

const WhatWeDoOpportunity = () => {
  return (
    <section className="wwd-opportunity">
      <div className="wwd-opportunity-container">
        <div className="wwd-opportunity-left">
          <h2 className="wwd-opportunity-title">
            The Opportunity Hiding<br />
            in Plain Sight
          </h2>
          <p className="wwd-opportunity-highlight">
            Right now, it generates services revenue. It could be generating AI product revenue (ARR).
          </p>
        </div>
        <div className="wwd-opportunity-right">
          <p>
            Inside your firm is a body of intelligence that took years to build. Proprietary frameworks. Decision models. Industry-specific data. Embedded workflows your enterprise clients depend on. That intelligence is structured, repeatable, and the reason your best clients keep coming back.
          </p>
          <p>
            The gap isn't vision. You already sense there's more here. The gap is execution, the product architecture, the AI engineering, the commercial engine, and the capital to make it real without betting the company. We close that gap.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoOpportunity;
