import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './WhatWeDoOutro.css';

const WhatWeDoOutro = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="wwd-outro" ref={ref}>
      <motion.div 
        className="wwd-outro-content"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <p className="wwd-outro-text-main">
          And you achieve all of this without giving up control. Our revenue-share model means no dilutive equity raise, no new investors at the table, and no loss of decision-making authority. You grow on your terms.
        </p>
        <p className="wwd-outro-text-sub">
          <em>New revenue. Stronger defensibility. Higher valuation. Full ownership. That's what changes. <sup>1</sup>Based on research from : Pepperdine PCMP 2025 · EisnerAmper 2025 · Capstone Partners</em>
        </p>
      </motion.div>
    </section>
  );
};

export default WhatWeDoOutro;
