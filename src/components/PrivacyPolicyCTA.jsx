import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './PrivacyPolicyCTA.css';

const PrivacyPolicyCTA = () => {

  const navigate = useNavigate();
  const { pathname } = useLocation();

  const scrollToConnect = () => {

    if (pathname === '/') {

      const el = document.getElementById('connect');

      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }

    } else {

      navigate('/');

      setTimeout(() => {

        const el = document.getElementById('connect');

        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }

      }, 400);
    }
  };

  return (

    <section className="pp-cta">

      <div className="pp-cta-container">

        {/* Left Side Image */}
        <div className="pp-cta-image-side">

          <img
            src="/privacy2.png"
            alt="AI Ventures Discussion"
            className="pp-cta-img"
          />

        </div>

        {/* Right Side Content */}
        <div className="pp-cta-content-side">

          <div className="pp-cta-content">

            <h2 className="pp-cta-title">
              We Don't Advise on AI Ventures. We Build Them.
            </h2>

            <div className="pp-cta-text">

              <p className="pp-cta-pitch">
                No pitch. Just clarity.
              </p>

            </div>

            <button
              className="pp-cta-btn"
              onClick={scrollToConnect}
            >
              Let's Talk
            </button>

          </div>

        </div>

      </div>

    </section>
  );
};

export default PrivacyPolicyCTA;