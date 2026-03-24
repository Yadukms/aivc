import React from 'react';
import Hero from '../components/Hero';
import Goldmine from '../components/Goldmine';
import AlreadyHave from '../components/AlreadyHave';
import TurnIP from '../components/TurnIP';
import Testimonials from '../components/Testimonials';
import AlignedExecution from '../components/AlignedExecution';
import Possible from '../components/Possible';
import StartWithClarity from '../components/StartWithClarity';
import ConnectWithUs from '../components/ConnectWithUs';

const Home = () => {
  return (
    <main>
      <Hero />
      <Goldmine />
      <AlreadyHave />
      <TurnIP />
      <Testimonials />
      <AlignedExecution />
      <Possible />
      <StartWithClarity />
      <ConnectWithUs />
    </main>
  );
};

export default Home;
