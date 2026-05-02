import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '../../components/icons';

const TrainingOverviewPage: React.FC = () => {
  const trainingPrograms = [
    {
      title: 'Tungsten TotalAgility',
      level: 'Beginner to Advanced',
      duration: '40 hours',
      format: 'Live Instructor-Led',
      description: 'Build and scale intelligent automation workflows with Tungsten TotalAgility.',
      modules: ['Platform Overview', 'Workflow Design', 'AI Models', 'Integration', 'Deployment'],
      link: '/training/tungsten-totalagility'
    },
    {
      title: 'Google Cloud Platform',
      level: 'Intermediate',
      duration: '32 hours',
      format: 'Live + On-Demand',
      description: 'Learn Google Cloud best practices for document AI and machine learning.',
      modules: ['Document AI', 'AutoML', 'Cloud Functions', 'BigQuery', 'Security'],
      link: '/training/gcp'
    },
    {
      title: 'Microsoft Azure',
      level: 'Beginner to Intermediate',
      duration: '36 hours',
      format: 'Live Instructor-Led',
      description: 'Master Azure Document Intelligence integrations and cloud services.',
      modules: ['Azure AI', 'Document Intelligence', 'Logic Apps', 'Power Automate', 'Security'],
      link: '/training/azure'
    },
    {
      title: 'Amazon Web Services',
      level: 'Intermediate',
      duration: '30 hours',
      format: 'Live + On-Demand',
      description: 'Amazon Web Services document processing training with Textract and Lambda.',
      modules: ['Amazon Textract', 'Lambda Functions', 'S3 Storage', 'API Gateway', 'Security'],
      link: '/training/aws'
    },
    {
      title: 'Custom Training',
      level: 'Tailored',
      duration: 'Flexible',
      format: 'Custom',
      description: 'Tailored training programs designed for your team and specific use cases.',
      modules: ['Customized Curriculum', 'Your Technology Stack', 'Hands-on Labs', 'Best Practices', 'Support'],
      link: '/training/custom'
    }
  ];

  const benefits = [
    {
      icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>,
      title: 'Industry Certification',
      description: 'Recognized certifications upon completion'
    },
    {
      icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>,
      title: 'Hands-On Labs',
      description: 'Real-world projects and practical exercises'
    },
    {
      icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
      title: 'Expert Instructors',
      description: 'Learn from certified industry professionals'
    },
    {
      icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" /></svg>,
      title: 'Ongoing Support',
      description: '90 days of post-training support included'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-neutral-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-blue-400 to-blue-800 text-white overflow-hidden pb-32">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight max-w-5xl mx-auto">
            Professional Training Programs
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
            Upskill your team with hands-on training across leading IDP and cloud platforms.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-20 md:h-32" viewBox="0 0 1440 120" preserveAspectRatio="none" fill="white">
            <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      {/* Training Programs */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-16 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-8">
          {trainingPrograms.map((program, index) => (
            <Link
              key={index}
              to={program.link}
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 border border-neutral-100 hover:border-primary/30 hover:-translate-y-1 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-neutral-900 mb-2">{program.title}</h3>
                  <p className="text-neutral-600 mb-4">{program.description}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div>
                  <p className="text-xs text-neutral-500 mb-1">Level</p>
                  <p className="text-sm font-semibold text-neutral-900">{program.level}</p>
                </div>
                <div>
                  <p className="text-xs text-neutral-500 mb-1">Duration</p>
                  <p className="text-sm font-semibold text-neutral-900">{program.duration}</p>
                </div>
                <div>
                  <p className="text-xs text-neutral-500 mb-1">Format</p>
                  <p className="text-sm font-semibold text-neutral-900">{program.format}</p>
                </div>
              </div>

              <div className="mb-6">
                <p className="text-sm font-semibold text-neutral-700 mb-2">Modules:</p>
                <div className="flex flex-wrap gap-2">
                  {program.modules.slice(0, 4).map((module, idx) => (
                    <span key={idx} className="px-3 py-1 bg-neutral-100 text-neutral-700 text-xs font-medium rounded-full">
                      {module}
                    </span>
                  ))}
                  {program.modules.length > 4 && (
                    <span className="px-3 py-1 bg-neutral-100 text-neutral-700 text-xs font-medium rounded-full">
                      +{program.modules.length - 4} more
                    </span>
                  )}
                </div>
              </div>

              <div className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all duration-300">
                View Details
                <ArrowRightIcon className="w-5 h-5" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-neutral-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Why Choose Our Training?
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Comprehensive, practical training designed for real-world success
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md text-center">
                <div className="text-primary mb-4 flex justify-center">{benefit.icon}</div>
                <h3 className="text-lg font-bold text-neutral-900 mb-2">{benefit.title}</h3>
                <p className="text-neutral-600 text-sm">{benefit.description}</p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Upskill Your Team?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Contact us to discuss custom training programs for your organization.
            </p>
            <Link 
              to="/contact"
              className="px-8 py-4 bg-white text-primary rounded-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 inline-flex items-center justify-center gap-2"
            >
              Request Training
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TrainingOverviewPage;
