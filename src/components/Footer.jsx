import React from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const scrollToConnect = () => {
    if (pathname === '/') {
      const el = document.getElementById('connect');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById('connect');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 400);
    }
  };
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          {/* Column 1: Branding */}
          <div className="footer-branding">
            <div className="footer-logo-wrapper">
              <img src="/footer logo.png" alt="AI Venture Catalyst" className="footer-logo" />
            </div>
            
            <p className="footer-tagline">
              We build, fund, and commercialize AI product businesses from proprietary IP.
            </p>
            
            <p className="footer-description">
              Partnering with professional and business services firms to build AI product businesses from their proprietary IP—through a revenue-share model that requires no dilution.
            </p>
            
            <div className="footer-socials">
              <a href="https://www.linkedin.com/company/ai-venture-catalyst/" target="_blank" rel="noopener noreferrer" className="footer-social-icon">
                <div className="social-circle">
                  <img src="/footer icon.png" alt="LinkedIn" className="footer-social-img" />
                </div>
              </a>
            </div>
          </div>

          {/* Column 2: Company */}
          <div className="footer-column">
            <h3 className="footer-column-title">Company</h3>
            <div className="footer-links">
              <Link to="/what-we-do" className="footer-link">What we do</Link>
              <Link to="/who-we-are" className="footer-link">Who we are</Link>
              <Link to="/investors" className="footer-link">Investors</Link>
              <Link to="/insights" className="footer-link">Insights</Link>
            </div>
          </div>

          {/* Column 3: Contact Info */}
          <div className="footer-column">
            <h3 className="footer-column-title">Contact Info</h3>
            <div className="footer-links">
              <button onClick={scrollToConnect} className="footer-link footer-link-btn">Contact Us</button>
              <a href="https://www.linkedin.com/company/ai-venture-catalyst/" target="_blank" rel="noopener noreferrer" className="footer-link">LinkedIn</a>
            </div>
          </div>

          {/* Column 4: CTA */}
          <div className="footer-cta-column">
            <button className="footer-lets-talk-btn" onClick={scrollToConnect}>Lets Talk</button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <div className="footer-bottom-content">
            <p className="footer-copyright">
              © 2026 AI Venture Catalyst. All rights reserved | Designed &amp; Developed by Ryzenforge
            </p>
            <div className="footer-legal-links">
              <button onClick={() => navigate('/privacy-policy', { state: { activeTab: 'Privacy Policy' } })} className="footer-legal-link">Privacy Policy</button>
              <button onClick={() => navigate('/privacy-policy', { state: { activeTab: 'Terms of Use' } })} className="footer-legal-link">Terms & Conditions</button>
              <a href="#" className="footer-legal-link">Cookie Policy</a>
            </div>
          </div>
          {/* <p className="footer-credit">
            © 2026 Client Name. All Rights Reserved | Designed &amp; Developed by Ryzenforge
          </p> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
