import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './WhatWeDoValuation.css';

const WhatWeDoValuation = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="wwd-val" ref={ref}>
      <motion.div
        className="wwd-val-image"
        style={{ backgroundImage: `url('/13.png')` }}
        initial={{ opacity: 0, scale: 1.05 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.05 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      ></motion.div>

      <div className="wwd-val-content">
        <motion.svg
          className="wwd-val-shape-dark"
          xmlns="http://www.w3.org/2000/svg"
          width="273" height="711" viewBox="0 0 273 711" fill="none"
          initial={{ x: 100, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <defs>
            <linearGradient id="dark-shape-grad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="70%" stopColor="#168589" />
              <stop offset="72.8%" stopColor="#0C3237" />
              <stop offset="100%" stopColor="#0C3237" />
            </linearGradient>
          </defs>
          <path d="M217 0H273L56 711H0L217 0Z" fill="url(#dark-shape-grad)" />
        </motion.svg>

        <motion.svg
          className="wwd-val-shape-cyan"
          xmlns="http://www.w3.org/2000/svg"
          width="231" height="537" viewBox="0 0 231 537" fill="none"
          initial={{ x: 100, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <path d="M164 0H231L67 537H0L164 0Z" fill="#2FBDC3" />
        </motion.svg>

        {/* New Triangular accent connector */}
        <motion.svg
          className="wwd-val-shape-cyan-connect"
          width="29" height="53" viewBox="0 0 29 53" fill="none" xmlns="http://www.w3.org/2000/svg"
          initial={{ x: 50, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
        >
          <path d="M19.9745 52.6548L0 0L28.7546 25.5865L19.9745 52.6548Z" fill="#17787C" />
        </motion.svg>

        <motion.svg
          className="wwd-val-shape-white"
          xmlns="http://www.w3.org/2000/svg"
          width="95" height="194" viewBox="0 0 95 194" fill="none"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { x: 0, opacity: 1 } : { x: 0, opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
        >
          <path d="M58.5524 0L94.0445 46.8973L45.1537 194.394H0L58.5524 0Z" fill="#0C3237" />
        </motion.svg>

        <motion.svg
          className="wwd-val-shape-bg"
          xmlns="http://www.w3.org/2000/svg"
          width="992" height="857" viewBox="0 0 992 857" fill="none"
          initial={{ x: 100, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        >
          <path d="M286.901 -0.730469H807.034H993.565V858.822H0L286.901 -0.730469Z" fill="#075F62" />
        </motion.svg>

        <motion.div
          className="wwd-val-text"
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
        >
          <p>
            Your valuation transforms. By developing AI product revenue, valuation increases by as much as 25 – 30%. And for those entities that move toward creating a carve out, you're looking at valuation multiples of 16 – 18X EBITDA or higher! That's not incremental improvement. That's a fundamentally different conversation with buyers, investors, or partners.
          </p>
        </motion.div>
      </div>

      <div className="wwd-val-footer-bar"></div>
    </section>
  );
};

export default WhatWeDoValuation;
