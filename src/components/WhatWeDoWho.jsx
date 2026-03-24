import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './WhatWeDoWho.css';

const WhatWeDoWho = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="wwd-who" ref={ref}>
      <div className="wwd-who-container">
        <motion.div 
          className="wwd-who-left"
          initial={{ x: -50, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="wwd-who-title">Who This Is For</h2>
          <p className="wwd-who-highlight">
            If your competitive advantage lives in structured expertise that enterprise clients depend on, it can become a product business. We're the partner that makes it happen.
          </p>
        </motion.div>
        
        <motion.div 
          className="wwd-who-right"
          initial={{ x: 50, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <p>
            Professional and Business Services Firms selling traditional services. Firms with structured, repeatable intelligence woven into their delivery. Firms ambitious enough to evolve beyond labor-based revenue — and disciplined enough to do it without surrendering equity.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatWeDoWho;
