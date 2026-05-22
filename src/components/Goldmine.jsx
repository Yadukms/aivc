import React from 'react';
import './Goldmine.css';

const Goldmine = () => {
  return (
    <section className="goldmine">
      <div className="goldmine-background">
        <img
          src="/second section vector image homepage.png"
          alt="Background Shape"
          className="bg-shape-new"
        />
      </div>

      <div className="goldmine-container">
        <div className="goldmine-grid">
          <div className="goldmine-left-col">
            <h2 className="goldmine-heading">
              AI Isn’t Your Moat.<br />
              <span className="accent-teal">Your Proprietary IP Is.</span>
            </h2>
          </div>

          <div className="goldmine-right-col">
            <div className="goldmine-content">
              <h3 className="goldmine-question">What is Proprietary IP ?</h3>
              <p className="goldmine-answer">
                Its..... Your data. Your methodologies. Your workflows. Your customer intelligence.
                Combined, they're an asset no competitor can replicate — and AI is the engine
                that unlocks it.
              </p>
              <p className="goldmine-cta">
                We help firms turn that proprietary IP into <span className="accent-teal">defensible AI product businesses.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Goldmine;

