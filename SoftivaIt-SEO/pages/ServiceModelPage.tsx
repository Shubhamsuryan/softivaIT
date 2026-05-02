import React from 'react';
import { Link } from 'react-router-dom';
import { CheckmarkIcon, ArrowRightIcon } from '../components/icons';

const ServiceModelPage: React.FC = () => {
  const howItWorksSteps = [
    { title: 'Discovery & Design', description: 'Short workshops to align on scope, sample documents, workflows and KPIs' },
    { title: 'Build & Train', description: 'Configure pipelines and train models' },
    { title: 'Integrate & Validate', description: 'Connect to your apps (ERP/CRM/RPA/DB)' },
    { title: 'Go-Live & Handover', description: 'Production rollout, user training, and handover assets' },
    { title: 'Optional Care', description: 'Ongoing support, monitoring and model tuning as your volumes or formats evolve' },
  ];

  const deliverables = [
    'A production-ready IDP solution tailored to your documents and business rules',
    'Trained models workflow/config files and source artefacts',
    'Admin & end-user training run-books and handover documentation',
    'Optional SLAs for support monitoring and continuous improvement',
  ];

  return (
    <div className="bg-neutral-100">
      <div className="bg-accent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-neutral-900">Consulting & Custom Implementation</h1>
          <p className="mt-6 max-w-3xl mx-auto text-xl text-neutral-600">
            We build a tailored IDP solution for your business, from discovery and design to go-live and support.
          </p>
        </div>
      </div>
      <div className="bg-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-16">
            
            <div>
                <p className="text-lg text-neutral-700 leading-relaxed">
                    We build a tailored IDP solution for your business. Our team maps your use cases, configures and trains models, adds validation and human-in-the-loop where needed, and plugs everything into your existing systems. We handle implementation and hand over with clear documentation and training.
                </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-neutral-800 mb-8">How It Works</h2>
              <div className="space-y-8">
                {howItWorksSteps.map((step, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 bg-primary text-white rounded-full font-bold text-xl shadow">
                      {index + 1}
                    </div>
                    <div className="ml-6">
                      <h3 className="text-xl font-semibold text-neutral-900">{step.title}</h3>
                      <p className="mt-1 text-neutral-600 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-neutral-800 mb-6">Billing Options</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                  <div className="bg-neutral-50 p-6 rounded-lg border border-neutral-200">
                      <h3 className="font-semibold text-lg text-neutral-800">Fixed-Scope Project</h3>
                      <p className="text-neutral-600 mt-2">For clear deliverables and timelines.</p>
                  </div>
                   <div className="bg-neutral-50 p-6 rounded-lg border border-neutral-200">
                      <h3 className="font-semibold text-lg text-neutral-800">Time & Materials</h3>
                      <p className="text-neutral-600 mt-2">When requirements are evolving.</p>
                  </div>
              </div>
              <p className="mt-6 text-center text-neutral-600 italic">We’ll recommend the best fit after Discovery.</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-neutral-800 mb-8">What You Receive</h2>
              <ul className="space-y-4">
                {deliverables.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckmarkIcon className="w-6 h-6 text-primary mr-3 flex-shrink-0 mt-1" />
                    <span className="text-neutral-700 text-lg leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-accent rounded-2xl p-10 text-center border border-primary/30">
              <h2 className="text-3xl font-bold text-primary">Start with a Free Mini-POC</h2>
              <p className="mt-4 max-w-2xl mx-auto text-neutral-700 leading-relaxed">
                Share three to five sample documents (PDFs or images are fine). Tell us what information you need. We will get back to you with a working demo & accuracy notes.
              </p>
              <div className="mt-8 flex flex-col md:flex-row justify-center items-stretch gap-4">
                <Link to="/contact" className="w-full md:w-auto px-6 py-3 bg-primary text-white rounded-md font-semibold hover:bg-primary transition duration-300 flex items-center justify-center text-center">
                  Start a Free Mini-POC
                  <ArrowRightIcon className="w-5 h-5 ml-2" />
                </Link>
                <Link to="/contact" className="w-full md:w-auto px-6 py-3 bg-white text-primary border border-primary rounded-md font-semibold hover:bg-primary/5 transition duration-300 flex items-center justify-center text-center">
                  Share Sample Documents
                </Link>
                <Link to="/contact" className="w-full md:w-auto px-6 py-3 bg-primary text-white rounded-md font-semibold hover:bg-primary transition duration-300 flex items-center justify-center text-center">
                  Book a 30-min Scoping Call
                  <ArrowRightIcon className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceModelPage;