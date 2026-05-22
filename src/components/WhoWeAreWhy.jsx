import React from 'react';
import './WhoWeAreWhy.css';

const WhoWeAreWhy = () => {
  return (
    <section className="wwa-why">
      <div className="wwa-why-container">
        <div className="wwa-why-left">
          <h2 className="wwa-why-title">Why We Exist</h2>
          <p className="wwa-why-text">
            Most of these firms <span className="wwa-why-teal">don't realize what they're sitting on.</span> The ones that do don't know how to extract it, productize it, or fund it without giving up control.
          </p>
        </div>
        
        <div className="wwa-why-right">
          <p className="wwa-why-text">
            We've spent our careers <span className="wwa-why-teal">building, scaling, funding, and exiting B2B services companies.</span> We've seen first hand what sits inside these firms — proprietary IP that could power standalone AI product businesses and generate recurring revenue far beyond services delivery alone.
          </p>
          <p className="wwa-why-text wwa-why-teal mt-4">
            That's why we built AI Venture Catalyst.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreWhy;
