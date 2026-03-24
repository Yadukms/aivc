import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './WhatWeDoChanges.css';

const WhatWeDoChanges = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="wwd-changes" ref={ref}>
      <div className="wwd-changes-container">
        <motion.div 
          className="wwd-changes-left"
          initial={{ x: -50, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="wwd-changes-title">What Changes for You</h2>
          <p>
            New recurring revenue emerges — product revenue that scales independently of headcount. The intelligence you've been delivering through services starts generating income on its own, month after month, without adding staff.
          </p>
        </motion.div>
        
        <motion.div 
          className="wwd-changes-right"
          initial={{ x: 50, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <p className="wwd-changes-highlight">
            When your proprietary IP becomes an AI product, the economics of your entire business shift.
          </p>
          <p>
            Your competitive position strengthens. AI-native competitors are entering every sector, built from day one around speed and automation. A productized AI offering doesn't just keep you competitive — it puts you ahead, because you have something they can't easily replicate: years of strong enterprise relationships and domain expertise now powered by AI.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatWeDoChanges;
