import React from 'react';
import './AlignmentModel.css';

const AlignmentModel = () => {
  const listItems = [
    "We assume development and execution risk",
    "We align compensation to revenue realization",
    "We do not require equity dilution to initiate build",
    "We remove the need for immediate capital raises"
  ];

  return (
    <section className="alignment-model">
      <div className="alignment-bg">
        <img src="/c6.jpg" alt="Architectural background" className="alignment-bg-img" />
        <div className="alignment-bg-overlay"></div>
      </div>
      
      <div className="alignment-container">
        <div className="alignment-box">
          <div className="alignment-left">
            <h2 className="alignment-title">Our Alignment Model</h2>
            <p className="alignment-subtitle">Our incentives are tied to performance — not fees.</p>
          </div>
          
          <div className="alignment-right">
            <div className="alignment-intro">
              <p>We are not advisors billing retainers.</p>
              <p>We are AI venture partners who co-build and co-invest.</p>
            </div>
            
            <h3 className="alignment-list-title">Through structured revenue participation:</h3>
            
            <ul className="alignment-list">
              {listItems.map((item, index) => (
                <li key={index} className="alignment-item">
                  <span className="alignment-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="11" stroke="#00D1D1" strokeWidth="2"/>
                      <path d="M11 8L15 12L11 16" stroke="#00D1D1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <span className="alignment-item-text">{item}</span>
                </li>
              ))}
            </ul>
            
            <div className="alignment-footer">
              <p>For investors, this accelerates execution without adding friction.</p>
              <p>For portfolio companies, it preserves ownership.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AlignmentModel;
