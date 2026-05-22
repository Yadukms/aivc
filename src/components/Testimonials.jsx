import React, { useState } from 'react';
import './Testimonials.css';

const testimonialsData = [
  {
    quote: "Commercialized our SaaS platform — instrumental in the $42M acquisition by Intuit",
    author: "Managing Director, Private Equity Firm",
    image: "/test1.png"
  },
  {
    quote: "5x’d our pipeline within months through value-based positioning. Championed the initiative to productize our revenue model—and improved the sales funnel, conversion rates, and profitability in the process.",
    author: "CEO, Blockchain/AI Tech Firm",
    image: "/testimonial3.png"
  },
  {
    quote: "Grew revenue from $40M to $62M, doubled EBITDA, and secured $13M in new capital from Kohlberg and The Carlyle Group.",
    author: "Managing Director, Private Equity Firm",
    image: "/testimonial2.png"
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const currentTestimonial = testimonialsData[activeIndex];

  return (
    <section className="testimonials">
      <div className="testimonials-container">
        <h2 className="testimonials-title">What Our Clients Say</h2>

        <div className="testimonials-content">
          <div className="testimonials-image-side">
            <svg className="parallelogram-bg" xmlns="http://www.w3.org/2000/svg" width="588" height="542" viewBox="0 0 588 542" fill="none">
              <path d="M0 150L588 0V541.294L0 468.136V150Z" fill="#AAC2C2" />
            </svg>
            <div className="image-frame">
              <img src={currentTestimonial.image} alt="Client collaboration" className="client-img" />
            </div>
          </div>

          <div className="testimonials-text-side">
            <div className="testimonial-quote-wrapper">
              <div className="quote-icon-top">
                <img src="/q1.svg" alt="Quote start" className="quote-mark" />
              </div>

              <blockquote className="testimonial-quote">
                {currentTestimonial.quote}
              </blockquote>

              <div className="quote-icon-bottom">
                <img src="/q2.svg" alt="Quote end" className="quote-mark" />
              </div>
            </div>

            <div className="testimonial-author">
              {currentTestimonial.author}
            </div>

            <div className="pagination-dots">
              {testimonialsData.map((_, index) => (
                <span
                  key={index}
                  className={`dot ${activeIndex === index ? 'active' : ''}`}
                  onClick={() => setActiveIndex(index)}
                ></span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
