import React from 'react';
import './WhoWeAreCatalysts.css';

const WhoWeAreCatalysts = () => {
  return (
    <section className="wwa-catalysts">
      <div className="wwa-catalysts-container">
        <div className="wwa-catalysts-left">
          <img src="/catalyst1.png" alt="We Are Your Catalysts" className="wwa-catalysts-img" />
        </div>
        <div className="wwa-catalysts-right">
          <div className="wwa-catalysts-content">
            <h2 className="wwa-catalysts-title">We Are Your Catalysts</h2>
            <p className="wwa-catalysts-subtitle">
              In this era of transformation, services firms don't need consultants. <span className="wwa-teal">They need catalysts.</span>
            </p>
            <div className="wwa-catalysts-divider"></div>
            <div className="wwa-catalysts-points">
              <p>Catalysts who <span className="wwa-teal">generate real change.</span></p>
              <p>Who convert expertise into <span className="wwa-teal">scalable product businesses.</span></p>
              <p>Who elevate strong companies into <span className="wwa-teal">category-defining ones.</span></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreCatalysts;
