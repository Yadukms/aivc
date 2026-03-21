import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="testimonials-container">
        <h2 className="testimonials-title">What Our Clients Say</h2>
        
        <div className="testimonials-content">
          <div className="testimonials-image-side">
            <div className="parallelogram-bg"></div>
            <div className="image-frame">
              <img src="/img2.jpg" alt="Client collaboration" className="client-img" />
            </div>
          </div>
          
          <div className="testimonials-text-side">
            <div className="quote-icon">
              <svg width="45" height="34" viewBox="0 0 45 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 20.3704C0 9.12346 8.16667 0 17.5 0V11.1481C12.8333 11.1481 10.5 14.2222 10.5 17.2963V20.3704H17.5V34H0V20.3704ZM27.5 20.3704C27.5 9.12346 35.6667 0 45 0V11.1481C40.3333 11.1481 38 14.2222 38 17.2963V20.3704H45V34H27.5V20.3704Z" fill="#09888E"/>
              </svg>
            </div>
            
            <blockquote className="testimonial-quote">
              "5x'd our pipeline within months through value-based positioning. Championed the initiative to productize our revenue model — and improved funnel health, conversion rates, and profitability in the process"
            </blockquote>
            
            <div className="testimonial-divider"></div>
            
            <div className="testimonial-author">
              CEO, Blockchain/AI Tech Firm
            </div>
            
            <div className="pagination-dots">
              <span className="dot active"></span>
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
