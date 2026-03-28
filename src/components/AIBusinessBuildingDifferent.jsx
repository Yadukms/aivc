import React from 'react';
import './AIBusinessBuildingDifferent.css';

const AIBusinessBuildingDifferent = () => {
  return (
    <section className="aib-different">
      <div className="aib-different-header">
        <h2 className="aib-different-title">What Makes Us Different</h2>
      </div>
      
      <div className="aib-different-content">
        <div className="aib-different-left">
          {/* Empty left side to match the layout split where title is in left column or pushed */}
        </div>
        
        <div className="aib-different-right">
          <p className="aib-different-intro">
            We're not consultants delivering roadmaps. Not a dev shop shipping 
            features. Not bankers optimizing a process.
          </p>
          <p className="aib-different-core">
            We're AI venture partners. We build businesses. We fund intelligently. 
            We commercialize inside enterprise realities. And we stay until the AI 
            product business stands on its own.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AIBusinessBuildingDifferent;
