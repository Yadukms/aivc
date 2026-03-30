import React, { useState } from 'react';
import './WhoWeAreValues.css';

const valuesData = [
  {
    id: 'purpose',
    title: 'Built With Purpose',
    text: 'We believe great companies are built with purpose. We aim to elevate industries, empower people, and create lasting value that strengthens the organizations and communities we serve.',
    quote: 'When purpose is clear, performance follows.'
  },
  {
    id: '10x',
    title: '10X Thinking',
    text: 'We challenge standard incremental growth by focusing on moonshot ideas and transformative strategies that can scale 10x rather than 10%.',
    quote: 'Think big, execute bigger.'
  },
  {
    id: 'integrity',
    title: 'Integrity',
    text: 'We operate with radical transparency and uncompromising ethical standards. Trust is our most valuable currency.',
    quote: 'Integrity is doing the right thing when no one is looking.'
  },
  {
    id: 'people',
    title: 'People First',
    text: 'Our success is built on the success of the people we work with. We prioritize long-term human value over short-term financial gains.',
    quote: 'Invest in people, and everything else follows.'
  },
  {
    id: 'leadership',
    title: 'Leadership as a Force Multiplier',
    text: 'We empower leaders to scale their impact by providing them with the tools, capital, and alignment they need to succeed.',
    quote: 'Great leaders dont just build companies; they build other leaders.'
  },
  {
    id: 'cocreation',
    title: 'Co-Creation Matters',
    text: "We don't just invest; we build alongside our partners. True innovation comes from collaborative execution.",
    quote: "Building together is the fastest way to scale."
  },
  {
    id: 'excellence',
    title: 'Excellence as a Standard',
    text: 'We set the bar high and keep it there. Every detail matters in the pursuit of building world-class technology companies.',
    quote: "Excellence is not an act, but a habit."
  }
];

const WhoWeAreValues = () => {
  const [openId, setOpenId] = useState('purpose');

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="wwa-values">
      <div className="wwa-values-vectors">
        <img src="/vector1.png" alt="" className="wwa-vector1" />
        <div className="wwa-vector2"></div>
      </div>
      
      <div className="wwa-values-container">
        <div className="wwa-values-info">
          <h2 className="wwa-values-title">Our Values</h2>
          <p className="wwa-values-subtext">Who we are determines how we build.</p>
        </div>
        
        <div className="wwa-values-content">
          <p className="wwa-values-intro">
            The companies we help build are shaped not only by strategy and execution — but by character.
          </p>
          
          <div className="wwa-values-accordion">
            {valuesData.map((item) => (
              <div 
                key={item.id} 
                className={`wwa-accordion-item ${openId === item.id ? 'open' : ''}`}
              >
                <div 
                  className="wwa-accordion-header" 
                  onClick={() => toggleAccordion(item.id)}
                >
                  <h3 className="wwa-accordion-title">{item.title}</h3>
                  <span className="wwa-accordion-icon">
                    {openId === item.id ? '−' : '+'}
                  </span>
                </div>
                
                <div className="wwa-accordion-body">
                  <div className="wwa-accordion-text">{item.text}</div>
                  {item.quote && (
                    <div className="wwa-accordion-quote">{item.quote}</div>
                  )}
                </div>
                <div className="wwa-accordion-divider"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreValues;
