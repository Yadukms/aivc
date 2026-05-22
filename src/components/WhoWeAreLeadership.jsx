import React from 'react';
import './WhoWeAreLeadership.css';

const WhoWeAreLeadership = () => {
  return (
    <section className="wwa-leadership">
      <div className="wwa-leadership-container">
        <div className="wwa-leadership-left">
          <h2 className="wwa-leadership-title">Leadership & Experience</h2>
          <p className="wwa-leadership-subtext">
            We've sat in these seats
          </p>
          
          <div className="wwa-leadership-roles">
            <div className="wwa-role-item">
              <img src="/leadershipicon.svg" alt="icon" className="wwa-role-icon-img" />
              <span className="wwa-role-name">CEO</span>
            </div>
            <div className="wwa-role-item">
              <img src="/leadershipicon.svg" alt="icon" className="wwa-role-icon-img" />
              <span className="wwa-role-name">CFO</span>
            </div>
            <div className="wwa-role-item">
              <img src="/leadershipicon.svg" alt="icon" className="wwa-role-icon-img" />
              <span className="wwa-role-name">CTO</span>
            </div>
            <div className="wwa-role-item">
              <img src="/leadershipicon.svg" alt="icon" className="wwa-role-icon-img" />
              <span className="wwa-role-name">CRO</span>
            </div>
            <div className="wwa-role-item">
              <img src="/leadershipicon.svg" alt="icon" className="wwa-role-icon-img" />
              <span className="wwa-role-name">PE Operating Partner</span>
            </div>
          </div>
          
          <p className="wwa-leadership-para">
            Most advisors hand you a roadmap. We hand you results — built from decades of building, scaling, and exiting B2B services companies at every stage of growth.
          </p>

          <div className="wwa-leadership-divider"></div>

          <p className="wwa-leadership-bottom-text">
            Accountability for outcomes. Not advice.
          </p>
        </div>
        
        <div className="wwa-leadership-right">
          <img src="/leadership.png" alt="Leadership" className="wwa-leadership-img" />
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreLeadership;
