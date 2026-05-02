import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, LegalIcon } from '../../components/icons';

const LegalPage: React.FC = () => {
  const useCases = [
    {
      title: 'Contract Abstraction',
      description: 'Automatically extract key terms, dates, parties, and obligations from contracts.',
      icon: '📄',
      benefits: ['70% faster review', 'Consistent extraction', 'Better accuracy']
    },
    {
      title: 'Legal Document Redaction',
      description: 'Identify and redact sensitive information while maintaining document integrity.',
      icon: '✂️',
      benefits: ['Privacy protection', 'Compliance ready', 'Bulk processing']
    },
    {
      title: 'Evidence & Discovery Management',
      description: 'Process and organize thousands of discovery documents efficiently.',
      icon: '🔍',
      benefits: ['Faster discovery', 'Cost reduction', 'Better insights']
    },
    {
      title: 'Case File Digitization',
      description: 'Convert paper case files into searchable digital archives.',
      icon: '📁',
      benefits: ['Easy access', 'Space savings', 'Better organization']
    },
    {
      title: 'Due Diligence',
      description: 'Analyze contracts, agreements, and documents for M&A and transactions.',
      icon: '🔬',
      benefits: ['Risk identification', 'Faster deals', 'Thorough analysis']
    },
    {
      title: 'Compliance Tracking',
      description: 'Monitor and track regulatory compliance across all legal documents.',
      icon: '📊',
      benefits: ['Automated alerts', 'Audit trails', 'Risk mitigation']
    }
  ];

  const stats = [
    { value: '70%', label: 'Faster Review' },
    { value: '99%', label: 'Accuracy Rate' },
    { value: '65%', label: 'Cost Reduction' },
    { value: '24/7', label: 'Processing' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-neutral-50">
      <section className="relative bg-gradient-to-br from-primary via-blue-400 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-white font-semibold text-sm mb-6 backdrop-blur-sm">
                <LegalIcon className="w-4 h-4" />
                Legal Solutions
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                AI-Powered Legal Document Processing
              </h1>
              <p className="text-xl md:text-2xl text-amber-100 mb-2 leading-relaxed">
                Accelerate contract review, case management, and discovery
              </p>
              <p className="text-lg text-amber-200 mb-8">
                Deploy intelligent agents for data extraction and contract analysis to reduce costs and improve accuracy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/contact" 
                  className="px-8 py-4 bg-white text-amber-700 rounded-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 inline-flex items-center justify-center gap-2"
                >
                  Schedule a Demo
                  <ArrowRightIcon className="w-5 h-5" />
                </Link>
                <Link 
                  to="#use-cases" 
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white rounded-lg font-bold hover:bg-white/20 transition-all duration-300"
                >
                  Explore Use Cases
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-64 sm:h-80 lg:h-96 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20 p-8 flex items-center justify-center">
                <LegalIcon className="w-48 h-48 text-white/20" />
              </div>
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

      <section className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
        <div className="bg-white rounded-2xl shadow-2xl border border-neutral-100 p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-amber-600 mb-2">{stat.value}</div>
                <div className="text-sm text-neutral-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="use-cases" className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            Legal Use Cases
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Transform legal operations with intelligent automation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 border border-neutral-100 hover:border-amber-500/30 hover:-translate-y-1">
              <div className="text-5xl mb-4">{useCase.icon}</div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">{useCase.title}</h3>
              <p className="text-neutral-600 mb-4 leading-relaxed">{useCase.description}</p>
              <div className="flex flex-wrap gap-2">
                {useCase.benefits.map((benefit, idx) => (
                  <span key={idx} className="px-3 py-1 bg-amber-500/10 text-amber-600 text-xs font-semibold rounded-full">
                    {benefit}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-gradient-to-br from-primary via-blue-400 to-blue-800 rounded-3xl p-12 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Modernize Your Legal Practice?
            </h2>
            <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
              Join law firms using AI to reduce costs and deliver better client outcomes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="px-8 py-4 bg-white text-amber-700 rounded-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 inline-flex items-center justify-center gap-2"
              >
                Get Started Today
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
              <Link 
                to="/solutions"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white rounded-lg font-bold hover:bg-white/20 transition-all duration-300"
              >
                View All Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LegalPage;
