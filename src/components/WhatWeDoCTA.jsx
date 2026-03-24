import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './WhatWeDoCTA.css';

const WhatWeDoCTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="wwd-cta" ref={ref}>
      <div className="wwd-cta-bg" style={{ backgroundImage: "url('/frame1.jpg')" }}></div>
      <div className="wwd-cta-overlay"></div>
      
      <div className="wwd-cta-container">
        <motion.div 
          className="wwd-cta-box"
          initial={{ x: -100, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="wwd-cta-heading">Is Your IP Ready to Become an AI Business?</h2>
          <div className="wwd-cta-text">
            <p>Schedule a 30-minute Venture Readiness Conversation.</p>
            <p>No pitch. Just clarity.</p>
          </div>
          <motion.button 
            className="wwd-cta-button"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Schedule a 30-Minute AI Value Creation Consultation
          </motion.button>
        </motion.div>
      </div>

      {/* Decorative SVG shapes matching original design */}
      <div className="wwd-cta-shapes">
        <motion.svg 
          className="wwd-cta-shape-1"
          xmlns="http://www.w3.org/2000/svg" width="946" height="817" viewBox="0 0 946 817" fill="none"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <path d="M60.6694 -114.73L762.391 340.356L101.271 935.662" stroke="#939393" stroke-opacity="0.19" stroke-width="223"/>
        </motion.svg>
        <motion.svg 
          className="wwd-cta-shape-2"
          xmlns="http://www.w3.org/2000/svg" width="748" height="817" viewBox="0 0 748 817" fill="none"
          initial={{ opacity: 0, x: 100 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <path d="M60.6694 -137.697L762.391 317.389L101.271 912.695" stroke="#939393" stroke-opacity="0.39" stroke-width="223"/>
        </motion.svg>
      </div>
    </section>
  );
};

export default WhatWeDoCTA;
