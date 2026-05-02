import React from 'react';
import { Link } from 'react-router-dom';
import { ExpertiseIcon, PlatformAgnosticIcon, ServiceModelIcon, ArrowRightIcon } from '../components/icons';

const services = [
  {
    title: 'Custom AI Agents',
    description: 'Bespoke agents trained on your unique documents and workflows for unparalleled accuracy and automation.',
    link: '/services/custom-ai-agents',
    icon: <ExpertiseIcon className="h-10 w-10 text-primary" />,
  },
  {
    title: 'Traditional IDP Platforms',
    description: 'Expert implementation, customization, and management of leading IDP solutions to leverage your existing investments.',
    link: '/services/traditional-idp-platforms',
    icon: <PlatformAgnosticIcon className="h-10 w-10 text-primary" />,
  },
  {
    title: 'Hybrid Solutions',
    description: 'Combining the power of established platforms with the precision of custom AI agents for a balanced, powerful, and future-proof approach.',
    link: '/services/hybrid-solutions',
    icon: <ServiceModelIcon className="h-10 w-10 text-primary" />,
  },
];

const ServicesPage: React.FC = () => {
  return (
    <div className="bg-neutral-100">
      <div className="bg-accent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary">Our Services</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-neutral-600">
            Flexible engagement models designed to meet your specific document automation needs, from platform implementation to fully custom AI solutions.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link to={service.link} key={service.title} className="group block bg-white rounded-xl border border-neutral-200 p-8 hover:border-primary hover:shadow-lg transition-all duration-300">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-accent mb-6">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-3">{service.title}</h3>
              <p className="text-neutral-600 mb-6">{service.description}</p>
              <div className="flex items-center text-primary font-semibold">
                Learn More
                <ArrowRightIcon className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;