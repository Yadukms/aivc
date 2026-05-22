import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation, useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();

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

  const handleContactClick = () => {
    setIsMenuOpen(false);
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
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo">
          <Link to="/">
            <img src="/newlogo2.png" alt="AI Venture Catalyst" />
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
            <li><NavLink to="/what-we-do" className={({ isActive }) => isActive ? "active-link" : ""} onClick={(e) => handleLinkClick(e, "/what-we-do")}>What We Do</NavLink></li>
            <li><NavLink to="/who-we-are" className={({ isActive }) => isActive ? "active-link" : ""} onClick={(e) => handleLinkClick(e, "/who-we-are")}>Who We Are</NavLink></li>
            <li><NavLink to="/investors" className={({ isActive }) => isActive ? "active-link" : ""} onClick={(e) => handleLinkClick(e, "/investors")}>Investors</NavLink></li>
            <li><NavLink to="/insights" className={({ isActive }) => isActive ? "active-link" : ""} onClick={(e) => handleLinkClick(e, "/insights")}>Insights</NavLink></li>
          </ul>
        </nav>

        <div className="header-actions">
          <button className="contact-btn" onClick={handleContactClick}>Contact</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
