import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <a href="/">
            <img src="/logo.png" alt="AI Venture Catalyst" />
          </a>
        </div>

        <button 
          className="mobile-menu-toggle" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation"
        >
          <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}></span>
        </button>

        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-list">
            <li><a href="#what-we-do" onClick={() => setIsMenuOpen(false)}>What We Do</a></li>
            <li><a href="#ai-business" onClick={() => setIsMenuOpen(false)}>AI Business Building</a></li>
            <li><a href="#who-we-are" onClick={() => setIsMenuOpen(false)}>Who We Are</a></li>
            <li><a href="#investors" onClick={() => setIsMenuOpen(false)}>Investors</a></li>
            <li className="mobile-only"><a href="#contact" className="contact-btn" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
          </ul>
        </nav>

        <div className="header-actions">
          <a href="#contact" className="contact-btn">Contact</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
