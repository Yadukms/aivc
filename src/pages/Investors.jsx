import React from 'react';
import InvestorsHero from '../components/InvestorsHero';
import InvestorsValue from '../components/InvestorsValue';
import InvestorsLifecycle from '../components/InvestorsLifecycle';
import InstitutionalExecution from '../components/InstitutionalExecution';
import AlignmentModel from '../components/AlignmentModel';
import PartnerWithAIVC from '../components/PartnerWithAIVC';
import WhatThisCreates from '../components/WhatThisCreates';
import IPReady from '../components/IPReady';
import './Investors.css';

const Investors = () => {
  return (
    <main className="investors-page">
      <InvestorsHero />
      <InvestorsValue />
      <InvestorsLifecycle />
      <InstitutionalExecution />
      <AlignmentModel />
      <PartnerWithAIVC />
      <WhatThisCreates />
      <IPReady />
      {/* Sections will be added here */}
    </main>
  );
};

export default Investors;
