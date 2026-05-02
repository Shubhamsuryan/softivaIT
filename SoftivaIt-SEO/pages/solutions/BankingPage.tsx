import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, FinanceIcon } from '../../components/icons';

const BankingPage: React.FC = () => {
  const useCases = [
    {
      title: 'Loan Processing Automation',
      description: 'Extract data from loan applications, income statements, and supporting documents automatically.',
      icon: '📋',
      benefits: ['90% faster processing', 'Reduced errors', '24/7 availability']
    },
    {
      title: 'KYC & Customer Onboarding',
      description: 'Verify identity documents, extract customer information, and automate compliance checks.',
      icon: '🔐',
      benefits: ['Enhanced compliance', 'Real-time verification', 'Better CX']
    },
    {
      title: 'Mortgage Application Analysis',
      description: 'Process mortgage applications, verify income, and assess creditworthiness automatically.',
      icon: '🏠',
      benefits: ['Faster approvals', 'Accurate assessment', 'Risk reduction']
    },
    {
      title: 'Check Recognition & Processing',
      description: 'Digitize and process checks with OCR technology for faster clearance and fraud detection.',
      icon: '💰',
      benefits: ['Instant processing', 'Fraud detection', 'Cost savings']
    },
    {
      title: 'Fraud Detection',
      description: 'AI-powered analysis of documents and transactions to identify fraudulent activities.',
      icon: '🛡️',
      benefits: ['Real-time alerts', '99% accuracy', 'Loss prevention']
    },
    {
      title: 'Credit Risk Assessment',
      description: 'Analyze financial statements, credit reports, and transaction history for risk evaluation.',
      icon: '📊',
      benefits: ['Data-driven decisions', 'Lower default rates', 'Portfolio optimization']
    }
  ];

  const stats = [
    { value: '90%', label: 'Faster Processing' },
    { value: '99.5%', label: 'Accuracy Rate' },
    { value: '70%', label: 'Cost Reduction' },
    { value: '24/7', label: 'Automation' }
  ];

  const features = [
    {
      title: 'Multi-Format Support',
      description: 'Process PDFs, images, scanned documents, and handwritten forms with equal accuracy.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      title: 'Regulatory Compliance',
      description: 'Built-in compliance with Basel III, AML, KYC, and regional banking regulations.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: 'Real-Time Processing',
      description: 'Process thousands of documents per hour with instant data extraction and validation.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: 'Secure & Encrypted',
      description: 'Bank-grade encryption, secure data handling, and complete audit trails for every transaction.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-neutral-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-blue-400 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-white font-semibold text-sm mb-6 backdrop-blur-sm">
                <FinanceIcon className="w-4 h-4" />
                Banking & Financial Services
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Intelligent Automation for Banking
              </h1>
              <p className="text-xl md:text-2xl text-white/80 mb-2 leading-relaxed">
                Automate loan processing, KYC, and compliance workflows
              </p>
              <p className="text-lg text-white/70 mb-8">
                Deploy AI agents to autonomously manage invoice processing, loan applications, and compliance checks with high accuracy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/contact" 
                  className="px-8 py-4 bg-white text-primary rounded-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 inline-flex items-center justify-center gap-2"
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
                <FinanceIcon className="w-48 h-48 text-white/20" />
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

      {/* Use Cases Section */}
      <section id="use-cases" className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            Banking Use Cases
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Transform your banking operations with intelligent document processing
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 border border-neutral-100 hover:border-blue-500/30 hover:-translate-y-1">
              <div className="text-5xl mb-4">{useCase.icon}</div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">{useCase.title}</h3>
              <p className="text-neutral-600 mb-4 leading-relaxed">{useCase.description}</p>
              <div className="flex flex-wrap gap-2">
                {useCase.benefits.map((benefit, idx) => (
                  <span key={idx} className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                    {benefit}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gradient-to-br from-neutral-50 to-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
              Platform Features
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Enterprise-grade capabilities built for banking
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-neutral-100 text-center">
                <div className="inline-flex p-4 bg-primary/10 rounded-xl text-primary mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-neutral-900 mb-3">{feature.title}</h3>
                <p className="text-sm text-neutral-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-gradient-to-br from-primary via-blue-400 to-blue-800 rounded-3xl p-12 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Banking Operations?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Join leading banks using intelligent automation to improve efficiency and customer experience.
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

export default BankingPage;
