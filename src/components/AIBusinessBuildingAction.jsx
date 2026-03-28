import React from 'react';
import './AIBusinessBuildingAction.css';

const AIBusinessBuildingAction = () => {
  return (
    <section className="aib-action">
      <div className="aib-action-header">
        <h2 className="aib-action-title">What We Do About It</h2>
      </div>
      
      <div className="aib-action-content">
        <div className="aib-action-left">
          <p className="aib-action-highlight">
            Together, we build a new business
          </p>
        </div>
        
        <div className="aib-action-right">
          <p className="aib-action-text">
            We help you convert your specialized IP to both build and commercialize AI 
            products from the ground up using the structured intelligence that already 
            lives inside your company as the foundation.
          </p>
          <p className="aib-action-text">
            We bring the product leadership, AI architecture, and go-to-market execution 
            with experienced executives from the tech industry. And we provide funding.
          </p>
          <p className="aib-action-text">
            You bring the IP. The enterprise relationships. The domain authority. 
            We bring the product engine. The AI capability. The commercial firepower.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AIBusinessBuildingAction;
