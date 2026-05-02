import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '../../components/icons';

const WebinarsPage: React.FC = () => {
  const upcomingWebinars = [
    {
      title: 'Getting Started with Intelligent Document Processing',
      presenter: 'Sarah Johnson, Solution Architect',
      date: 'April 18, 2026',
      time: '2:00 PM EST',
      duration: '60 minutes',
      level: 'Beginner',
      description: 'Learn the basics of IDP and how to implement your first automation workflow.'
    },
    {
      title: 'Advanced OCR Techniques for Complex Documents',
      presenter: 'Michael Chen, Technical Lead',
      date: 'April 25, 2026',
      time: '1:00 PM EST',
      duration: '90 minutes',
      level: 'Advanced',
      description: 'Deep dive into handling handwriting, tables, and multi-column layouts.'
    },
    {
      title: 'HIPAA-Compliant Document Automation for Healthcare',
      presenter: 'Dr. Emily Rodriguez, Healthcare Solutions',
      date: 'May 2, 2026',
      time: '3:00 PM EST',
      duration: '75 minutes',
      level: 'Intermediate',
      description: 'Best practices for maintaining compliance while automating healthcare workflows.'
    }
  ];

  const onDemandWebinars = [
    {
      title: 'Platform-Agnostic IDP: Avoiding Vendor Lock-in',
      presenter: 'David Kumar, CTO',
      views: '2.5K',
      duration: '52 minutes',
      rating: '4.8/5'
    },
    {
      title: 'Banking Automation: From KYC to Loan Processing',
      presenter: 'Jennifer Liu, Industry Expert',
      views: '3.2K',
      duration: '68 minutes',
      rating: '4.9/5'
    },
    {
      title: 'Contract Intelligence with NLP',
      presenter: 'Robert Taylor, AI Specialist',
      views: '1.8K',
      duration: '45 minutes',
      rating: '4.7/5'
    },
    {
      title: 'Supply Chain Document Automation at Scale',
      presenter: 'Amanda Foster, Solutions Architect',
      views: '2.1K',
      duration: '58 minutes',
      rating: '4.8/5'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-neutral-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-blue-400 to-blue-800 text-white overflow-hidden pb-32">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight max-w-5xl mx-auto">
            Webinars & Training Sessions
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
            Join our expert-led sessions to deepen your knowledge and skills in intelligent automation.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-20 md:h-32" viewBox="0 0 1440 120" preserveAspectRatio="none" fill="white">
            <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      {/* Upcoming Webinars */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-16 py-20 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-8">Upcoming Webinars</h2>
        <div className="space-y-6">
          {upcomingWebinars.map((webinar, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 border border-neutral-100 hover:border-primary/30">
              <div className="grid lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                      {webinar.level}
                    </span>
                    <span className="inline-block px-3 py-1 bg-neutral-100 text-neutral-700 text-xs font-semibold rounded-full">
                      {webinar.duration}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-900 mb-2">{webinar.title}</h3>
                  <p className="text-neutral-600 mb-4">{webinar.description}</p>
                  <p className="text-sm text-neutral-500 mb-2">Presenter: {webinar.presenter}</p>
                </div>
                <div className="flex flex-col justify-between">
                  <div>
                    <p className="text-lg font-semibold text-neutral-900 mb-1">{webinar.date}</p>
                    <p className="text-neutral-600 mb-4">{webinar.time}</p>
                  </div>
                  <button className="px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg inline-flex items-center justify-center gap-2">
                    Register Now
                    <ArrowRightIcon className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* On-Demand Webinars */}
      <section className="bg-neutral-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-8">On-Demand Webinars</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {onDemandWebinars.map((webinar, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-neutral-100">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-neutral-900 mb-2">{webinar.title}</h3>
                    <p className="text-sm text-neutral-600 mb-3">{webinar.presenter}</p>
                  </div>
                  <svg className="w-12 h-12 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex items-center gap-4 text-sm text-neutral-500 mb-4">
                  <span>{webinar.duration}</span>
                  <span>•</span>
                  <span>{webinar.views} views</span>
                  <span>•</span>
                  <span className="text-primary font-semibold">{webinar.rating}</span>
                </div>
                <button className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-300">
                  Watch Now
                  <ArrowRightIcon className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-gradient-to-br from-primary via-blue-400 to-blue-800 rounded-3xl p-12 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Want a Custom Training Session?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              We offer tailored training programs for your team and organization.
            </p>
            <Link 
              to="/training"
              className="px-8 py-4 bg-white text-primary rounded-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 inline-flex items-center justify-center gap-2"
            >
              Explore Training
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebinarsPage;
