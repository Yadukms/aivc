import React from 'react';
import './WhoWeArePartner.css';

const WhoWeArePartner = () => {
  return (
    <section className="wwa-partner">
      <div className="wwa-partner-container">
        <h2 className="wwa-partner-section-title">Managing Partner Perspective</h2>
        
        <div className="wwa-partner-content">
          <div className="wwa-partner-image-side">
            <div className="wwa-partner-image-wrapper">
              <img src="/b3.png" alt="Sherri Sklar" className="wwa-partner-portrait" />
              <img src="/v1.png" alt="" className="wwa-partner-v1" />
              <img src="/v2.png" alt="" className="wwa-partner-v2" />
            </div>
          </div>
          
          <div className="wwa-partner-text-side">
            <div className="wwa-partner-quote-icon">
              <svg width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.6056 7.22656C20.8826 7.22656 22.1074 7.73386 23.0103 8.63684C23.9133 9.53983 24.4206 10.7645 24.4206 12.0416V26.4866C24.4206 27.7636 23.9133 28.9883 23.0103 29.8913C22.1074 30.7943 20.8826 31.3016 19.6056 31.3016C18.9671 31.3016 18.3548 31.5552 17.9033 32.0067C17.4518 32.4582 17.1981 33.0706 17.1981 33.7091V36.1166C17.1981 37.3936 17.7054 38.6183 18.6084 39.5213C19.5114 40.4243 20.7361 40.9316 22.0131 40.9316C22.6516 40.9316 23.264 41.1852 23.7155 41.6367C24.167 42.0882 24.4206 42.7006 24.4206 43.3391V48.1541C24.4206 48.7926 24.167 49.4049 23.7155 49.8564C23.264 50.3079 22.6516 50.5616 22.0131 50.5616C18.1821 50.5616 14.5079 49.0397 11.799 46.3307C9.09 43.6218 7.56812 39.9476 7.56812 36.1166V12.0416C7.56812 10.7645 8.07542 9.53983 8.97841 8.63684C9.88139 7.73386 11.1061 7.22656 12.3831 7.22656H19.6056Z" stroke="white" strokeWidth="4.815" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M46.09 7.22656C47.367 7.22656 48.5917 7.73386 49.4947 8.63684C50.3977 9.53983 50.905 10.7645 50.905 12.0416V26.4866C50.905 27.7636 50.3977 28.9883 49.4947 29.8913C48.5917 30.7943 47.367 31.3016 46.09 31.3016C45.4515 31.3016 44.8391 31.5552 44.3876 32.0067C43.9361 32.4582 43.6825 33.0706 43.6825 33.7091V36.1166C43.6825 37.3936 44.1898 38.6183 45.0928 39.5213C45.9958 40.4243 47.2205 40.9316 48.4975 40.9316C49.136 40.9316 49.7484 41.1852 50.1999 41.6367C50.6514 42.0882 50.905 42.7006 50.905 43.3391V48.1541C50.905 48.7926 50.6514 49.4049 50.1999 49.8564C49.7484 50.3079 49.136 50.5616 48.4975 50.5616C44.6664 50.5616 40.9923 49.0397 38.2833 46.3307C35.5744 43.6218 34.0525 39.9476 34.0525 36.1166V12.0416C34.0525 10.7645 34.5598 9.53983 35.4628 8.63684C36.3658 7.73386 37.5905 7.22656 38.8675 7.22656H46.09Z" stroke="white" strokeWidth="4.815" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            
            <blockquote className="wwa-partner-quote">
              The next generation of transformational companies already exists, 
              hidden gems inside traditional services firms, waiting for the 
              right partnership to unlock their potential. We are that catalyst
            </blockquote>
            
            <div className="wwa-partner-divider"></div>
            
            <div className="wwa-partner-info">
              <div className="wwa-partner-bio">
                <h3 className="wwa-partner-name">Sherri Sklar</h3>
                <p className="wwa-partner-role">Managing Partner</p>
              </div>
              
              <div className="wwa-partner-actions-right">
                <div className="wwa-partner-socials">
                  <a href="#" className="wwa-social-link"><span className="social-icon twitter"></span></a>
                  <a href="#" className="wwa-social-link"><span className="social-icon linkedin"></span></a>
                </div>

                <div className="wwa-partner-nav">
                  <button className="wwa-nav-btn prev">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M19 12H5M5 12L12 19M5 12L12 5" />
                    </svg>
                  </button>
                  <button className="wwa-nav-btn next">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="wwa-partner-corners">
        <img src="/corner1.png" alt="" className="wwa-corner1" />
        <img src="/corner2.png" alt="" className="wwa-corner2" />
      </div>
    </section>
  );
};

export default WhoWeArePartner;
