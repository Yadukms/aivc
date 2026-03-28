import React from 'react';
import './AIBusinessBuildingParadox.css';

const AIBusinessBuildingParadox = () => {
  return (
    <section className="goldmine aib-paradox">
      <div className="aib-paradox-header">
        <h2 className="aib-paradox-title">The Paradox</h2>
      </div>
      
      <div className="aib-paradox-content">
          <div className="aib-paradox-left">
            <p className="aib-paradox-highlight">
              You know there's a product in there. Your best clients have probably told you so.
            </p>
          </div>
          
          <div className="aib-paradox-right">
            <p className="aib-paradox-text">
              Years of working inside enterprise organizations have produced something valuable, 
              proprietary frameworks, decision models, embedded workflows your clients can't 
              get anywhere else.
            </p>
            <p className="aib-paradox-text">
              But the more valuable that intelligence becomes, the more it's trapped inside 
              a model that only scales with headcount.
            </p>
            <p className="aib-paradox-text">
              You know there's a product in there. Your best clients have probably told you so.
            </p>
        </div>
      </div>
      
      <div className="goldmine-vector">
        <svg width="365" height="286" viewBox="0 0 365 286" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M365 0V286H67.5L365 0Z" fill="#ffffff" />
          <path d="M0 286L57 206L67.5 286H0Z" fill="#214950" />
          <path d="M365 0L67.5 286L57 206L365 0Z" fill="#09888E" />
        </svg>
      </div>
    </section>
  );
};

export default AIBusinessBuildingParadox;
