import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-branding">
            <img src="/logo.png" alt="AI Venture Catalyst" className="footer-logo" />
            <p className="footer-description">
              Transforming AI innovations into high-value ventures through strategic carve-outs and operating partnership.
            </p>
            <div className="footer-socials">
              <a href="#" className="footer-social-icon" aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a href="#" className="footer-social-icon" aria-label="Twitter">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a href="#" className="footer-social-icon" aria-label="YouTube">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.377.505 9.377.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
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
              <a href="#" className="footer-link">Contact</a>
            </div>
          </div>

          <div className="footer-column">
            <h3 className="footer-column-title">Our Offerings</h3>
            <div className="footer-links">
              <a href="#" className="footer-link">AI Value Assessment</a>
              <a href="#" className="footer-link">Strategic Carve-Out</a>
              <a href="#" className="footer-link">Growth Capital</a>
              <a href="#" className="footer-link">Fractional Executives</a>
            </div>
          </div>

          <div className="footer-column">
            <h3 className="footer-column-title">More</h3>
            <div className="footer-links">
              <a href="#" className="footer-link">Blogs</a>
              <a href="#" className="footer-link">Legal</a>
              <a href="#" className="footer-link">X</a>
              <a href="#" className="footer-link">Y</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © 2025 AI Venture Catalyst. All rights reserved.
          </p>
          <div className="footer-bottom-links">
            <a href="#" className="footer-bottom-link">Privacy Policy</a>
            <a href="#" className="footer-bottom-link">Terms of Service</a>
            <a href="#" className="footer-bottom-link">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
