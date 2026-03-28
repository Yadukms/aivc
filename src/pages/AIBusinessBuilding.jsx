import React from 'react';
import AIBusinessBuildingHero from '../components/AIBusinessBuildingHero';
import AIBusinessBuildingParadox from '../components/AIBusinessBuildingParadox';
import AIBusinessBuildingAction from '../components/AIBusinessBuildingAction';
import AIBusinessBuildingHow from '../components/AIBusinessBuildingHow';
import AIBusinessBuildingWhy from '../components/AIBusinessBuildingWhy';
import AIBusinessBuildingPartner from '../components/AIBusinessBuildingPartner';
import AIBusinessBuildingDifferent from '../components/AIBusinessBuildingDifferent';
import AIBusinessBuildingReady from '../components/AIBusinessBuildingReady';

const AIBusinessBuilding = () => {
  return (
    <main className="ai-business-page">
      <AIBusinessBuildingHero />
      <AIBusinessBuildingParadox />
      <AIBusinessBuildingAction />
      <AIBusinessBuildingHow />
      <AIBusinessBuildingWhy />
      <AIBusinessBuildingPartner />
      <AIBusinessBuildingDifferent />
      <AIBusinessBuildingReady />
      {/* Next sections will be added here */}
    </main>
  );
};

export default AIBusinessBuilding;
