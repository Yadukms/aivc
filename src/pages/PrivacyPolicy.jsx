import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import PrivacyPolicyHero from '../components/PrivacyPolicyHero';
import PrivacyPolicyContent from '../components/PrivacyPolicyContent';
import PrivacyPolicyCTA from '../components/PrivacyPolicyCTA';

import './PrivacyPolicy.css';

const PrivacyPolicy = () => {

  // Scroll to top when page opens
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const location = useLocation();

  // Get active tab from footer navigation
  const initialTab =
    location.state?.activeTab || 'Terms of Use';

  return (
    <main className="privacy-policy-page">

      <PrivacyPolicyHero />

      <PrivacyPolicyContent
        initialTab={initialTab}
      />

      <PrivacyPolicyCTA />

    </main>
  );
};

export default PrivacyPolicy;