import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '../../components/icons';

const GuidesPage: React.FC = () => {
  const guideCategories = [
    {
      category: 'Quick Start Guides',
      description: 'Get up and running in minutes',
      guides: [
        { title: 'Your First Document Processing Workflow', duration: '10 min read', difficulty: 'Beginner' },
        { title: 'Setting Up Your Account', duration: '5 min read', difficulty: 'Beginner' },
        { title: 'Connecting Your First Integration', duration: '15 min read', difficulty: 'Beginner' },
        { title: 'Understanding Document Templates', duration: '12 min read', difficulty: 'Beginner' }
      ]
    },
    {
      category: 'Integration Guides',
      description: 'Connect with your existing systems',
      guides: [
        { title: 'Salesforce CRM Integration', duration: '25 min read', difficulty: 'Intermediate' },
        { title: 'Microsoft Dynamics Integration', duration: '30 min read', difficulty: 'Intermediate' },
        { title: 'HubSpot Setup Guide', duration: '20 min read', difficulty: 'Intermediate' },
        { title: 'Custom API Integration', duration: '45 min read', difficulty: 'Advanced' }
      ]
    },
    {
      category: 'Platform-Specific Guides',
      description: 'Leverage leading IDP platforms',
      guides: [
        { title: 'Azure Document Intelligence Best Practices', duration: '35 min read', difficulty: 'Intermediate' },
        { title: 'Google Document AI Implementation', duration: '40 min read', difficulty: 'Intermediate' },
        { title: 'AWS Textract Optimization', duration: '30 min read', difficulty: 'Intermediate' },
        { title: 'UiPath Document Understanding', duration: '50 min read', difficulty: 'Advanced' }
      ]
    },
    {
      category: 'Advanced Topics',
      description: 'Master complex workflows',
      guides: [
        { title: 'Building Custom AI Models', duration: '60 min read', difficulty: 'Advanced' },
        { title: 'Multi-Language Document Processing', duration: '45 min read', difficulty: 'Advanced' },
        { title: 'High-Volume Batch Processing', duration: '40 min read', difficulty: 'Advanced' },
        { title: 'Complex Table Extraction Techniques', duration: '55 min read', difficulty: 'Advanced' }
      ]
    },
    {
      category: 'Industry Solutions',
      description: 'Tailored guides for your industry',
      guides: [
        { title: 'Healthcare Document Automation', duration: '30 min read', difficulty: 'Intermediate' },
        { title: 'Banking & Finance Workflows', duration: '35 min read', difficulty: 'Intermediate' },
        { title: 'Legal Contract Processing', duration: '40 min read', difficulty: 'Intermediate' },
        { title: 'Logistics & Supply Chain Optimization', duration: '30 min read', difficulty: 'Intermediate' }
      ]
    },
    {
      category: 'Compliance & Security',
      description: 'Stay compliant and secure',
      guides: [
        { title: 'HIPAA Compliance Checklist', duration: '20 min read', difficulty: 'Intermediate' },
        { title: 'GDPR Data Protection Guide', duration: '25 min read', difficulty: 'Intermediate' },
        { title: 'SOC 2 Compliance Requirements', duration: '30 min read', difficulty: 'Advanced' },
        { title: 'Data Encryption Best Practices', duration: '25 min read', difficulty: 'Intermediate' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-neutral-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-blue-400 to-blue-800 text-white overflow-hidden pb-32">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight max-w-5xl mx-auto">
            Step-by-Step Guides
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
            Comprehensive tutorials to help you master intelligent document processing.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-20 md:h-32" viewBox="0 0 1440 120" preserveAspectRatio="none" fill="white">
            <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      {/* Guides Grid */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-16 py-20 relative z-10">
        {guideCategories.map((category, catIndex) => (
          <div key={catIndex} className="mb-16">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-neutral-900 mb-2">{category.category}</h2>
              <p className="text-neutral-600">{category.description}</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {category.guides.map((guide, guideIndex) => (
                <div key={guideIndex} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-neutral-100 hover:border-primary/30 hover:-translate-y-1 group cursor-pointer">
                  <h3 className="text-xl font-bold text-neutral-900 mb-3">{guide.title}</h3>
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-sm text-neutral-500 flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {guide.duration}
                    </span>
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                      guide.difficulty === 'Beginner' ? 'bg-primary/10 text-primary' :
                      guide.difficulty === 'Intermediate' ? 'bg-primary/10 text-primary' :
                      'bg-primary/10 text-primary'
                    }`}>
                      {guide.difficulty}
                    </span>
                  </div>
                  <div className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all duration-300">
                    Read Guide
                    <ArrowRightIcon className="w-4 h-4" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-gradient-to-br from-primary via-blue-400 to-blue-800 rounded-3xl p-12 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Can't Find What You're Looking For?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Our support team is here to help you with custom guides and documentation.
            </p>
            <Link 
              to="/contact"
              className="px-8 py-4 bg-white text-primary rounded-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 inline-flex items-center justify-center gap-2"
            >
              Contact Support
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GuidesPage;
