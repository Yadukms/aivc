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
      image: '/who1.png',
      quote: "5x'd our pipeline within months through value-based positioning. Championed the transition to a scalable product revenue model — improving funnel health, conversion, and profitability across every stage of the business.",
      author: "CEO, Blockchain/AI Tech Firm"
    },
    {
      image: '/who1.png',
      quote: "Grew revenue from $40M to $62M, doubled EBITDA, and secured $13M in new capital from Kohlberg and The Carlyle Group",
      author: "Managing Director, Private Equity Firm"
    },
    {
      image: '/who1.png',
      quote: "Commercialized our SaaS platform — instrumental in the $42M acquisition by Intuit.",
      author: "Chief Operating Officer, SaaS Company"
    },
    {
      image: '/who1.png',
      quote: "Drove a 180-degree turnaround through operational excellence, positioning us for profitable growth.",
      author: "CEO, Cybersecurity SaaS/AI Firm"
    }
  ],
  leadership: [
    {
      image: '/who2.png',
      quote: "Stepped into an underperforming organization and provided a clear, compelling path forward.",
      author: "CHRO, Blockchain/AI Tech Firm"
    },
    {
      image: '/who2.png',
      quote: "Completely transformed the team — new talent, accountability, systems, and metrics-driven results on a global scale. Her relentless pursuit of excellence is contagious.",
      author: "COO, Data & Analytics SaaS/AI Firm"
    },
    {
      image: '/who2.png',
      quote: "A rare leader who embodies humility and fierce resolve. Led us to the best performance our company has experienced.",
      author: "COO, Data & Analytics SaaS/AI Firm"
    }
  ],
  institutional: [
    {
      image: '/who3.png',
      quote: "Recruited the entire executive team and generated 20% growth in 15 months as Interim CEO of a carve-out.",
      author: "Principal, Private Equity Firm"
    },
    {
      image: '/who3.png',
      quote: "Completed the merger integration of four carve-outs, established global operations, and sold to a strategic buyer at 20x EBITDA.",
      author: "Managing Director, Private Equity Firm"
    },
    {
      image: '/who3.png',
      quote: "Secured a $100M+ warehouse line from HSBC, transforming the company from mortgage broker to mortgage bank",
      author: "CEO, Mortgage Bank"
    }
  ],
  strategic: [
    {
      image: '/who4.png',
      quote: "Exceptional strategic foresight with a rare blend of analytical rigor and creative problem-solving. Invaluable in identifying and capitalizing on growth opportunities",
      author: "CEO, Cybersecurity SaaS/AI Firm"
    }
  ]
};

