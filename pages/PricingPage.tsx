import React from 'react';
import { Link } from 'react-router-dom';
import type { PricingTier } from '../types';
import { CheckmarkIcon } from '../components/icons';

const pricingTiers: PricingTier[] = [
  {
    name: 'Enterprise',
    price: { monthly: 'Custom', annually: 'Custom' },
    description: 'Custom-built agentic solutions for large organizations with complex, mission-critical requirements.',
    features: [
      'Unlimited pages & agents',
      'All features included',
      'Dedicated Account Manager',
      'Custom Integrations & SLAs',
      'On-premise deployment option',
      'Tailored AI model training',
    ],
    isFeatured: true,
  },
];

const PricingPage: React.FC = () => {
  return (
    <div className="bg-accent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary">Custom Solutions for Your Enterprise</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-neutral-600">
            We provide a tailor-made agentic platform designed to meet the unique scale and complexity of your business.
          </p>
        </div>

        <div className="flex justify-center">
          {pricingTiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative bg-white rounded-2xl p-8 flex flex-col w-full max-w-md ${tier.isFeatured ? 'border-2 border-primary' : 'border border-neutral-200'}`}
            >
              <h3 className="text-2xl font-bold text-neutral-800 text-center">{tier.name}</h3>
              <p className="text-neutral-600 mt-4 text-center h-16">{tier.description}</p>
              
              <div className="mt-6 text-center">
                <span className="text-5xl font-extrabold text-neutral-900">Custom</span>
              </div>
              
              <div className="mt-8 flex-grow">
                <ul className="space-y-4">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckmarkIcon className="w-6 h-6 text-primary mr-3 flex-shrink-0" />
                      <span className="text-neutral-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-10">
                <Link
                  to="/contact"
                  className={`block w-full text-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    tier.isFeatured
                      ? 'bg-primary text-white hover:bg-primary'
                      : 'bg-white text-neutral-700 border border-neutral-300 hover:bg-neutral-100'
                  }`}
                >
                  Contact Sales
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingPage;