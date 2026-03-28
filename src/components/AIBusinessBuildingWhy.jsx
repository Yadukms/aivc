import React from 'react';
import './AIBusinessBuildingWhy.css';

const AIBusinessBuildingWhy = () => {
  return (
    <section className="aib-why">
      <div className="aib-why-header">
        <h2 className="aib-why-title">Why We Built This Model</h2>
      </div>
      
      <div className="aib-why-content">
        <div className="aib-why-left">
          <p className="aib-why-highlight">
            This model eliminates every one of those failure modes. 
            No strategy without execution. No building without 
            commercial discipline. No capital required to start.
          </p>
        </div>
        
        <div className="aib-why-right">
          <p className="aib-why-text">
            We've seen the alternative. Strategy decks that never shipped. Dev shops 
            that built features without commercial logic. Founders who raised capital 
            too early and diluted before there was anything to value. And firms that 
            waited too long, watching competitors productize the same expertise first.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AIBusinessBuildingWhy;
