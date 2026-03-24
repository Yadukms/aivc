import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, to) => {
    setIsMenuOpen(false);
    if (pathname === to) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
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
            <li><NavLink to="/what-we-do" className={({isActive}) => isActive ? "active-link" : ""} onClick={(e) => handleLinkClick(e, "/what-we-do")}>What We Do</NavLink></li>
            <li><NavLink to="/ai-business" className={({isActive}) => isActive ? "active-link" : ""} onClick={(e) => handleLinkClick(e, "/ai-business")}>AI Business Building</NavLink></li>
            <li><NavLink to="/who-we-are" className={({isActive}) => isActive ? "active-link" : ""} onClick={(e) => handleLinkClick(e, "/who-we-are")}>Who We Are</NavLink></li>
            <li><NavLink to="/investors" className={({isActive}) => isActive ? "active-link" : ""} onClick={(e) => handleLinkClick(e, "/investors")}>Investors</NavLink></li>
            <li className="mobile-only"><NavLink to="/contact" className="contact-btn" onClick={(e) => handleLinkClick(e, "/contact")}>Contact</NavLink></li>
          </ul>
        </nav>

        <div className="header-actions">
          <NavLink to="/contact" className="contact-btn" onClick={(e) => handleLinkClick(e, "/contact")}>Contact</NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
