import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '../../components/icons';

const AWSTrainingPage: React.FC = () => {
  const modules = [
    { title: 'Amazon Textract Fundamentals', hours: '6 hours', topics: ['OCR Basics', 'Form Extraction', 'Table Detection', 'Handwriting Recognition'] },
    { title: 'AWS Lambda Integration', hours: '8 hours', topics: ['Serverless Architecture', 'Event Processing', 'API Gateway', 'Error Handling'] },
    { title: 'S3 & Document Storage', hours: '4 hours', topics: ['Bucket Configuration', 'Lifecycle Policies', 'Security', '  Versioning'] },
    { title: 'Workflow Automation', hours: '6 hours', topics: ['Step Functions', 'SNS/SQS', 'Event Bridge', 'Batch Processing'] },
    { title: 'Security & Compliance', hours: '4 hours', topics: ['IAM Policies', 'Encryption', 'Audit Logging', 'Compliance'] },
    { title: 'Optimization & Best Practices', hours: '2 hours', topics: ['Cost Optimization', 'Performance Tuning', 'Monitoring', 'Troubleshooting'] }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-neutral-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-blue-400 to-blue-800 text-white overflow-hidden pb-32">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight max-w-5xl mx-auto">
            AWS Document Processing Training
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
            Master Amazon Textract, Lambda, and AWS services for enterprise document automation.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-20 md:h-32" viewBox="0 0 1440 120" preserveAspectRatio="none" fill="white">
            <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      {/* Course Modules */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-16 py-20 relative z-10">
        <div className="bg-white rounded-2xl shadow-2xl border border-neutral-100 p-8 md:p-12 mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">30 hrs</div>
              <div className="text-sm md:text-base text-neutral-600 font-medium">Total Duration</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">6</div>
              <div className="text-sm md:text-base text-neutral-600 font-medium">Core Modules</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">Live</div>
              <div className="text-sm md:text-base text-neutral-600 font-medium">Instructor-Led</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm md:text-base text-neutral-600 font-medium">Hands-On Labs</div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {modules.map((module, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-neutral-100">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold text-neutral-900 flex-1">{module.title}</h3>
                <span className="text-sm text-primary font-semibold whitespace-nowrap ml-4">{module.hours}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {module.topics.map((topic, idx) => (
                  <span key={idx} className="px-3 py-1 bg-neutral-100 text-neutral-700 text-xs font-medium rounded-full">
                    {topic}
                  </span>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Enroll in AWS Training</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join our next cohort and become an AWS document processing expert.
            </p>
            <Link 
              to="/contact"
              className="px-8 py-4 bg-white text-primary rounded-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 inline-flex items-center justify-center gap-2"
            >
              Enroll Now
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AWSTrainingPage;
