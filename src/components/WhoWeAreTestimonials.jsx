import React, { useState } from 'react';
import './WhoWeAreTestimonials.css';

const testimonialCategories = [
  { id: 'execution', label: 'Execution & Results' },
  { id: 'leadership', label: 'Leadership & Transformation' },
  { id: 'institutional', label: 'Institutional & Capital Results' },
  { id: 'strategic', label: 'Strategic Insight' }
];

const testimonialsData = {
  execution: [
    {
      quote: "5x'd our pipeline within months through value-based positioning. Championed the transition to a scalable product revenue model — improving funnel health, conversion rates, and profitability",
      author: "CEO, Blockchain/AI Tech Firm"
    }
  ],
  leadership: [
    {
      quote: "Led a massive organizational shift towards AI-driven workflows, resulting in a 30% increase in operational efficiency within the first year.",
      author: "COO, Global Logistics Provider"
    }
  ],
  institutional: [
    {
      quote: "Facilitated a series of complex recapitalizations that secured our firm's long-term stability and enabled a successful exit strategy.",
      author: "Managing Director, PE Group"
    }
  ],
  strategic: [
    {
      quote: "Provided unparalleled strategic insight that transformed our market entry approach, allowing us to capture significant market share in record time.",
      author: "Founder, Enterprise SaaS Platform"
    }
  ]
};

