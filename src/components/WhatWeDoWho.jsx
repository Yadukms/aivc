import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './WhatWeDoWho.css';

const WhatWeDoWho = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="wwd-who">
      <div className="wwd-who-bg-layer">
        <img src="/r4.png" alt="" className="wwd-who-slants-bg" />
        <img src="/r50.png" alt="" className="wwd-who-r50" />
      </div>

      <div className="wwd-who-wrapper">
        <div className="wwd-who-header">
          <h2 className="wwd-who-title">Who This Is For</h2>
          <p className="wwd-who-intro">
            If your competitive advantage lives in structured expertise that enterprise clients depend on, it can become a product business. We're the partner that makes it happen.
          </p>
        </div>

        <div className="wwd-who-content">
          <div className="wwd-who-image-container">
            <img
              src="/r3.png"
              alt="Professional smiling"
              className="wwd-who-image"
            />
          </div>

          <div className="wwd-who-top-rect"></div>
          <div className="wwd-who-teal-box">
            <p className="teal-box-highlight">
              You're the founder or CEO of a professional or business services firm.
            </p>
            <p className="teal-box-text">
              You've spent years building something real — proprietary methodologies, client data, workflows your team runs every day, frameworks no one else has. Your clients depend on it. Your team delivers it. But right now, the only way you monetize it is by <span className="teal-accent">selling your team's time.</span>
            </p>
            <p className="teal-box-text">
              You're ambitious enough to want more than labor-based revenue — and disciplined enough to do it <span className="teal-accent">without surrendering equity or losing control</span> of what you've built.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoWho;
