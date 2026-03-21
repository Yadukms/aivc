import React from 'react';
import './ConnectWithUs.css';

const ConnectWithUs = () => {
  return (
    <section className="connect-with-us">
      <div className="cwu-bg-overlay">
        <svg
          width="1780.676"
          height="1029.475"
          viewBox="0 0 1780.676 1029.475"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="cwu-overlay-svg"
        >
          <path
            d="M0 0L1780.68 0.000221252V1029.48H480.33L0 0Z"
            fill="#153940"
            fillOpacity="0.6"
          />
        </svg>
      </div>
      <div className="cwu-container">
        <div className="cwu-card">
          <div className="cwu-header">
            <h2 className="cwu-title">Connect With Us</h2>
            <p className="cwu-subtitle">
              Your big ideas have bigger potential! Let us hear you out and help you build something cool!
            </p>
          </div>

          <form className="cwu-form">
            <div className="cwu-form-group">
              <label className="cwu-label">Full Name</label>
              <input type="text" placeholder="ENTER YOUR NAME" className="cwu-input" />
            </div>

            <div className="cwu-form-group">
              <label className="cwu-label">Phone Number</label>
              <input type="tel" placeholder="XXX XXX XXXX" className="cwu-input" />
            </div>

            <div className="cwu-form-group full-width">
              <label className="cwu-label">Email Address</label>
              <input type="email" placeholder="XYZ@EXAMPLE.COM" className="cwu-input" />
            </div>

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
                <option value="linkedin">LinkedIn</option>
                <option value="referral">Referral</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="cwu-form-group full-width">
              <label className="cwu-label">About You</label>
              <textarea placeholder="TELL US ABOUT YOU" className="cwu-textarea"></textarea>
            </div>

            <div className="cwu-checkbox-group">
              <input type="checkbox" id="newsletter" />
              <label htmlFor="newsletter" className="cwu-checkbox-text">
                Yes, I would like to receive product updates and news via email. I understand that I can opt out at any time.
              </label>
            </div>

            <div className="cwu-footer">
              <button type="submit" className="cwu-submit-btn">
                Schedule a Call
              </button>

              <div className="cwu-social-links">
                <a href="#" className="cwu-social-icon" aria-label="Instagram">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163v2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.209-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a href="#" className="cwu-social-icon" aria-label="Facebook">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </a>
                <a href="#" className="cwu-social-icon" aria-label="LinkedIn">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a href="#" className="cwu-social-icon" aria-label="YouTube">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.377.505 9.377.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="cwu-legal">
              <a href="#" className="cwu-legal-link">Terms and Conditions</a>
              <span className="cwu-legal-link">|</span>
              <a href="#" className="cwu-legal-link">Privacy Policy</a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ConnectWithUs;