const WhoWeAreTestimonials = () => {
  const [activeTab, setActiveTab] = useState('execution');

  const currentTestimonials = testimonialsData[activeTab];

  return (
    <section className="wwa-testimonials">
      <img src="/v4.png" alt="" className="wwa-testimonials-v4" />

      <div className="wwa-testimonials-container">
        <h2 className="wwa-testimonials-title">What Our Clients Say</h2>

        <div className="wwa-testimonials-tabs">
          {testimonialCategories.map((tab) => (
            <button
              key={tab.id}
              className={`wwa-tab-btn ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
              {activeTab === tab.id && <div className="active-line"></div>}
            </button>
          ))}
        </div>

        <div className="wwa-testimonials-content">
          <div className="wwa-quote-marks left">
            <div className="wwa-quote-svg-wrapper">
              <svg xmlns="http://www.w3.org/2000/svg" width="27" height="64" viewBox="0 0 27 64" fill="none">
                <path d="M18.4178 1.75098C20.1859 1.75098 21.8816 2.45009 23.1319 3.69452C24.3821 4.93895 25.0845 6.62676 25.0845 8.38665V28.2937C25.0845 30.0535 24.3821 31.7414 23.1319 32.9858C21.8816 34.2302 20.1859 34.9293 18.4178 34.9293C17.5338 34.9293 16.6859 35.2789 16.0608 35.9011C15.4357 36.5233 15.0845 37.3672 15.0845 38.2472V41.565C15.0845 43.3249 15.7869 45.0127 17.0371 46.2571C18.2873 47.5016 19.983 48.2007 21.7511 48.2007C22.6352 48.2007 23.483 48.5502 24.1082 49.1724C24.7333 49.7947 25.0845 50.6386 25.0845 51.5185V58.1542C25.0845 59.0341 24.7333 59.878 24.1082 60.5002C23.483 61.1225 22.6352 61.1225 21.7511 61.1225C16.4468 61.1225 11.3597 59.3747 7.609 55.6414C3.85827 51.9081 1.75114 46.8447 1.75114 41.565V8.38665C1.75114 6.62676 2.45352 4.93895 3.70376 3.69452C4.954 2.45009 6.64969 1.75098 8.4178 1.75098H18.4178Z" stroke="#09888E" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="27" height="64" viewBox="0 0 27 64" fill="none">
                <path d="M18.4178 1.75098C20.1859 1.75098 21.8816 2.45009 23.1319 3.69452C24.3821 4.93895 25.0845 6.62676 25.0845 8.38665V28.2937C25.0845 30.0535 24.3821 31.7414 23.1319 32.9858C21.8816 34.2302 20.1859 34.9293 18.4178 34.9293C17.5338 34.9293 16.6859 35.2789 16.0608 35.9011C15.4357 36.5233 15.0845 37.3672 15.0845 38.2472V41.565C15.0845 43.3249 15.7869 45.0127 17.0371 46.2571C18.2873 47.5016 19.983 48.2007 21.7511 48.2007C22.6352 48.2007 23.483 48.5502 24.1082 49.1724C24.7333 49.7947 25.0845 50.6386 25.0845 51.5185V58.1542C25.0845 59.0341 24.7333 59.878 24.1082 60.5002C23.483 61.1225 22.6352 61.1225 21.7511 61.1225C16.4468 61.1225 11.3597 59.3747 7.609 55.6414C3.85827 51.9081 1.75114 46.8447 1.75114 41.565V8.38665C1.75114 6.62676 2.45352 4.93895 3.70376 3.69452C4.954 2.45009 6.64969 1.75098 8.4178 1.75098H18.4178Z" stroke="#09888E" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>

          <div className="wwa-testimonial-item">
            <blockquote className="wwa-testimonial-quote">
              {currentTestimonials[0].quote}
            </blockquote>

            <div className="wwa-testimonial-line"></div>

            <div className="wwa-testimonial-author">
              {currentTestimonials[0].author}
            </div>

            <div className="wwa-testimonial-pagination">
              <span className="dot active"></span>
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>

            <button className="wwa-view-more-btn">View More</button>
          </div>

          <div className="wwa-quote-marks right">
            <div className="wwa-quote-svg-wrapper">
              <svg xmlns="http://www.w3.org/2000/svg" width="27" height="64" viewBox="0 0 27 64" fill="none">
                <path d="M8.41764 1.75098C6.64953 1.75098 4.95384 2.45009 3.7036 3.69452C2.45336 4.93895 1.75098 6.62676 1.75098 8.38665V28.2937C1.75098 30.0535 2.45336 31.7414 3.7036 32.9858C4.95384 34.2302 6.64953 34.9293 8.41764 34.9293C9.3017 34.9293 10.1495 35.2789 10.7747 35.9011C11.3998 36.5233 11.751 37.3672 11.751 38.2472V41.565C11.751 43.3249 11.0486 45.0127 9.79836 46.2571C8.54811 47.5016 6.85242 48.2007 5.08431 48.2007C4.20026 48.2007 3.35241 48.5502 2.72729 49.1724C2.10217 49.7947 1.75098 50.6386 1.75098 51.5185V58.1542C1.75098 59.0341 2.10217 59.878 2.72729 60.5002C3.35241 61.1225 4.20026 61.472 5.08431 61.472C10.3886 61.472 15.4757 59.3747 19.2264 55.6414C22.9772 51.9081 25.0843 46.8447 25.0843 41.565V8.38665C25.0843 6.62676 24.3819 4.93895 23.1317 3.69452C21.8814 2.45009 20.1858 1.75098 18.4176 1.75098H8.41764Z" stroke="#09888E" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="27" height="64" viewBox="0 0 27 64" fill="none">
                <path d="M8.41764 1.75098C6.64953 1.75098 4.95384 2.45009 3.7036 3.69452C2.45336 4.93895 1.75098 6.62676 1.75098 8.38665V28.2937C1.75098 30.0535 2.45336 31.7414 3.7036 32.9858C4.95384 34.2302 6.64953 34.9293 8.41764 34.9293C9.3017 34.9293 10.1495 35.2789 10.7747 35.9011C11.3998 36.5233 11.751 37.3672 11.751 38.2472V41.565C11.751 43.3249 11.0486 45.0127 9.79836 46.2571C8.54811 47.5016 6.85242 48.2007 5.08431 48.2007C4.20026 48.2007 3.35241 48.5502 2.72729 49.1724C2.10217 49.7947 1.75098 50.6386 1.75098 51.5185V58.1542C1.75098 59.0341 2.10217 59.878 2.72729 60.5002C3.35241 61.1225 4.20026 61.472 5.08431 61.472C10.3886 61.472 15.4757 59.3747 19.2264 55.6414C22.9772 51.9081 25.0843 46.8447 25.0843 41.565V8.38665C25.0843 6.62676 24.3819 4.93895 23.1317 3.69452C21.8814 2.45009 20.1858 1.75098 18.4176 1.75098H8.41764Z" stroke="#09888E" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <img src="/v5.png" alt="" className="wwa-testimonials-v5" />
    </section>
  );
};

export default WhoWeAreTestimonials;
