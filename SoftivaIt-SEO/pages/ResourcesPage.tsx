import React from 'react';
import { Link } from 'react-router-dom';
import { ExpertiseIcon, ClientMetricsIcon, LegalIcon, InnovationIcon, ArrowRightIcon } from '../components/icons';

const resources = [
  {
    title: 'IDP Cost Calculator',
    description: 'Estimate your document processing costs with major cloud providers.',
    link: '/resources/roi-calculator',
    icon: <ClientMetricsIcon className="h-10 w-10 text-primary" />,
  },
  {
    title: 'FAQ',
    description: 'Find answers to common questions about SoftivaIT, our services, and agentic AI for document automation.',
    link: '/resources/faq',
    icon: <LegalIcon className="h-10 w-10 text-primary" />,
  },
  {
    title: 'Blog & Insights',
    description: 'Stay updated with the latest news, industry trends, and expert articles from the world of AI and automation.',
    link: '/resources/blog-insights',
    icon: <InnovationIcon className="h-10 w-10 text-primary" />,
  },
];

const ResourcesPage: React.FC = () => {
  return (
    <div className="bg-neutral-100">
      <div className="bg-accent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary">Resources</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-neutral-600">
            Your knowledge hub for everything related to Intelligent Document Processing and AI-driven automation.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {resources.map((resource) => (
            <Link to={resource.link} key={resource.title} className="group flex flex-col bg-white rounded-xl border border-neutral-200 p-8 hover:border-primary hover:shadow-lg transition-all duration-300">
              <div className="flex-shrink-0 flex items-center justify-center h-16 w-16 rounded-full bg-accent mb-6">
                {resource.icon}
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-neutral-900 mb-3">{resource.title}</h3>
                <p className="text-neutral-600 mb-6">{resource.description}</p>
              </div>
              <div className="flex items-center text-primary font-semibold mt-auto">
                Explore
                <ArrowRightIcon className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResourcesPage;