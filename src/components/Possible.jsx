import React from 'react';
import './Possible.css';

const Possible = () => {
  const items = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L4 5V11C4 16.19 7.41 21.05 12 22C16.59 21.05 20 16.19 20 11V5L12 2Z" stroke="#00D1D4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 12L11 14L15 10" stroke="#00D1D4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      text: "Revenue expands beyond headcount"
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="#00D1D4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="8.5" cy="7" r="4" stroke="#00D1D4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M23 21V19C22.9993 18.1137 22.7044 17.2522 22.1614 16.5523C21.6184 15.8524 20.8581 15.3516 20 15.13" stroke="#00D1D4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M17 11C18.0609 11 19.0783 10.5786 19.8284 9.82843C20.5786 9.07828 21 8.06087 21 7C21 5.93913 20.5786 4.92172 19.8284 4.17157C19.0783 3.42143 18.0609 3 17 3" stroke="#00D1D4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      text: "Enterprise relationships deepen"
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#00D1D4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 7V12L15 15" stroke="#00D1D4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      text: "Growth narratives shift."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 5V19" stroke="#00D1D4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M5 12H19" stroke="#00D1D4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="12" cy="12" r="9" stroke="#00D1D4" strokeWidth="2"/>
        </svg>
      ),
      text: "Revenue expands beyond headcount"
    }
  ];

  return (
    <section className="possible">
      <div className="possible-container">
        <div className="possible-header">
          <h2 className="possible-title">What Become Possible</h2>
          <p className="possible-subtitle">
            When your intelligence becomes a scalable product business:
          </p>
        </div>
        
        <div className="possible-grid">
          {items.map((item, index) => (
            <div key={index} className="possible-item">
              <div className="possible-icon">{item.icon}</div>
              <p className="possible-text">{item.text}</p>
              {index % 2 === 0 && <div className="possible-divider-vertical"></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Possible;
