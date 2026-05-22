import React from 'react';
import './InvestorsLifecycle.css';

const InvestorsLifecycle = () => {
  const points = [
    { text: "We identify AI products that leverage your portfolio's competitive uniqueness" },
    { text: "Recurring AI product revenue significantly increases your exit multiples" },
    { text: "We build with developers who specialize in enterprise LLMs" },
    { 
      text: "Carve-out candidates command 16–18X valuation multiples — our area of specific expertise",
      highlight: "16–18X"
    },
    { text: "We commercialize with tech executives who know how enterprise buyers acquire software" },
    { text: "Our fees are aligned entirely to your results" }
  ];

  return (
    <section className="inv-lifecycle">
      <div className="inv-lifecycle-card">
        <h2 className="inv-lifecycle-title">
          Why PE Firms Bring AI Venture Catalyst<br/>
          Into Their Portfolio
        </h2>
        <p className="inv-lifecycle-subtext">WHAT YOU GAIN</p>
        
        <div className="inv-lifecycle-grid">
          {points.map((point, index) => (
            <div key={index} className="inv-lifecycle-item">
              <span className="inv-lifecycle-icon">
                <img src="/invicon.svg" alt="check" />
              </span>
              <p className="inv-lifecycle-item-text">
                {point.highlight ? (
                  <>
                    {point.text.split(point.highlight)[0]}
                    <span className="inv-highlight">{point.highlight}</span>
                    {point.text.split(point.highlight)[1]}
                  </>
                ) : (
                  point.text
                )}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InvestorsLifecycle;
