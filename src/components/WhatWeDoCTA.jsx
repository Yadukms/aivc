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
            <p>Is Your IP Ready to Become an AI Business?</p>
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

      {/* NFS-Style continuous moving arrows */}
      <div className="wwd-cta-shapes">
        {[0, 1, 2].map((i) => (
          <motion.svg
            key={i}
            className="wwd-cta-shape-1"
            viewBox="0 0 1000 800"
            fill="none"
            initial={{ x: 0, opacity: 0 }}
            animate={isInView ? {
              x: [0, 800],
              opacity: [0, 1, 1, 0]
            } : { x: 0, opacity: 0 }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "linear",
              delay: i * 2,
              times: [0, 0.2, 0.8, 1]
            }}
            style={{ overflow: 'visible' }}
          >
            <path d="M200,0 L800,400 L200,800" stroke="#939393" strokeOpacity="0.19" strokeWidth="180" strokeLinecap="butt" strokeLinejoin="miter" />
          </motion.svg>
        ))}
      </div>
    </section>
  );
};

export default WhatWeDoCTA;
