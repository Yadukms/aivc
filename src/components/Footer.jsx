import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-branding">
            <img src="/logo.png" alt="AI Venture Catalyst" className="footer-logo" />
            <p className="footer-company-name">AI Venture Catalyst</p>
            <p className="footer-tagline">
              <span className="cyan-highlight">We build, fund, and commercialize AI product businesses from proprietary IP.</span>
            </p>
            <p className="footer-description">
              Partnering with professional and business services firms to build AI product businesses from their proprietary IP—through a revenue-share model that requires no dilution.
            </p>
            <div className="footer-socials">
              <a href="#" className="footer-social-icon"><i className="fab fa-linkedin-in"></i></a>
              <a href="#" className="footer-social-icon"><i className="fab fa-twitter"></i></a>
              <a href="#" className="footer-social-icon"><i className="fab fa-youtube"></i></a>
            </div>
          </div>

          <div className="footer-column">
            <h3 className="footer-column-title">Company</h3>
            <div className="footer-links">
              <a href="#" className="footer-link">What we do</a>
              <a href="#" className="footer-link">AI Business Building</a>
              <a href="#" className="footer-link">Who we are</a>
              <a href="#" className="footer-link">Investors</a>
              <a href="#" className="footer-link">Insights</a>
            </div>
          </div>

          <div className="footer-column">
            <h3 className="footer-column-title">Contact Info</h3>
            <div className="footer-links">
              <a href="#" className="footer-link">Contact Us</a>
              <a href="#" className="footer-link">Linked in</a>
              <a href="#" className="footer-link">Twitter</a>
            </div>
          </div>

          <div className="footer-cta-column">
            <div className="footer-cta-box">
              <p className="footer-cta-text">
                Schedule a 30-Minute AI Business Building Conversation
              </p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <div className="footer-bottom-content">
            <p className="footer-copyright">
              © 2023 AI Venture Catalyst. All rights reserved.
            </p>
            <div className="footer-legal-links">
              <a href="#" className="footer-legal-link">Privacy Policy</a>
              <a href="#" className="footer-legal-link">Terms & Conditions</a>
              <a href="#" className="footer-legal-link">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