const WhoWeAreTestimonials = () => {
  const [activeTab, setActiveTab] = useState('execution');
  const [activeTestimonialIndex, setActiveTestimonialIndex] = useState(0);

  const currentTestimonials = testimonialsData[activeTab];
  const currentTestimonial = currentTestimonials[activeTestimonialIndex] || currentTestimonials[0];

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    setActiveTestimonialIndex(0);
  };

  const handlePrev = () => {
    setActiveTestimonialIndex((prev) =>
      (prev - 1 + currentTestimonials.length) % currentTestimonials.length
    );
  };

  const handleNext = () => {
    setActiveTestimonialIndex((prev) =>
      (prev + 1) % currentTestimonials.length
    );
  };

  return (
    <section className="wwa-testimonials">
      <div className="wwa-testimonials-container">
        <h2 className="wwa-testimonials-title">What Our Clients Say</h2>

        <div className="wwa-testimonials-tabs">
          {testimonialCategories.map((tab) => (
            <button
              key={tab.id}
              className={`wwa-tab-btn ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => handleTabChange(tab.id)}
            >
              {tab.label}
              {activeTab === tab.id && <div className="active-line"></div>}
            </button>
          ))}
        </div>

        <div className="wwa-testimonials-content">
          <div className="wwa-testimonial-image-col">
            <img src={currentTestimonial.image} alt={activeTab} className="wwa-testimonial-image" />
          </div>

          <div className="wwa-testimonial-text-col">
            <div className="wwa-quote-marks left">
              <div className="wwa-quote-svg-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                  <path d="M16.6683 6.22363C17.7734 6.22363 18.8332 6.66058 19.6146 7.43835C20.396 8.21612 20.835 9.271 20.835 10.3709V22.8128C20.835 23.9127 20.396 24.9676 19.6146 25.7454C18.8332 26.5232 17.7734 26.9601 16.6683 26.9601C16.1158 26.9601 15.5859 27.1786 15.1952 27.5675C14.8045 27.9563 14.585 28.4838 14.585 29.0338V31.1074C14.585 32.2073 15.0239 33.2622 15.8053 34.04C16.5868 34.8177 17.6466 35.2547 18.7516 35.2547C19.3042 35.2547 19.8341 35.4732 20.2248 35.862C20.6155 36.2509 20.835 36.7784 20.835 37.3283V41.4756C20.835 42.0256 20.6155 42.553 20.2248 42.9419C19.8341 43.3308 19.3042 43.5493 18.7516 43.5493C15.4364 43.5493 12.257 42.2384 9.91279 39.9051C7.56859 37.5718 6.25163 34.4072 6.25163 31.1074V10.3709C6.25163 9.271 6.69061 8.21612 7.47202 7.43835C8.25342 6.66058 9.31322 6.22363 10.4183 6.22363H16.6683Z" stroke="#09888E" strokeWidth="2.18864" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M39.5882 6.22363C40.6933 6.22363 41.7531 6.66058 42.5345 7.43835C43.3159 8.21612 43.7549 9.271 43.7549 10.3709V22.8128C43.7549 23.9127 43.3159 24.9676 42.5345 25.7454C41.7531 26.5232 40.6933 26.9601 39.5882 26.9601C39.0357 26.9601 38.5058 27.1786 38.1151 27.5675C37.7244 27.9563 37.5049 28.4838 37.5049 29.0338V31.1074C37.5049 32.2073 37.9438 33.2622 38.7252 34.04C39.5067 34.8177 40.5665 35.2547 41.6715 35.2547C42.2241 35.2547 42.7540 35.862 43.1447 35.862C43.5354 36.2509 43.7549 36.7784 43.7549 37.3283V41.4756C43.7549 42.0256 43.5354 42.553 43.1447 42.9419C42.7540 43.3308 42.2241 43.5493 41.6715 43.5493C38.3563 43.5493 35.1769 42.2384 32.8327 39.9051C30.4885 37.5718 29.1715 34.4072 29.1715 31.1074V10.3709C29.1715 9.271 29.6105 8.21612 30.3919 7.43835C31.1733 6.66058 32.2331 6.22363 33.3382 6.22363H39.5882Z" stroke="#09888E" strokeWidth="2.18864" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>

            <div className="wwa-testimonial-item">
              <blockquote className="wwa-testimonial-quote">
                {currentTestimonial.quote}
              </blockquote>

              <div className="wwa-quote-marks right">
                <div className="wwa-quote-svg-wrapper">
                  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                    <path d="M33.3317 6.22363C32.2266 6.22363 31.1668 6.66058 30.3854 7.43835C29.604 8.21612 29.165 9.271 29.165 10.3709V22.8128C29.165 23.9127 29.604 24.9676 30.3854 25.7454C31.1668 26.5232 32.2266 26.9601 33.3317 26.9601C33.8842 26.9601 34.4141 27.1786 34.8048 27.5675C35.1955 27.9563 35.415 28.4838 35.415 29.0338V31.1074C35.415 32.2073 34.9761 33.2622 34.1947 34.04C33.4132 34.8177 32.3534 35.2547 31.2484 35.2547C30.6958 35.2547 30.1659 35.4732 29.7752 35.862C29.3845 36.2509 29.165 36.7784 29.165 37.3283V41.4756C29.165 42.0256 29.3845 42.553 29.7752 42.9419C30.1659 43.3308 30.6958 43.5493 31.2484 43.5493C34.5636 43.5493 37.743 42.2384 40.0872 39.9051C42.4314 37.5718 43.7484 34.4072 43.7484 31.1074V10.3709C43.7484 9.271 43.3094 8.21612 42.528 7.43835C41.7466 6.66058 40.6868 6.22363 39.5817 6.22363H33.3317Z" stroke="#09888E" strokeWidth="2.18864" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M10.4118 6.22363C9.30672 6.22363 8.24691 6.66058 7.46551 7.43835C6.6841 8.21612 6.24512 9.271 6.24512 10.3709V22.8128C6.24512 23.9127 6.6841 24.9676 7.46551 25.7454C8.24691 26.5232 9.30672 26.9601 10.4118 26.9601C10.9643 26.9601 11.4942 27.1786 11.8849 27.5675C12.2756 27.9563 12.4951 28.4838 12.4951 29.0338V31.1074C12.4951 32.2073 12.0561 33.2622 11.2747 34.04C10.4933 34.8177 9.43352 35.2547 8.32845 35.2547C7.77592 35.2547 7.24601 35.4732 6.85531 35.862C6.46461 36.2509 6.24512 36.7784 6.24512 37.3283V41.4756C6.24512 42.0256 6.46461 42.553 6.85531 42.9419C7.24601 43.3308 7.77592 43.5493 8.32845 43.5493C11.6437 43.5493 14.8231 42.2384 17.1673 39.9051C19.5115 37.5718 20.8285 34.4072 20.8285 31.1074V10.3709C20.8285 9.271 20.3895 8.21612 19.6081 7.43835C18.8267 6.66058 17.7669 6.22363 16.6618 6.22363H10.4118Z" stroke="#09888E" strokeWidth="2.18864" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>

              <div className="wwa-testimonial-line"></div>

              <div className="wwa-testimonial-author">
                {currentTestimonial.author}
              </div>

              <div className="wwa-testimonial-bottom-row">
                <div className="wwa-testimonial-pagination">
                  <button className="wwa-page-btn" onClick={handlePrev}>
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="16" cy="16" r="15.5" stroke="#09888E" />
                      <path d="M19 16H13M13 16L16 13M13 16L16 19" stroke="#09888E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  <span className="wwa-page-text">
                    {activeTestimonialIndex + 1} / {currentTestimonials.length}
                  </span>
                  <button className="wwa-page-btn" onClick={handleNext}>
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="16" cy="16" r="15.5" stroke="#09888E" />
                      <path d="M13 16H19M19 16L16 13M19 16L16 19" stroke="#09888E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>

                {/* <button className="wwa-view-more-btn">View More</button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreTestimonials;
