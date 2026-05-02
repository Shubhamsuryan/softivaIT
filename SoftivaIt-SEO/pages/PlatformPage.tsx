import React from 'react';
import type { Pillar } from '../types';
import { IngestIcon, UnderstandIcon, ActIcon } from '../components/icons';

const pillars: Pillar[] = [
  {
    icon: <IngestIcon className="h-10 w-10 text-white" />,
    title: 'Ingest',
    description: 'Autonomous agents capture documents from any source. Whether it\'s paper scans, emails, or mobile photos, our platform\'s agents ingest it all.',
    details: [
      'Multi-channel input (Scanners, Mobile, API, Email)',
      'High-quality image pre-processing and enhancement',
      'Automatic document classification and sorting',
      'Scalable to handle millions of documents per day',
    ],
  },
  {
    icon: <UnderstandIcon className="h-10 w-10 text-white" />,
    title: 'Understand',
    description: 'This is the agent\'s cognitive core. We deploy AI agents to extract, structure, and understand data using powerful OCR and ICR engines.',
    details: [
      'Advanced data extraction with template-free AI',
      'Handwriting, checkbox, and signature detection',
      'Table and line-item extraction',
      'Data validation, enrichment, and cross-referencing',
    ],
  },
  {
    icon: <ActIcon className="h-10 w-10 text-white" />,
    title: 'Act',
    description: 'Our agents act on the data, seamlessly integrating it into your existing systems, triggering workflows, and executing business processes autonomously.',
    details: [
      'Flexible data export in multiple formats (JSON, XML, CSV)',
      'Direct integration with ERP, CRM, and other business systems',
      'Automated workflow triggers and notifications',
      'Comprehensive analytics and reporting dashboards',
    ],
  },
];

const PillarCard: React.FC<{ pillar: Pillar; index: number }> = ({ pillar, index }) => (
    <div className="bg-white rounded-2xl border border-neutral-200 p-8 transform hover:-translate-y-2 transition-transform duration-300">
        <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6 mb-6">
            <div className="flex-shrink-0 bg-primary text-white p-4 rounded-lg">
                {pillar.icon}
            </div>
            <div>
                <h3 className="text-2xl font-bold text-neutral-900">{pillar.title}</h3>
                <p className="mt-1 text-neutral-600">{pillar.description}</p>
            </div>
        </div>
        <ul className="space-y-3 pl-0 sm:pl-[76px]">
            {pillar.details.map((detail, i) => (
                <li key={i} className="flex items-start">
                    <svg className="w-6 h-6 text-primary mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span className="text-neutral-700">{detail}</span>
                </li>
            ))}
        </ul>
    </div>
);


const PlatformPage: React.FC = () => {
  return (
    <div className="bg-neutral-100">
      <div className="bg-accent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-primary">Our Platform Expertise</h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-neutral-600">
            We leverage our deep expertise across the entire document automation lifecycle, structured around three core pillars.
            </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="space-y-12 max-w-4xl mx-auto">
            {pillars.map((pillar, index) => (
                <PillarCard key={pillar.title} pillar={pillar} index={index} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default PlatformPage;