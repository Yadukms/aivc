import React from 'react';
import './ConnectWithUs.css';

const ConnectWithUs = () => {
  return (
    <section className="connect-with-us">
      <div className="cwu-image-side"></div>
      <div className="cwu-form-side">
        <div className="cwu-card">
          <div className="cwu-header">
            <h2 className="cwu-title">Connect With Us</h2>
            <p className="cwu-subtitle">
              Your big ideas have bigger potential! Let us hear you out and help you build something cool!
            </p>
          </div>

          <form className="cwu-form">
            <div className="cwu-row">
              <div className="cwu-form-group">
                <label className="cwu-label">Full Name</label>
                <input type="text" placeholder="ENTER YOUR NAME" className="cwu-input" />
              </div>
              <div className="cwu-form-group">
                <label className="cwu-label">Phone Number</label>
                <input type="tel" placeholder="XXX XXX XXXX" className="cwu-input" />
              </div>
            </div>

            <div className="cwu-form-group full-width">
              <label className="cwu-label">Email Address</label>
              <input type="email" placeholder="XYZ@EXAMPLE.COM" className="cwu-input" />
            </div>

            <div className="cwu-row">
              <div className="cwu-form-group">
                <label className="cwu-label">Annual Revenue</label>
                <select className="cwu-select">
                  <option value="">SELECT A RANGE</option>
                  <option value="0-1M">$0 - $1M</option>
                  <option value="1M-5M">$1M - $5M</option>
                  <option value="5M+">$5M+</option>
                </select>
              </div>
              <div className="cwu-form-group">
                <label className="cwu-label">Who Referred You?</label>
                <select className="cwu-select">
                  <option value="">HOW DID YOU HEAR ABOUT US?</option>
                </select>
              </div>
            </div>

            <div className="cwu-form-group full-width">
              <label className="cwu-label">About You</label>
              <textarea placeholder="TELL US ABOUT YOU!" className="cwu-textarea"></textarea>
            </div>

            <div className="cwu-checkbox-group">
              <input type="checkbox" id="legal-consent" className="cwu-checkbox" />
              <label htmlFor="legal-consent" className="cwu-checkbox-label">
                I Agree To Receive Communications From AIVC Regarding My Inquiry And Understand That My Information Will Be Kept Confidential.
              </label>
            </div>

            <div className="cwu-card-footer">
              <div className="cwu-actions">
                <button type="submit" className="cwu-submit-btn">Schedule a Call</button>
              </div>

              <div className="cwu-footer-right">
                <div className="cwu-socials">
                  <a href="#"><img src="/icons.svg#instagram" alt="Instagram" className="cwu-icon-svg" /></a>
                  <a href="#"><img src="/icons.svg#facebook" alt="Facebook" className="cwu-icon-svg" /></a>
                  <a href="#"><img src="/icons.svg#linkedin" alt="LinkedIn" className="cwu-icon-svg" /></a>
                  <a href="#"><img src="/icons.svg#youtube" alt="YouTube" className="cwu-icon-svg" /></a>
                </div>
                <div className="cwu-legal-links">
                  <a href="#">TERMS AND CONDITIONS</a>
                  <span className="cwu-divider">|</span>
                  <a href="#">PRIVACY POLICY</a>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ConnectWithUs;
