import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRightIcon, 
  FinanceIcon, 
  HealthcareIcon, 
  LegalIcon, 
  LogisticsIcon
} from '../components/icons';

const HomePage: React.FC = () => {
  const coreCapabilities = [
    {
      icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
      title: 'AI-Powered Automation',
      description: 'Deploy intelligent agents that autonomously extract, classify, and process documents with human-level accuracy.',
      benefits: ['Machine Learning', 'Deep Learning', 'Neural Networks']
    },
    {
      icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>,
      title: 'Document Intelligence',
      description: 'Advanced OCR, ICR, and handwriting recognition to digitize any document format instantly.',
      benefits: ['OCR Technology', 'ICR Recognition', 'Form Processing']
    },
    {
      icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>,
      title: 'Workflow Automation',
      description: 'End-to-end automation from capture to integration with your existing enterprise systems.',
      benefits: ['API Integration', 'RPA Compatible', 'Custom Workflows']
    },
    {
      icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>,
      title: 'Intelligent Extraction',
      description: 'Extract structured data from unstructured documents with context-aware AI models.',
      benefits: ['Table Extraction', 'Key-Value Pairs', 'Entity Recognition']
    },
    {
      icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
      title: 'Validation & Verification',
      description: 'Built-in validation rules and human-in-the-loop review for critical document processing.',
      benefits: ['Business Rules', 'Quality Checks', 'Audit Trails']
    },
    {
      icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>,
      title: 'Enterprise Security',
      description: 'Bank-grade security with compliance certifications for healthcare, finance, and legal industries.',
      benefits: ['HIPAA Compliant', 'SOC 2 Certified', 'GDPR Ready']
    }
  ];

  const howItWorks = [
    {
      step: '01',
      title: 'Upload Documents',
      description: 'Simply upload your documents via email, API, scanner, or drag-and-drop interface.',
      icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /></svg>
    },
    {
      step: '02',
      title: 'AI Processing',
      description: 'Our AI agents automatically classify, extract, and validate data with 99.5% accuracy.',
      icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
    },
    {
      step: '03',
      title: 'Human Review',
      description: 'Optional human-in-the-loop validation for critical documents requiring verification.',
      icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
    },
    {
      step: '04',
      title: 'System Integration',
      description: 'Seamlessly export data to your ERP, CRM, database, or any downstream system.',
      icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
    }
  ];

  const industries = [
    {
      name: 'Banking & Finance',
      description: 'Loan processing, KYC, fraud detection',
      icon: FinanceIcon,
      color: 'from-blue-500 to-indigo-600',
      link: '/solutions/banking'
    },
    {
      name: 'Healthcare',
      description: 'Patient records, claims, lab reports',
      icon: HealthcareIcon,
      color: 'from-teal-500 to-cyan-600',
      link: '/solutions/healthcare'
    },
    {
      name: 'Legal',
      description: 'Contract review, discovery, compliance',
      icon: LegalIcon,
      color: 'from-amber-500 to-orange-600',
      link: '/solutions/legal'
    },
    {
      name: 'Logistics',
      description: 'Bills of lading, POD, customs',
      icon: LogisticsIcon,
      color: 'from-green-500 to-emerald-600',
      link: '/solutions/logistics'
    }
  ];

  const products = [
    {
      name: 'IvaLeadGen',
      description: 'Business card scanning and lead management platform',
      icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>,
      link: '/products/ivaleadgen',
      color: 'bg-primary/10 text-primary border-primary/30'
    },
    {
      name: 'Document Redaction',
      description: 'Permanently remove sensitive data with AI-powered detection',
      icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>,
      link: '/products/redaction',
      color: 'bg-primary/10 text-primary border-primary/30'
    },
    {
      name: 'Data Scrubbing',
      description: 'Replace sensitive information with realistic dummy data',
      icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>,
      link: '/products/scrubbing',
      color: 'bg-primary/10 text-primary border-primary/30'
    }
  ];

  const whyChooseUs = [
    {
      title: 'Platform Agnostic',
      description: 'Works with Azure, AWS, Google Cloud, UiPath, ABBYY, and more',
      icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
    },
    {
      title: 'No Vendor Lock-in',
      description: 'Switch platforms anytime without losing your investment',
      icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" /></svg>
    },
    {
      title: 'Rapid Deployment',
      description: 'Go live in weeks, not months, with pre-built templates',
      icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
    },
    {
      title: 'Expert Support',
      description: '24/7 technical support from document processing specialists',
      icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-neutral-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-blue-400 to-blue-800 text-white overflow-hidden pb-3">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full text-white font-semibold text-sm mb-8 backdrop-blur-sm">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
              <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"/>
            </svg>
            Industry Solutions
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight max-w-5xl mx-auto">
            Tailored Automation Solutions for Every Industry
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
            Discover how SoftivaIT's intelligent automation transforms document processing across industries with AI-powered solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link 
              to="/contact" 
              className="px-8 py-4 bg-white text-primary rounded-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 inline-flex items-center justify-center gap-2"
            >
              Schedule a Demo
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
            <Link 
              to="/solutions" 
              className="px-8 py-4 bg-transparent border-2 border-white/50 text-white rounded-lg font-bold hover:bg-white/10 transition-all duration-300"
            >
              Explore Solutions
            </Link>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-20 md:h-32" viewBox="0 0 1440 120" preserveAspectRatio="none" fill="white">
            <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-24 relative z-10">
        <div className="bg-white rounded-2xl shadow-2xl border border-neutral-100 p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">50+</div>
              <div className="text-sm md:text-base text-neutral-600 font-medium">Industries Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">10M+</div>
              <div className="text-sm md:text-base text-neutral-600 font-medium">Documents Processed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">99.5%</div>
              <div className="text-sm md:text-base text-neutral-600 font-medium">Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm md:text-base text-neutral-600 font-medium">Automation</div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            Complete Document Processing Platform
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            From capture to integration, we handle every step of your document workflow
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coreCapabilities.map((capability, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 border border-neutral-100 hover:border-primary/30 hover:-translate-y-1">
              <div className="text-primary mb-4">{capability.icon}</div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">{capability.title}</h3>
              <p className="text-neutral-600 mb-4 leading-relaxed">{capability.description}</p>
              <div className="flex flex-wrap gap-2">
                {capability.benefits.map((benefit, idx) => (
                  <span key={idx} className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                    {benefit}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-neutral-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Four simple steps to transform your document processing
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl p-8 shadow-md border border-neutral-100 h-full">
                  <div className="text-6xl mb-4 opacity-20 font-bold text-primary">{step.step}</div>
                  <div className="text-primary mb-4">{step.icon}</div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-3">{step.title}</h3>
                  <p className="text-neutral-600 leading-relaxed">{step.description}</p>
                </div>
                {index < howItWorks.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRightIcon className="w-8 h-8 text-primary/50" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            Industry-Specific Solutions
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Tailored document processing for your industry's unique needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <Link 
              key={index} 
              to={industry.link}
              className="group bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 border border-neutral-100 hover:border-primary/30 hover:-translate-y-2"
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${industry.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <industry.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-2 group-hover:text-primary transition-colors">
                {industry.name}
              </h3>
              <p className="text-neutral-600 text-sm mb-4">{industry.description}</p>
              <div className="flex items-center text-primary font-semibold text-sm group-hover:gap-2 transition-all">
                Learn More
                <ArrowRightIcon className="w-4 h-4 ml-1 group-hover:ml-0 group-hover:translate-x-1 transition-all" />
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            to="/solutions"
            className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 text-white rounded-lg font-bold shadow-lg hover:shadow-xl hover:bg-indigo-700 transition-all duration-300"
          >
            View All Industries
            <ArrowRightIcon className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-neutral-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
              Specialized Products
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Purpose-built solutions for specific document challenges
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {products.map((product, index) => (
              <Link 
                key={index}
                to={product.link}
                className={`group bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 border ${product.color} hover:-translate-y-2`}
              >
                <div className="mb-4">{product.icon}</div>
                <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:scale-105 transition-transform">
                  {product.name}
                </h3>
                <p className="text-neutral-600 mb-4 leading-relaxed">{product.description}</p>
                <div className="flex items-center font-semibold text-sm group-hover:gap-2 transition-all">
                  Explore Product
                  <ArrowRightIcon className="w-4 h-4 ml-1 group-hover:ml-0 group-hover:translate-x-1 transition-all" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose SoftivaIT */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            Why Choose SoftivaIT?
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            The flexibility and expertise you need to succeed
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyChooseUs.map((reason, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center text-primary mb-4">{reason.icon}</div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">{reason.title}</h3>
              <p className="text-neutral-600 leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-primary/5 to-blue-50 rounded-2xl p-12 border border-primary/10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-neutral-900 mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-lg text-neutral-600 mb-6">
                Join 500+ enterprises who trust SoftivaIT for intelligent document processing
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-neutral-700">
                  <span className="w-6 h-6 bg-indigo-600 rounded-full flex items-center justify-center text-white">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  Free consultation and demo
                </li>
                <li className="flex items-center gap-3 text-neutral-700">
                  <span className="w-6 h-6 bg-indigo-600 rounded-full flex items-center justify-center text-white">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  No long-term contracts required
                </li>
                <li className="flex items-center gap-3 text-neutral-700">
                  <span className="w-6 h-6 bg-indigo-600 rounded-full flex items-center justify-center text-white">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  ROI guarantee within 6 months
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="text-center mb-6">
                <div className="flex justify-center text-primary mb-4">
                  <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="text-2xl font-bold text-neutral-900 mb-2">Start Your Free Trial</h4>
                <p className="text-neutral-600">Process 1,000 documents free</p>
              </div>
              <Link 
                to="/contact"
                className="block w-full px-8 py-4 bg-primary text-white rounded-lg font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-center"
              >
                Schedule Demo Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-primary rounded-3xl p-12 md:p-16 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Transform Your Document Processing Today
            </h2>
            <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto">
              Stop wasting time on manual data entry. Let AI handle your documents while you focus on growing your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="px-10 py-5 bg-white text-primary rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 inline-flex items-center justify-center gap-2"
              >
                Book Your Demo
                <ArrowRightIcon className="w-6 h-6" />
              </Link>
              <Link 
                to="/roi-calculator"
                className="px-10 py-5 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white rounded-lg font-bold text-lg hover:bg-white/20 transition-all duration-300"
              >
                Calculate Your ROI
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;