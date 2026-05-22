import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import Goldmine from '../components/Goldmine';
import HowWeDoIt from '../components/HowWeDoIt';
import Opportunity from '../components/Opportunity';
import AlreadyHave from '../components/AlreadyHave';
import TurnIP from '../components/TurnIP';
import Testimonials from '../components/Testimonials';
import AlignedExecution from '../components/AlignedExecution';
import Presentation from '../components/Presentation';
import Possible from '../components/Possible';
import StartWithClarity from '../components/StartWithClarity';
import ConnectWithUs from '../components/ConnectWithUs';

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo === 'connect-with-us') {
      const connectSection = document.getElementById('connect-with-us');
      if (connectSection) {
        connectSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <main>
      <Hero />
      <Goldmine />
      <HowWeDoIt />
      <Opportunity />
      {/* <Possible />
      <AlreadyHave /> */}
      {/* <TurnIP /> */}
      <Testimonials />
      <StartWithClarity />
      <AlignedExecution />
      <Presentation />
      <div id="connect-with-us">
        <ConnectWithUs />
      </div>
    </main>
  );
};

export default Home;
