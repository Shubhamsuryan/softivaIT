import React from 'react';
import type { TeamMember } from '../types';

const teamMembers: TeamMember[] = [
  { name: 'Mohit Jain', role: 'Founder and CEO' },
  { name: 'Indu Sahu', role: 'Chief Revenue Officer' },
  { name: 'Ayushi Jain', role: 'Head of Product' },
];

const timelineEvents = [
  { year: '2017', event: 'Company Founded', description: 'SoftivaIT was born from the idea of making data extraction simple and accessible for everyone.' },
  { year: '2021', event: 'First OCR Product Launch', description: 'We launched our first cloud-based OCR API, achieving 98% accuracy on standard documents.' },
  { year: '2022', event: 'Advanced ICR Integration', description: 'Expanded our platform to include best-in-class Intelligent Character Recognition.' },
  { year: '2023', event: 'Reached 100 Enterprise Customers', description: 'Celebrated a major milestone, helping businesses across 15 different industries automate their workflows.' },
  { year: '2025', event: 'Agentic AI Platform Unveiled', description: 'Launched our flagship agentic AI platform, enabling fully autonomous document understanding and workflow execution.' },
];

const AboutPage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Mission Section */}
      <section className="relative bg-gradient-to-br from-primary via-blue-400 to-blue-800 text-white overflow-hidden pb-3">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full text-white font-semibold text-sm mb-8 backdrop-blur-sm">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
              <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"/>
            </svg>
            About Us
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight max-w-5xl mx-auto">Our Mission</h1>
          
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
            To empower organizations of all sizes to unlock the value hidden within their documents by deploying a workforce of AI agents that transform unstructured information into automated actions.
          </p>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-20 md:h-32" viewBox="0 0 1440 120" preserveAspectRatio="none" fill="white">
            <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-neutral-50 to-white -mt-16 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-2xl border border-neutral-100 p-8 md:p-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">Our Core Values</h2>
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-3">Innovation</h3>
                <p className="text-neutral-600 leading-relaxed">
                  We continuously push boundaries to deliver cutting-edge AI solutions
                </p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-3">Customer Success</h3>
                <p className="text-neutral-600 leading-relaxed">
                  Our clients' success is our success. We're committed to delivering value
                </p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-3">Excellence</h3>
                <p className="text-neutral-600 leading-relaxed">
                  We maintain the highest standards in everything from code to customer service
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">Meet Our Leadership Team</h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-neutral-600">
              The passionate minds driving SoftivaIT's innovation and success.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {teamMembers.map((member) => (
              <div key={member.name} className="bg-gradient-to-br from-primary/5 to-blue-50 rounded-2xl p-8 border border-primary/10 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                <div className="w-24 h-24 bg-gradient-to-br from-primary to-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-3xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-2xl font-bold text-neutral-900 text-center mb-2">
                  {member.name}
                </h3>
                <p className="text-center text-primary font-semibold text-lg">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gradient-to-br from-neutral-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">Our Journey</h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-neutral-600">
              A brief history of our progress and key milestones.
            </p>
          </div>
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-1/2 h-full w-1 bg-gradient-to-b from-primary via-blue-400 to-primary hidden md:block" style={{ transform: 'translateX(-50%)'}}></div>
            {timelineEvents.map((item, index) => (
              <div key={item.year} className={`mb-12 flex justify-between items-center w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                <div className="order-1 md:w-5/12"></div>
                <div className="z-10 flex items-center order-1 bg-gradient-to-br from-primary to-blue-600 shadow-xl w-16 h-16 rounded-full border-4 border-white">
                  <h1 className="mx-auto font-bold text-lg text-white">{item.year}</h1>
                </div>
                <div className="order-1 bg-white rounded-xl shadow-lg border border-neutral-200 md:w-5/12 px-8 py-6 hover:shadow-2xl hover:border-primary/30 transition-all duration-300 hover:-translate-y-1">
                  <h3 className="font-bold text-primary text-2xl mb-2">{item.event}</h3>
                  <p className="text-base leading-relaxed text-neutral-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;