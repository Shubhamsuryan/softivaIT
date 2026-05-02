import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '../../components/icons';

const WhitepapersPage: React.FC = () => {
  const whitepapers = [
    {
      title: 'The Future of Intelligent Document Processing',
      description: 'Comprehensive analysis of AI trends shaping document automation in 2026 and beyond.',
      pages: '42 pages',
      date: 'March 2026',
      topics: ['AI/ML Trends', 'Market Analysis', 'ROI Metrics', 'Best Practices']
    },
    {
      title: 'HIPAA Compliance Guide for Healthcare Document Processing',
      description: 'Complete guide to maintaining HIPAA compliance while automating healthcare workflows.',
      pages: '35 pages',
      date: 'February 2026',
      topics: ['HIPAA', 'PHI Protection', 'Audit Trails', 'Security']
    },
    {
      title: 'Digital Transformation in Banking: Document Automation ROI',
      description: 'Data-driven insights on ROI from document automation in financial services.',
      pages: '28 pages',
      date: 'January 2026',
      topics: ['Banking', 'ROI Analysis', 'Case Studies', 'Implementation']
    },
    {
      title: 'Contract Intelligence: AI-Powered Legal Document Analysis',
      description: 'How AI is revolutionizing contract review, risk analysis, and compliance in legal.',
      pages: '38 pages',
      date: 'December 2025',
      topics: ['Legal Tech', 'AI Analysis', 'Contract Review', 'Compliance']
    },
    {
      title: 'Supply Chain Optimization Through Intelligent Automation',
      description: 'Strategies for reducing costs and improving efficiency with document automation.',
      pages: '31 pages',
      date: 'November 2025',
      topics: ['Logistics', 'Efficiency', 'Cost Reduction', 'Automation']
    },
    {
      title: 'Building a Platform-Agnostic IDP Strategy',
      description: 'Guide to avoiding vendor lock-in while maximizing automation capabilities.',
      pages: '26 pages',
      date: 'October 2025',
      topics: ['Strategy', 'Vendor Selection', 'Integration', 'Flexibility']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-neutral-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-blue-400 to-blue-800 text-white overflow-hidden pb-32">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight max-w-5xl mx-auto">
            Industry Whitepapers
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
            In-depth research, analysis, and insights from industry experts and thought leaders.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-20 md:h-32" viewBox="0 0 1440 120" preserveAspectRatio="none" fill="white">
            <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      {/* Whitepapers Grid */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-16 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-8">
          {whitepapers.map((paper, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 border border-neutral-100 hover:border-primary/30 hover:-translate-y-1">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-neutral-900 mb-2">{paper.title}</h3>
                  <p className="text-neutral-600 mb-4">{paper.description}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-sm text-neutral-500 mb-4">
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  {paper.pages}
                </span>
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {paper.date}
                </span>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {paper.topics.map((topic, idx) => (
                  <span key={idx} className="px-3 py-1 bg-neutral-100 text-neutral-700 text-xs font-semibold rounded-full">
                    {topic}
                  </span>
                ))}
              </div>

              <button className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 hover:gap-3 shadow-md hover:shadow-lg">
                Download PDF
                <ArrowRightIcon className="w-5 h-5" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-gradient-to-br from-primary via-blue-400 to-blue-800 rounded-3xl p-12 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Subscribe for Latest Research</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Get notified when we publish new whitepapers and industry research.
            </p>
            <Link 
              to="/contact"
              className="px-8 py-4 bg-white text-primary rounded-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 inline-flex items-center justify-center gap-2"
            >
              Subscribe Now
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhitepapersPage;
