import React from 'react';
import { Link } from 'react-router-dom';
import { InnovationIcon, GrowthIcon, ImpactIcon } from '../components/icons';

interface Benefit {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface JobOpening {
    title: string;
    department: string;
    location: string;
    description: string;
}

const benefits: Benefit[] = [
  {
    icon: <InnovationIcon className="h-10 w-10 text-primary" />,
    title: 'Work on Cutting-Edge AI',
    description: 'Be at the forefront of the agentic AI revolution, building intelligent systems that solve real-world problems for global industries.',
  },
  {
    icon: <GrowthIcon className="h-10 w-10 text-primary" />,
    title: 'Career Growth & Learning',
    description: 'We invest in our people. Benefit from continuous learning opportunities, mentorship, and a clear path for professional advancement.',
  },
  {
    icon: <ImpactIcon className="h-10 w-10 text-primary" />,
    title: 'Make a Tangible Impact',
    description: 'Your work will directly contribute to the success of our clients, transforming their operations and driving efficiency at scale.',
  },
];

const jobOpenings: JobOpening[] = [
    {
        title: 'Senior AI Engineer',
        department: 'Engineering',
        location: 'Bengaluru, India (Remote)',
        description: 'Lead the development of our core AI agentic models. Strong background in NLP, machine learning, and Python required.'
    },
    {
        title: 'Product Manager - AI Platform',
        department: 'Product',
        location: 'Bengaluru, India',
        description: 'Define the roadmap and strategy for our flagship agentic platform. Experience in B2B SaaS and AI products is a must.'
    },
    {
        title: 'Enterprise Account Executive',
        department: 'Sales',
        location: 'Mumbai, India',
        description: 'Drive growth by managing the full sales cycle for our enterprise clients. Proven track record in enterprise software sales required.'
    }
]

const CareersPage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-blue-400 to-blue-800 text-white overflow-hidden pb-3">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full text-white font-semibold text-sm mb-8 backdrop-blur-sm">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
              <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"/>
            </svg>
            Careers
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight max-w-5xl mx-auto">Join Our Team of Innovators</h1>
          
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
            Help us build the future of agentic AI and revolutionize how businesses operate with autonomous document processing and workflow automation.
          </p>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-20 md:h-32" viewBox="0 0 1440 120" preserveAspectRatio="none" fill="white">
            <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white -mt-16 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">Why Work at SoftivaIT?</h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-neutral-600">
              We're a passionate team dedicated to pushing the boundaries of what's possible.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 border border-neutral-100 hover:border-primary/30 hover:-translate-y-1 group">
                <div className="text-primary mb-6 transform group-hover:scale-110 transition-transform duration-300">{benefit.icon}</div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-4">{benefit.title}</h3>
                <p className="text-neutral-600 leading-relaxed text-lg">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-20 bg-gradient-to-br from-neutral-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">Open Positions</h2>
                <p className="mt-4 max-w-2xl mx-auto text-xl text-neutral-600">
                    Find your next opportunity and make your mark.
                </p>
            </div>
            <div className="max-w-4xl mx-auto space-y-6">
                {jobOpenings.map((job) => (
                    <div key={job.title} className="bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 border border-neutral-100 hover:border-primary/30 group hover:-translate-y-1">
                        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
                            <div className="flex-grow">
                                <h3 className="text-2xl font-bold text-neutral-900 mb-3 group-hover:text-primary transition-colors">{job.title}</h3>
                                <div className="flex flex-wrap items-center gap-3 mb-4">
                                    <span className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-semibold px-4 py-2 rounded-full">
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                                            <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                                        </svg>
                                        {job.department}
                                    </span>
                                    <span className="inline-flex items-center gap-2 bg-neutral-100 text-neutral-700 text-sm font-semibold px-4 py-2 rounded-full">
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                        </svg>
                                        {job.location}
                                    </span>
                                </div>
                                <p className="text-neutral-600 text-lg leading-relaxed">{job.description}</p>
                            </div>
                            <div className="flex-shrink-0">
                                <a 
                                    href={`mailto:careers@softivait.com?subject=Application for ${encodeURIComponent(job.title)}`}
                                    className="px-8 py-4 bg-primary text-white rounded-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 inline-flex items-center justify-center gap-2 whitespace-nowrap"
                                >
                                    Apply Now
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

       {/* CTA Section */}
       <section className="py-20 bg-gradient-to-br from-primary via-blue-400 to-blue-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Don't See Your Perfect Role?</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-white/90 mb-10 leading-relaxed">
            We're always looking for talented and passionate people to join our mission. If you believe you're a great fit, we'd love to hear from you.
          </p>
          <div className="mt-8">
            <Link
              to="/contact"
              className="px-10 py-4 bg-white text-primary rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 inline-flex items-center justify-center gap-2"
            >
              Get in Touch
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;