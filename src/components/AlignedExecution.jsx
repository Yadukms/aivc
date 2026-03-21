import React from 'react';
import './AlignedExecution.css';

const AlignedExecution = () => {
  const points = [
    "Most firms charge retainers to explore transformation",
    "We assume execution risk.",
    "No dilution required to begin.",
    "You retain ownership"
  ];

  // Universal path data for both SVGs
  const svgPath = "M261.345 -4.53731e-05L1315.63 3.58745V1107.95H0L261.345 -4.53731e-05Z";
  const svgViewBox = "0 0 1012 1108";

  return (
    <section className="aligned-execution">
      <div className="ae-container">
        <div className="ae-content-wrapper">
          {/* 1. Content Box with Unified SVG Background */}
          <div className="ae-text-box">
            <div className="ae-text-svg-bg">
              {/* <svg width="1012" height="1108" viewBox={svgViewBox} fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ transform: 'scaleX(-1)' }}>
                <path d={svgPath} fill="#0B7175" />
              </svg> */}
              <svg
                width="1012"
                height="1108"
                viewBox="0 0 1012 1108"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 0H1012L870 1108H0V0Z"
                  fill="#0B7175"
                />
              </svg>

              {/* <svg
                width="1012"
                height="1108"
                viewBox={svgViewBox}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                style={{ transform: 'scaleX(1)' }}
              >
                <path d={svgPath} fill="#0B7175" />
              </svg> */}
            </div>

            <div className="ae-content">
              <h2 className="ae-title">Aligned Execution</h2>
              <p className="ae-subtitle">
                We don't charge for ambition. We participate in results.
              </p>

              <ul className="ae-points">
                {points.map((point, index) => (
                  <li key={index} className="ae-point">
                    <div className="ae-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="11" stroke="#00D1D4" strokeWidth="2" />
                        <path d="M7 12.5L10.5 16L17 9" stroke="#00D1D4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span className="ae-text">{point}</span>
                  </li>
                ))}
              </ul>

              <p className="ae-footer-text">
                We co-build and co-invest through structured revenue participation.
              </p>
            </div>
          </div>

          <div className="ae-accent-svg">
            <svg
              width="313"
              height="955"
              viewBox="0 0 313 955"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <path
                d="M237.023 1.12843e-05L312.173 -0.000197377L74.9138 954.02L-2.3376e-05 954.683L237.023 1.12843e-05Z"
                fill="#0B5255"
              />
            </svg>
          </div>

          {/* 2. Image Box with Identical Unified SVG Shape */}
          <div className="ae-image-box">
            <svg width="1012" height="1108" viewBox={svgViewBox} fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" preserveAspectRatio="none">
              <path d={svgPath} fill="url(#pattern_unified_ae)" />
              <defs>
                <pattern id="pattern_unified_ae" patternContentUnits="objectBoundingBox" width="1" height="1">
                  <use xlinkHref="#image_unified_ae" transform="matrix(0.00112119 0 0 0.00133241 -0.406046 -0.0196144)" />
                </pattern>
                <image id="image_unified_ae" width="1264" height="842" preserveAspectRatio="none" xlinkHref="/img3.png" />
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AlignedExecution;
