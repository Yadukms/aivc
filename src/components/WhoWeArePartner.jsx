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
              <img src="/sherry.png" alt="Sherri Sklar" className="wwa-partner-portrait" />
            </div>
          </div>
          
          <div className="wwa-partner-text-side">
            <div className="wwa-partner-quote-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="58" height="58" viewBox="0 0 58 58" fill="none">
                <path d="M19.6059 7.22656C20.8829 7.22656 22.1076 7.73386 23.0106 8.63684C23.9136 9.53983 24.4209 10.7645 24.4209 12.0416V26.4866C24.4209 27.7636 23.9136 28.9883 23.0106 29.8913C22.1076 30.7943 20.8829 31.3016 19.6059 31.3016C18.9674 31.3016 18.355 31.5552 17.9035 32.0067C17.452 32.4582 17.1984 33.0706 17.1984 33.7091V36.1166C17.1984 37.3936 17.7057 38.6183 18.6087 39.5213C19.5117 40.4243 20.7364 40.9316 22.0134 40.9316C22.6519 40.9316 23.2643 41.1852 23.7158 41.6367C24.1673 42.0882 24.4209 42.7006 24.4209 43.3391V48.1541C24.4209 48.7926 24.1673 49.4049 23.7158 49.8564C23.2643 50.3079 22.6519 50.5616 22.0134 50.5616C18.1823 50.5616 14.5082 49.0397 11.7992 46.3307C9.09028 43.6218 7.5684 39.9476 7.5684 36.1166V12.0416C7.5684 10.7645 8.07569 9.53983 8.97868 8.63684C9.88167 7.73386 11.1064 7.22656 12.3834 7.22656H19.6059Z" stroke="white" strokeWidth="4.815" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M46.0903 7.22656C47.3673 7.22656 48.592 7.73386 49.495 8.63684C50.398 9.53983 50.9053 10.7645 50.9053 12.0416V26.4866C50.9053 27.7636 50.398 28.9883 49.495 29.8913C48.592 30.7943 47.3673 31.3016 46.0903 31.3016C45.4518 31.3016 44.8394 31.5552 44.3879 32.0067C43.9364 32.4582 43.6828 33.0706 43.6828 33.7091V36.1166C43.6828 37.3936 44.1901 38.6183 45.0931 39.5213C45.996 40.4243 47.2208 40.9316 48.4978 40.9316C49.1363 40.9316 49.7486 41.1852 50.2001 41.6367C50.6516 42.0882 50.9053 42.7006 50.9053 43.3391V48.1541C50.9053 48.7926 50.6516 49.4049 50.2001 49.8564C49.7486 50.3079 49.1363 50.5616 48.4978 50.5616C44.6667 50.5616 40.9926 49.0397 38.2836 46.3307C35.5747 43.6218 34.0528 39.9476 34.0528 36.1166V12.0416C34.0528 10.7645 34.5601 9.53983 35.4631 8.63684C36.366 7.73386 37.5908 7.22656 38.8678 7.22656H46.0903Z" stroke="white" strokeWidth="4.815" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            
            <blockquote className="wwa-partner-quote">
              The next generation of transformational companies already exists, 
              hidden gems inside traditional services firms, waiting for the 
              right partnership to unlock their potential. <span style={{ color: '#12D8E2' }}>We are that catalyst.</span>
            </blockquote>
            
            <div className="wwa-partner-divider"></div>
            
            <div className="wwa-partner-info">
              <div className="wwa-partner-bio">
                <h3 className="wwa-partner-name">Sherri Sklar</h3>
                <p className="wwa-partner-role">Managing Partner</p>
                <div className="wwa-partner-socials">
                  <a href="https://www.linkedin.com/in/sherrisklar/" target="_blank" rel="noopener noreferrer" className="wwa-social-link"><span className="social-icon linkedin"></span></a>
                </div>
              </div>
              
              {/* <div className="wwa-partner-actions-right">
                <div className="wwa-partner-nav">
                  <button className="wwa-nav-btn next">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" />
                    </svg>
                  </button>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeArePartner;
