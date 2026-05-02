import React from 'react';
import { Link } from 'react-router-dom';
import type { Solution } from '../types';
import { FinanceIcon, HealthcareIcon, LogisticsIcon, LegalIcon, InnovationIcon, ArrowRightIcon } from '../components/icons';

const solutions: Solution[] = [
  {
    industry: 'Banking & Financial Services',
    description: 'Deploy AI agents to autonomously manage invoice processing, loan applications, and compliance checks with high accuracy.',
    useCases: ['Invoice Automation', 'KYC Document Processing', 'Mortgage Application Analysis', 'Check Recognition', 'Fraud Detection', 'Credit Risk Assessment'],
    icon: <FinanceIcon className="w-10 h-10 text-primary" />,
    benefits: ['90% faster processing', 'Reduced errors', 'Enhanced compliance'],
    link: '/solutions/banking'
  },
  {
    industry: 'Healthcare',
    description: 'Autonomous digital agents digitize patient records, process insurance claims, and manage lab results to improve patient care.',
    useCases: ['Patient Onboarding Forms', 'Medical Claim Processing', 'Lab Report Extraction', 'Clinical Trial Data Entry', 'HIPAA Compliance', 'Insurance Verification'],
    icon: <HealthcareIcon className="w-10 h-10 text-primary" />,
    benefits: ['Faster patient care', 'HIPAA compliant', '99.5% accuracy'],
    link: '/solutions/healthcare'
  },
  {
    industry: 'Legal',
    description: 'Accelerate document review and discovery by deploying intelligent agents for data extraction and contract analysis.',
    useCases: ['Contract Abstraction', 'Legal Document Redaction', 'Evidence & Discovery Management', 'Case File Digitization', 'Due Diligence', 'Compliance Tracking'],
    icon: <LegalIcon className="w-10 h-10 text-primary" />,
    benefits: ['70% faster review', 'Reduced costs', 'Better accuracy'],
    link: '/solutions/legal'
  },
  {
    industry: 'Logistics & Supply Chain',
    description: 'Agentic systems streamline the entire logistics document lifecycle, from bills of lading to proof of delivery, without manual intervention.',
    useCases: ['Bill of Lading Automation', 'Proof of Delivery (POD) Verification', 'Customs Declaration Processing', 'Freight Bill Auditing', 'Warehouse Receipts', 'Inventory Management'],
    icon: <LogisticsIcon className="w-10 h-10 text-primary" />,
    benefits: ['Real-time tracking', 'Reduced delays', 'Cost optimization'],
    link: '/solutions/logistics'
  },
  {
    industry: 'Manufacturing',
    description: 'Digitize quality control, compliance documentation, and production workflows with intelligent automation for operational excellence.',
    useCases: ['Quality Control Reports', 'Compliance Documentation', 'Production Orders', 'Safety Certifications', 'Supply Chain Documents', 'Maintenance Records'],
    icon: (
      <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
    benefits: ['Higher quality', 'Reduced waste', 'Improved safety'],
    link: '/solutions/manufacturing'
  },
  {
    industry: 'Retail & E-commerce',
    description: 'Automate order processing, returns management, and vendor documentation to scale your retail operations efficiently.',
    useCases: ['Order Processing', 'Returns Management', 'Vendor Invoices', 'Product Catalogs', 'Customer Verification', 'Inventory Reconciliation'],
    icon: (
      <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    benefits: ['Faster fulfillment', 'Better experience', 'Lower costs'],
    link: '/solutions/retail'
  },
];

const SolutionCard: React.FC<{ solution: Solution }> = ({ solution }) => (
  <div className="group bg-white rounded-2xl border border-neutral-200 p-8 flex flex-col h-full hover:shadow-2xl hover:border-primary/30 transition-all duration-300 hover:-translate-y-1">
    <div className="flex items-start space-x-4 mb-6">
      <div className="bg-primary/10 p-4 rounded-xl group-hover:bg-primary group-hover:text-white transition-all duration-300">
        {solution.icon}
      </div>
      <div className="flex-1">
        <h3 className="text-2xl font-bold text-neutral-900 mb-2 group-hover:text-primary transition-colors">{solution.industry}</h3>
        <p className="text-neutral-600 leading-relaxed">{solution.description}</p>
      </div>
    </div>
    
    {/* Benefits */}
    <div className="flex flex-wrap gap-2 mb-6">
      {solution.benefits?.map((benefit, index) => (
        <span key={index} className="px-3 py-1 bg-primary/5 text-primary text-xs font-semibold rounded-full">
          {benefit}
        </span>
      ))}
    </div>

    {/* Use Cases */}
    <div className="border-t border-neutral-200 pt-6 flex-grow">
      <h4 className="font-semibold text-neutral-900 mb-4">Key Use Cases:</h4>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {solution.useCases.slice(0, 6).map((useCase) => (
          <li key={useCase} className="flex items-start">
            <svg className="w-4 h-4 text-primary mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
            </svg>
            <span className="text-sm text-neutral-600">{useCase}</span>
          </li>
        ))}
      </ul>
    </div>

    {/* Learn More Link */}
    <div className="mt-6 pt-6 border-t border-neutral-200">
      <Link
        to={solution.link || '#'}
        className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all duration-300 group/link"
      >
        Learn More
        <ArrowRightIcon className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
      </Link>
    </div>
  </div>
);

const SolutionsPage: React.FC = () => {
  const stats = [
    { value: '50+', label: 'Industries Served' },
    { value: '10M+', label: 'Documents Processed' },
    { value: '99.5%', label: 'Accuracy Rate' },
    { value: '24/7', label: 'Automation' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-neutral-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-blue-400 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-white font-semibold text-sm mb-6 backdrop-blur-sm">
              <InnovationIcon className="w-4 h-4" />
              Industry Solutions
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Tailored Automation Solutions for Every Industry
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed max-w-3xl mx-auto">
              Discover how SoftivaIT's intelligent automation transforms document processing across industries with AI-powered solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="px-8 py-4 bg-white text-primary rounded-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 inline-flex items-center justify-center gap-2"
              >
                Schedule a Demo
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
              <Link 
                to="#solutions" 
                className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white rounded-lg font-bold hover:bg-white/20 transition-all duration-300"
              >
                Explore Solutions
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-16 md:h-24 text-white" viewBox="0 0 1200 120" preserveAspectRatio="none" style={{transform: 'scaleY(-1)'}}>
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="currentColor"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="currentColor"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="currentColor"></path>
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
        <div className="bg-white rounded-2xl shadow-2xl border border-neutral-100 p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-neutral-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions Grid */}
      <section id="solutions" className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            Industry-Specific Solutions
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Intelligent automation designed for your industry's unique challenges and workflows
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((solution) => (
            <SolutionCard key={solution.industry} solution={solution} />
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gradient-to-br from-neutral-50 to-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
              Why Choose SoftivaIT?
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Industry expertise combined with cutting-edge AI technology
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-neutral-100">
              <div className="inline-flex p-4 bg-primary/10 rounded-xl text-primary mb-6">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">Rapid Deployment</h3>
              <p className="text-neutral-600 leading-relaxed">
                Get started in days, not months. Our pre-built industry solutions accelerate time-to-value.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-neutral-100">
              <div className="inline-flex p-4 bg-primary/10 rounded-xl text-primary mb-6">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">Industry Compliance</h3>
              <p className="text-neutral-600 leading-relaxed">
                Built-in compliance for HIPAA, GDPR, SOC 2, and industry-specific regulations.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-neutral-100">
              <div className="inline-flex p-4 bg-primary/10 rounded-xl text-primary mb-6">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">Scalable & Flexible</h3>
              <p className="text-neutral-600 leading-relaxed">
                Start small and scale seamlessly. Our solutions grow with your business needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-gradient-to-br from-primary via-blue-400 to-blue-800 rounded-3xl p-12 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Industry Workflows?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Let's discuss how intelligent automation can solve your industry's unique challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="px-8 py-4 bg-white text-primary rounded-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 inline-flex items-center justify-center gap-2"
              >
                Get Started Today
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
              <Link 
                to="/contact"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white rounded-lg font-bold hover:bg-white/20 transition-all duration-300"
              >
                Talk to an Expert
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SolutionsPage;
