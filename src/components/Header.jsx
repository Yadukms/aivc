import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <Link to="/">
            <img src="/logo.png" alt="AI Venture Catalyst" />
          </Link>
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
            <li><NavLink to="/what-we-do" className={({isActive}) => isActive ? "active-link" : ""} onClick={() => setIsMenuOpen(false)}>What We Do</NavLink></li>
            <li><NavLink to="/ai-business" className={({isActive}) => isActive ? "active-link" : ""} onClick={() => setIsMenuOpen(false)}>AI Business Building</NavLink></li>
            <li><NavLink to="/who-we-are" className={({isActive}) => isActive ? "active-link" : ""} onClick={() => setIsMenuOpen(false)}>Who We Are</NavLink></li>
            <li><NavLink to="/investors" className={({isActive}) => isActive ? "active-link" : ""} onClick={() => setIsMenuOpen(false)}>Investors</NavLink></li>
            <li className="mobile-only"><NavLink to="/contact" className="contact-btn" onClick={() => setIsMenuOpen(false)}>Contact</NavLink></li>
          </ul>
        </nav>

        <div className="header-actions">
          <NavLink to="/contact" className="contact-btn">Contact</NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
