import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, PlatformAgnosticIcon } from '../components/icons';

const ScrubbingPage: React.FC = () => {
  const features = [
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Zero Data Retention',
      description: 'Your documents are never stored on our servers. Complete deletion immediately after processing ensures maximum privacy.'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: 'Auto-Delete After Transfer',
      description: 'Original documents are automatically wiped from blob storage once the scrubbed version is delivered to you.'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      ),
      title: 'Smart Data Replacement',
      description: 'Advanced AI replaces real sensitive data with realistic dummy data - names, SSN, credit cards, addresses maintain format and context.'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: 'Multi-Format Support',
      description: 'Replace sensitive information in PDF, Word, Excel, images, and scanned documents while preserving layout and formatting.'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Lightning Fast Processing',
      description: 'Real-time processing with no queue delays. Get your scrubbed documents in seconds, not minutes.'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Realistic & Contextual',
      description: 'Dummy data looks authentic - maintains data types, formats, and relationships for realistic testing and sharing.'
    }
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Upload Document',
      description: 'Securely upload your document through our encrypted connection. Supports drag-and-drop and batch uploads.',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
        </svg>
      ),
      color: 'from-blue-500 to-blue-600'
    },
    {
      number: '02',
      title: 'AI Detection',
      description: 'Our AI engine scans the document in real-time, identifying all sensitive data patterns. No storage, only backend processing.',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      color: 'from-purple-500 to-purple-600'
    },
    {
      number: '03',
      title: 'Data Manipulation',
      description: 'Sensitive data is replaced with realistic dummy data. Names, SSN, emails, phone numbers become fake but contextually accurate.',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      ),
      color: 'from-green-500 to-green-600'
    },
    {
      number: '04',
      title: 'Instant Delivery & Deletion',
      description: 'Receive your scrubbed document with realistic dummy data. Original file is immediately deleted from blob storage. Zero traces.',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      ),
      color: 'from-red-500 to-red-600'
    }
  ];

  const securityFeatures = [
    {
      title: 'End-to-End Encryption',
      description: 'TLS 1.3 encryption for all data in transit. Your documents are encrypted from upload to download.'
    },
    {
      title: 'No Database Storage',
      description: 'We never write your documents to any database. Processing happens in memory only in backend.'
    },
    {
      title: 'Immediate Blob Deletion',
      description: 'Temporary blob storage is wiped clean immediately after transfer. Zero trace left behind.'
    },
    {
      title: 'Contextual Dummy Data',
      description: 'Replacement data is realistic and maintains proper formats - names look like names, SSNs follow valid patterns.'
    }
  ];

  const useCases = [
    {
      icon: '🧪',
      title: 'Testing & QA',
      description: 'Create realistic test data from production documents for development and testing environments.'
    },
    {
      icon: '📊',
      title: 'Data Sharing',
      description: 'Share document structures and formats with partners without exposing actual sensitive information.'
    },
    {
      icon: '🎓',
      title: 'Training & Demos',
      description: 'Use realistic-looking documents for training sessions and product demonstrations safely.'
    },
    {
      icon: '🔬',
      title: 'Research & Analysis',
      description: 'Analyze document patterns and workflows without compromising real personal or business data.'
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
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Zero-Storage Privacy
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Document Scrubbing
              </h1>
              <p className="text-xl md:text-2xl text-white/80 mb-2 leading-relaxed">
                Clean & Anonymize Documents with Zero Data Retention
              </p>
              <p className="text-lg text-white/70 mb-8">
                Scrub sensitive information instantly. No storage, no traces, complete privacy guaranteed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/contact" 
                  className="px-8 py-4 bg-white text-cyan-700 rounded-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 inline-flex items-center justify-center gap-2"
                >
                  Start Scrubbing Now
                  <ArrowRightIcon className="w-5 h-5" />
                </Link>
                <Link 
                  to="#demo" 
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white rounded-lg font-bold hover:bg-white/20 transition-all duration-300 inline-flex items-center justify-center gap-2"
                >
                  See It In Action
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-64 sm:h-80 lg:h-96 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20 flex items-center justify-center p-8">
                <div className="space-y-4 w-full">
                  <div className="bg-white/20 rounded-lg p-4 backdrop-blur-sm">
                    <div className="text-xs text-white/60 mb-2">Original Document</div>
                    <div className="h-3 bg-white/40 rounded w-3/4 mb-2"></div>
                    <div className="h-3 bg-red-400/80 rounded w-1/2 mb-2">
                      <span className="text-xs text-white/80 pl-2">John Doe</span>
                    </div>
                    <div className="h-3 bg-red-400/80 rounded w-2/3">
                      <span className="text-xs text-white/80 pl-2">SSN: 123-45-6789</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-center py-2">
                    <svg className="w-8 h-8 text-white animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4 backdrop-blur-sm">
                    <div className="text-xs text-white/60 mb-2">Scrubbed Document</div>
                    <div className="h-3 bg-white/40 rounded w-3/4 mb-2"></div>
                    <div className="h-3 bg-green-400/80 rounded w-1/2 mb-2">
                      <span className="text-xs text-white/80 pl-2">Jane Smith</span>
                    </div>
                    <div className="h-3 bg-green-400/80 rounded w-2/3">
                      <span className="text-xs text-white/80 pl-2">SSN: 987-65-4321</span>
                    </div>
                  </div>
                </div>
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
        </div>replace sensitive data with realistic dummy data - zero storage
      </section>

      {/* How It Works - Process Flow */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            How Scrubbing Works
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Four simple steps to complete document privacy - with zero data retention
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step, index) => (
            <div key={index} className="relative">
              <div className={`bg-gradient-to-br ${step.color} text-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 h-full`}>
                <div className="text-6xl font-bold opacity-20 mb-4">{step.number}</div>
                <div className="mb-6">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">
                  {step.title}
                </h3>
                <p className="text-white/90 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                  <ArrowRightIcon className="w-6 h-6 text-neutral-300" />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Security Guarantee */}
      <section className="bg-gradient-to-br from-neutral-900 to-neutral-800 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex p-4 bg-cyan-500/20 rounded-full mb-6">
              <svg className="w-16 h-16 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
              </svg>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Smart Data Replacement
            </h2>
            <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
              Replace real sensitive data with realistic dummy data - maintain format, context, and usability:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {securityFeatures.map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                    <p className="text-neutral-300 text-sm">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-3 px-6 py-4 bg-cyan-500/20 rounded-lg border border-cyan-500/30">
              <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
              <p className="text-lg font-semibold">
                Automatic deletion within <span className="text-cyan-400">5 seconds</span> of document transfer
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            Powerful Features
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Enterprise-grade scrubbing with consumer-friendly privacy
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 border border-neutral-100 hover:border-cyan-500/30 hover:-translate-y-1"
            >
              <div className="inline-flex p-4 bg-cyan-500/10 rounded-xl text-cyan-600 mb-6 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Use Cases */}
      <section className="bg-gradient-to-br from-neutral-50 to-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
              Trusted Across Industries
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              From healthcare to finance, protecting sensitive data everywhere
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-neutral-100 hover:border-cyan-500/30"
              >
                <div className="text-5xl mb-4">{useCase.icon}</div>
                <h3 className="text-lg font-bold text-neutral-900 mb-2">
                  {useCase.title}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {useCase.description}
                </p>
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
              Ready to Replace Sensitive Data with Realistic Dummy Data?
            </h2>
            <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
              Start scrubbing documents today. Replace real data, maintain context, zero storage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="px-8 py-4 bg-white text-cyan-700 rounded-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 inline-flex items-center justify-center gap-2"
              >
                Start Free Trial
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
              <Link 
                to="/contact"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white rounded-lg font-bold hover:bg-white/20 transition-all duration-300"
              >
                Contact Sales
              </Link>
            </div>
            <p className="text-sm text-cyan-200 mt-6">
              Process up to 100 documents free. No credit card required.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ScrubbingPage;
