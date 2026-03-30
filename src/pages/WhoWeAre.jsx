import React from 'react';
import WhoWeAreHero from '../components/WhoWeAreHero';
import WhoWeAreWhy from '../components/WhoWeAreWhy';
import WhoWeAreCatalysts from '../components/WhoWeAreCatalysts';
import WhoWeArePartner from '../components/WhoWeArePartner';
import WhoWeAreLeadership from '../components/WhoWeAreLeadership';
import WhoWeAreTestimonials from '../components/WhoWeAreTestimonials';
import WhoWeAreValues from '../components/WhoWeAreValues';
import WhoWeAreWhyMatters from '../components/WhoWeAreWhyMatters';
import WhoWeAreClarity from '../components/WhoWeAreClarity';
import './WhoWeAre.css';

const WhoWeAre = () => {
  return (
    <main className="who-we-are-page">
      <WhoWeAreHero />
      <WhoWeAreWhy />
      <WhoWeAreCatalysts />
      <WhoWeArePartner />
      <WhoWeAreLeadership />
      <WhoWeAreTestimonials />
      <WhoWeAreValues />
      <WhoWeAreWhyMatters />
      <WhoWeAreClarity />

      {/* Next sections will be added here */}
    </main>
  );
};

export default WhoWeAre;
