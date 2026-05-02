import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '../../components/icons';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      industry: 'Banking & Finance',
      company: 'Global Bank',
      title: 'Automated Loan Processing Reduces Processing Time by 75%',
      challenge: 'Manual loan document review taking 5-7 days per application',
      solution: 'AI-powered document extraction and validation workflow',
      results: ['75% faster processing', '99.5% accuracy', '$2M annual savings', '50K+ loans processed'],
      icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    },
    {
      industry: 'Healthcare',
      company: 'Regional Hospital Network',
      title: 'Streamlined Patient Records Management Across 12 Facilities',
      challenge: 'Inconsistent patient data across multiple locations and systems',
      solution: 'Centralized intelligent document processing with OCR and data validation',
      results: ['100% data consistency', '80% time savings', '500K+ records processed', 'HIPAA compliant'],
      icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h8.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
    },
    {
      industry: 'Legal',
      company: 'International Law Firm',
      title: 'AI-Powered Contract Analysis Handles 10X More Cases',
      challenge: 'Growing caseload overwhelming legal team capacity',
      solution: 'Automated contract review, clause extraction, and risk analysis',
      results: ['10X case capacity', '95% faster review', '99% accuracy', '200+ contracts/week'],
      icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" /></svg>
    },
    {
      industry: 'Logistics',
      company: 'Global Shipping Company',
      title: 'Real-Time Shipment Tracking Reduces Delays by 60%',
      challenge: 'Manual data entry causing shipment tracking delays and errors',
      solution: 'Automated document capture from emails, PDFs, and scanned forms',
      results: ['60% fewer delays', '98% accuracy', '1M+ shipments/year', '24/7 processing'],
      icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg>
    },
    {
      industry: 'Manufacturing',
      company: 'Automotive Manufacturer',
      title: 'Quality Control Document Processing Improves Compliance by 40%',
      challenge: 'Inconsistent quality documentation leading to compliance issues',
      solution: 'Automated inspection report processing and compliance validation',
      results: ['40% better compliance', '90% time savings', '100K+ forms/month', 'Zero defects'],
      icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
    },
    {
      industry: 'Retail',
      company: 'E-Commerce Platform',
      title: 'Automated Invoice Processing Cuts Vendor Onboarding Time in Half',
      challenge: 'Slow vendor onboarding delaying product launches',
      solution: 'Intelligent invoice and vendor document processing automation',
      results: ['50% faster onboarding', '95% accuracy', '5K+ vendors', '$10M cost savings'],
      icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-neutral-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-blue-400 to-blue-800 text-white overflow-hidden pb-32">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight max-w-5xl mx-auto">
            Customer Success Stories
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
            Real-world implementations delivering measurable results across industries.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-20 md:h-32" viewBox="0 0 1440 120" preserveAspectRatio="none" fill="white">
            <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-16 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 border border-neutral-100 hover:border-primary/30">
              <div className="flex items-start gap-4 mb-4">
                <div className="text-primary">{study.icon}</div>
                <div>
                  <span className="inline-block px-3 py-1 bg-neutral-100 text-neutral-700 text-xs font-semibold rounded-full mb-2">
                    {study.industry}
                  </span>
                  <h3 className="text-2xl font-bold text-neutral-900">{study.title}</h3>
                </div>
              </div>
              
              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="font-semibold text-neutral-700 mb-1">Challenge</h4>
                  <p className="text-neutral-600">{study.challenge}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-700 mb-1">Solution</h4>
                  <p className="text-neutral-600">{study.solution}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {study.results.map((result, idx) => (
                  <div key={idx} className="bg-neutral-50 rounded-lg p-3 text-center">
                    <p className="text-sm font-semibold text-neutral-900">{result}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-gradient-to-br from-primary via-blue-400 to-blue-800 rounded-3xl p-12 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Write Your Success Story?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join hundreds of companies transforming their document workflows.
            </p>
            <Link 
              to="/contact"
              className="px-8 py-4 bg-white text-primary rounded-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 inline-flex items-center justify-center gap-2"
            >
              Get Started
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesPage;
