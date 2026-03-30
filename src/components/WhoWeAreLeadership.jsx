import React from 'react';
import './WhoWeAreLeadership.css';

const WhoWeAreLeadership = () => {
  return (
    <section className="wwa-leadership">
      <div className="wwa-leadership-container">
        <div className="wwa-leadership-left">
          <h2 className="wwa-leadership-title">Leadership & Experience</h2>
          <p className="wwa-leadership-subtext">
            AI Venture Catalyst is led by senior operating partners 
            who have sat in the seats that matter
          </p>
          
          <div className="wwa-leadership-roles">
            <div className="wwa-role-item">
              <span className="wwa-role-icon target"></span>
              <span className="wwa-role-name">CEO</span>
            </div>
            <div className="wwa-role-item">
              <span className="wwa-role-icon target"></span>
              <span className="wwa-role-name">CFO</span>
            </div>
            <div className="wwa-role-item">
              <span className="wwa-role-icon target"></span>
              <span className="wwa-role-name">CTO</span>
            </div>
            <div className="wwa-role-item">
              <span className="wwa-role-icon target"></span>
              <span className="wwa-role-name">CRO</span>
            </div>
            <div className="wwa-role-item">
              <span className="wwa-role-icon target"></span>
              <span className="wwa-role-name">PE Operating Partner</span>
            </div>
          </div>
          
          <p className="wwa-leadership-footer-text">
            Most importantly — we bring accountability for outcomes. 
            <span className="not-advice"> Not advice.</span>
          </p>
        </div>
        
        <div className="wwa-leadership-right">
          <p className="wwa-leadership-intro">
            We have built, scaled, recapitalized, integrated, and exited 
            technology-enabled businesses across multiple funds and growth environments
          </p>
          
          <ul className="wwa-leadership-points">
            <li className="wwa-point-item">
              <span className="wwa-point-icon arrow"></span>
              We understand capital allocation.
            </li>
            <li className="wwa-point-item">
              <span className="wwa-point-icon arrow"></span>
              We understand enterprise commercialization
            </li>
            <li className="wwa-point-item">
              <span className="wwa-point-icon arrow"></span>
              We understand how to translate strategy into durable revenue.
            </li>
          </ul>
          
          <div className="wwa-experience-section">
            <h3 className="wwa-experience-title">Our experience spans:</h3>
            <p className="wwa-experience-intro">
              We have built, scaled, recapitalized, integrated, and exited 
              technology-enabled businesses across multiple funds and growth environments
            </p>
            
            <ul className="wwa-experience-list">
              <li className="wwa-experience-item">
                <span className="wwa-experience-icon check"></span>
                C-suite leadership inside B2B and technology companies
              </li>
              <li className="wwa-experience-item">
                <span className="wwa-experience-icon check"></span>
                Operating Partner roles across private equity platforms
              </li>
              <li className="wwa-experience-item">
                <span className="wwa-experience-icon check"></span>
                AI commercialization and tech-grade GTM execution
              </li>
              <li className="wwa-experience-item">
                <span className="wwa-experience-icon check"></span>
                Capital facilitation and transaction readiness
              </li>
            </ul>
            
            <p className="wwa-experience-footer">
              We bring decades of hands-on experience driving growth, 
              multiple expansion, and successful exits.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreLeadership;
