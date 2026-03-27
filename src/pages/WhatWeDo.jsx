import React from 'react';
import WhatWeDoHero from '../components/WhatWeDoHero';
import WhatWeDoOpportunity from '../components/WhatWeDoOpportunity';
import WhatWeDoHow from '../components/WhatWeDoHow';
import WhatWeDoPhases from '../components/WhatWeDoPhases';
import WhatWeDoWho from '../components/WhatWeDoWho';
import WhatWeDoChanges from '../components/WhatWeDoChanges';
import WhatWeDoValuation from '../components/WhatWeDoValuation';
import WhatWeDoOutro from '../components/WhatWeDoOutro';
import WhatWeDoCTA from '../components/WhatWeDoCTA';

const WhatWeDo = () => {
  return (
    <main className="what-we-do-page">
      <WhatWeDoHero />
      <WhatWeDoOpportunity />
      <WhatWeDoHow />
      <WhatWeDoPhases />
      <WhatWeDoWho />
      <WhatWeDoChanges />
      {/* <WhatWeDoValuation />
      <WhatWeDoOutro /> */}
      <WhatWeDoCTA />
    </main>
  );
};

export default WhatWeDo;
