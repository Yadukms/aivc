import React, { useState } from 'react';
import './WhoWeAreValues.css';

const valuesData = [
  {
    id: 'purpose',
    index: '01',
    title: 'Built With Purpose',
    text: 'We believe great companies are built with purpose.\nWe aim to elevate industries, empower people, and create lasting value that strengthens the organizations and communities we serve.',
    quote: 'When purpose is clear, performance follows.'
  },
  {
    id: '10x',
    index: '02',
    title: '10X Thinking',
    text: 'We do not pursue incremental change.\nWe pursue transformation.',
    quote: 'Transformation without values creates volatility. Transformation grounded in purpose creates 10X results.'
  },
  {
    id: 'integrity',
    index: '03',
    title: 'Integrity',
    text: 'We say what is true. We do what we commit to. We align incentives transparently',
    quote: 'Trust is earned through consistent action — especially when it\'s hard.'
  },
  {
    id: 'wintogether',
    index: '04',
    title: 'We Win Together',
    text: 'We do not take fees for advice and walk away.\nWe build alongside you — and we have skin in the game.\nYour proprietary IP meets our execution, our technology, and our commercialization engine.\nOur revenue-share model means our success is directly tied to yours.',
    quote: 'When you grow, we grow. That is not a tagline. It\'s how we operate.'
  }
];

const WhoWeAreValues = () => {
  const [openId, setOpenId] = useState('purpose');

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="wwa-values">
      <div className="wwa-values-container">
        <div className="wwa-values-info">
          <h2 className="wwa-values-title">Our Values</h2>
          <p className="wwa-values-subtext">Who we are determines how we build.</p>
          <p className="wwa-values-intro">
            These aren't aspirational statements on a wall. They are the operating principles that govern every engagement, every decision, and every partnership we enter. They are why our clients trust us — and why we hold ourselves to a standard that goes beyond the work.
          </p>
        </div>
        
        <div className="wwa-values-content">
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
                  <h3 className="wwa-accordion-title">
                    <span className="wwa-accordion-index">{item.index}</span> {item.title}
                  </h3>
                  <span className="wwa-accordion-icon">
                    {openId === item.id ? '−' : '+'}
                  </span>
                </div>
                
                <div className="wwa-accordion-body">
                  <div className="wwa-accordion-text">{item.text.split('\n').map((line, i) => <React.Fragment key={i}>{line}<br/></React.Fragment>)}</div>
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
