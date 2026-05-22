import React, { useState, useEffect } from 'react';
import './PrivacyPolicyContent.css';

const tabs = ['Terms of Use', 'Privacy Policy', 'Disclaimers', 'Contact Information & Other Details'];

/* ── Tab content data ── */
const content = {
  'Terms of Use': {
    index: 1,
    title: 'Terms of Use',
    intro:
      'We don\'t advise from the sidelines. We build actual AI businesses alongside you — embedding as fractional operating partners who own execution from product design through commercial launch and capital facilitation',
    sections: [
      {
        id: '1.1',
        heading: 'The Situations',
        body: 'By accessing or using the AI Venture Catalyst website (the "Site"), you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use the Site.',
      },
      {
        id: '1.2',
        heading: 'Services Description',
        body: 'AI Venture Catalyst ("AIVC," "we," "us," or "our") provides AI business transformation consulting and operating partner services to B2B services companies, PE firms, and related entities. The information on this Site is for general informational purposes only and does not constitute professional advice.',
      },
      {
        id: '1.3',
        heading: 'Use of Site',
        body: 'You may use this Site for lawful purposes only. You agree not to: · Use the Site in any way that violates applicable laws or regulations · Attempt to gain unauthorized access to any portion of the Site · Interfere with or disrupt the Site or servers · Collect or harvest information from the Site using automated means',
      },
      {
        id: '1.4',
        heading: 'Intellectual Property',
        body: 'All content on this Site, including text, graphics, logos, and software, is the property of AIVC or its licensors and is protected by intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.',
      },
      {
        id: '1.5',
        heading: 'Links to Third-Party Sites',
        body: 'This Site may contain links to third-party websites. We are not responsible for the content or practices of these external sites.',
      },
      {
        id: '1.6',
        heading: 'Limitation of Liability',
        body: 'To the fullest extent permitted by law, AIVC shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of the Site.',
      },
      {
        id: '1.7',
        heading: 'Changes to Terms',
        body: 'We reserve the right to modify these Terms at any time. Continued use of the Site after changes constitutes acceptance of the modified Terms.',
      },
    ],
  },

  'Privacy Policy': {
    index: 2,
    title: 'Privacy Policy',
    intro:
      'We don\'t advise from the sidelines. We build actual AI businesses alongside you—embedding as fractional operating partners who own execution from product design through commercial launch and capital facilitation.',
    sections: [
      {
        id: '2.1',
        heading: 'Information We Collect',
        body: 'When you visit our Site or contact us, we may collect: Contact information: Name, email address, phone number, company name, usage type IP address, browser type, pages visited, time spent on pages Consultation Requests Information provided in consultation forms or email correspondence',
      },
      {
        id: '2.2',
        heading: 'How We Use Your Information',
        body: 'We use collected information to: Respond to your inquiries and schedule consultations Provide information about our services Improve our Site and services Send occasional updates about AIVC (with your consent)',
      },
      {
        id: '2.3',
        heading: 'Information Sharing',
        body: 'We do not sell, trade, or rent your personal information to third parties. We may share information with: Service providers who assist in operating our Site or conducting our business Legal authorities when required by law',
      },
      {
        id: '2.4',
        heading: 'Data Security',
        body: 'We implement reasonable security measures to protect your personal information. However, no method of transmission over the internet is 100% secure.',
      },
      {
        id: '2.5',
        heading: 'Cookies and Tracking',
        body: 'Our Site may use cookies and similar tracking technologies to enhance user experience. You can control cookie preferences through your browser settings.',
      },
      // {
      //   id: '2.6',
      //   heading: 'Your Rights',
      //   body: 'Depending on your jurisdiction, you may have rights to: Access your personal information Correct inaccurate information Request deletion of your information Opt out of marketing communications',
        
      // },
      {
  id: '2.6',
  heading: 'Your Rights',
  body: (
    <>
      <br></br>Depending on your jurisdiction, you may have rights to:
      Access your personal information
      Correct inaccurate information
      Request deletion of your information
      Opt out of marketing communications<br/>
      <span className="pp-highlight-text">
      To exercise these rights, contact us at privacy@aiventurecatalyst.com.
      </span>
    </>
  ),
},
      {
        id: '2.7',
        heading: 'Children\'s Privacy',
        body: 'Our Site is not directed to individuals under 18 years of age. We do not knowingly collect information from children.',
      },
      {
        id: '2.8',
        heading: 'International Data Transfers',
        body: 'If you are accessing our Site from outside the United States, please be aware that your information may be transferred to and processed in the United States.',
      },
      {
        id: '2.9',
        heading: 'Changes to Privacy Policy',
        body: 'We may update this Privacy Policy periodically. The "Last Updated" date at the top indicates when changes were last made.',
      },
    ],
  },

'Disclaimers': {
  index: 3,
  title: 'Disclaimers',
  // intro:
  //   'The information provided on this Site is for general informational purposes only and does not constitute professional, financial, legal, or investment advice.',

  sections: [

    {
      id: '3.1',
      heading: 'No Professional Advice',
      body: (
        <>
          The information provided on this Site is for general informational
          purposes only and does not constitute professional, financial,
          legal, or investment advice. You should consult with appropriate
          professionals before making business decisions.
        </>
      ),
    },

    {
      id: '3.2',
      heading: 'No Guarantee of Results',
      body: (
        <>
          While AIVC strives to deliver value to clients, we cannot guarantee
          specific outcomes, including:
          
           Success in raising growth capital
          
           Specific valuation multiples or exit values
         
           LOI-to-close success rates
           Revenue or EBITDA improvements
      
          Actual results will vary based on numerous factors including
          market conditions, company-specific circumstances, and execution
          quality.
        </>
      ),
    },

    {
      id: '3.3',
      heading: 'Forward-Looking Statements',
      body: (
        <>
          This Site may contain forward-looking statements about potential
          outcomes and industry trends. These statements are based on
          current expectations and assumptions and are subject to risks
          and uncertainties.
        </>
      ),
    },

    {
      id: '3.4',
      heading: 'Case Studies and Testimonials',
      body: (
        <>
          Any case studies, testimonials, or examples provided on this Site
          are for illustrative purposes only. Individual results will vary
          and past performance does not guarantee future results.
        </>
      ),
    },

    {
      id: '3.5',
      heading: 'Third-Party Information',
      body: (
        <>
          Statistics, research findings, and industry data referenced on
          this Site are sourced from third parties we believe to be
          reliable. However, we do not independently verify all such
          information and cannot guarantee its accuracy.
        </>
      ),
    },

    {
      id: '3.6',
      heading: 'No Client Relationship',
      body: (
        <>
          Visiting this Site or submitting a consultation request does not
          create a client relationship with AIVC. Client relationships are
          established through formal engagement agreements only.
        </>
      ),
    },

    {
      id: '3.7',
      heading: 'Confidentiality Notice',
      body: (
        <>
          While we treat consultation inquiries with discretion,
          confidential information should not be submitted through this
          Site without a Non-Disclosure Agreement in place. Contact us
          directly to arrange confidentiality protections before sharing
          sensitive business information.
        </>
      ),
    },

    {
      id: '3.8',
      heading: 'Service Availability',
      body: (
        <>
          AIVC services are provided subject to availability and mutual
          agreement. We reserve the right to decline engagements that are
          not a good fit for our capabilities or values.
        </>
      ),
    },

  ],
},

'Contact Information & Other Details': {
  index: 4,
  title: 'Contact & Other Details',

  intro: '',

  sections: [

    {
      id: '4.',
      heading: 'Contact Information',
      body: (
        <>
          For questions about these Terms & Conditions, Privacy Policy,
          or Disclaimers, please contact:
          <br />
          AI Venture Catalyst

          <br />
          <br />

          <span className="pp-highlight-text">
            Email: legal@aiventurecatalyst.com
          </span>

          <br />

          <span className="pp-highlight-text">
            Website: www.aiventurecatalyst.com
          </span>
        </>
      ),
    },

    {
      id: '5.',
      heading: 'Governing Law',
      body: (
        <>
          These Terms shall be governed by and construed in accordance
          with the laws of [State/Jurisdiction], without regard to its
          conflict of law provisions.
        </>
      ),
    },

    {
      id: '6.',
      heading: 'Severability',
      body: (
        <>
          If any provision of these Terms is found to be unenforceable
          or invalid, that provision shall be limited or eliminated to
          the minimum extent necessary, and the remaining provisions
          shall remain in full force and effect.
        </>
      ),
    },

    {
      id: '',
      heading: '',
      body: (
        <span className="pp-highlight-text pp-important-note">
          NOTICE: This document is a template only. Consult with qualified
          legal counsel to ensure compliance with applicable laws and
          regulations in your jurisdiction.
        </span>
      ),
    },

  ],
},
};

const PrivacyPolicyContent = ({ initialTab = 'Terms of Use' }) => {

  const [activeTab, setActiveTab] = useState(initialTab);

  useEffect(() => {
    setActiveTab(initialTab);
  }, [initialTab]);

  const data = content[activeTab];

  return (
    <section className="pp-content">

      {/* Tab navigation */}
      <div className="pp-tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`pp-tab${activeTab === tab ? ' pp-tab--active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content body */}
      <div className="pp-content-container">

        <h2 className="pp-section-number-title">
          <span className="pp-number">{data.index}.</span> {data.title}
        </h2>

        <p className="pp-intro">{data.intro}</p>

        <div className="pp-subsections">
          {data.sections.map((s) => (
            <div key={s.id} className="pp-subsection">

              <h3 className="pp-subsection-heading">
                {s.id} {s.heading}
              </h3>

              <p className="pp-subsection-body">
                {s.body}
              </p>

            </div>
          ))}
        </div>

      </div>

    </section>
  );
};

export default PrivacyPolicyContent;