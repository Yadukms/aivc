import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Goldmine from './components/Goldmine';
import AlreadyHave from './components/AlreadyHave';
import TurnIP from './components/TurnIP';
import Testimonials from './components/Testimonials';
import AlignedExecution from './components/AlignedExecution';
import Possible from './components/Possible';
import StartWithClarity from './components/StartWithClarity';
import ConnectWithUs from './components/ConnectWithUs';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Goldmine />
      <AlreadyHave />
      <TurnIP />
      <Testimonials />
      <AlignedExecution />
      <Possible />
      <StartWithClarity />
      <ConnectWithUs />
      <Footer />
      <main>
        {/* Other sections will go here */}
      </main>
    </div>
  );
}

export default App;
