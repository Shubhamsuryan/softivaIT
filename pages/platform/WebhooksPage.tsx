import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '../../components/icons';

const WebhooksPage: React.FC = () => {
  const capabilities = [
    {
      title: 'Real-time Notifications',
      description: 'Receive instant notifications when document processing completes.',
      icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>,
      benefits: ['Instant Updates', 'HTTP Callbacks', 'Custom Payloads']
    },
    {
      title: 'Event Filtering',
      description: 'Subscribe to specific events and filter by document type or status.',
      icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" /></svg>,
      benefits: ['Custom Filters', 'Event Types', 'Conditional Triggers']
    },
    {
      title: 'Retry Logic',
      description: 'Automatic retry with exponential backoff for failed webhook deliveries.',
      icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>,
      benefits: ['Auto-Retry', 'Backoff Strategy', 'Delivery Logs']
    },
    {
      title: 'Webhook Security',
      description: 'HMAC signature verification to ensure webhook authenticity.',
      icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
      benefits: ['HMAC Signatures', 'TLS Encryption', 'IP Whitelisting']
    },
    {
      title: 'Delivery Logs',
      description: 'Complete audit trail of all webhook deliveries and responses.',
      icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>,
      benefits: ['Request/Response', 'Timestamps', 'Error Details']
    },
    {
      title: 'Testing Tools',
      description: 'Test webhooks with mock events before going live.',
      icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
      benefits: ['Mock Events', 'Sandbox Mode', 'Request Inspector']
    }
  ];

  const stats = [
    { value: '99.99%', label: 'Delivery Rate' },
    { value: '<100ms', label: 'Delivery Time' },
    { value: '5', label: 'Max Retries' },
    { value: '∞', label: 'Webhooks' }
  ];

  const events = [
    {
      name: 'document.processed',
      description: 'Fired when a document completes processing successfully'
    },
    {
      name: 'document.failed',
      description: 'Fired when document processing fails with error details'
    },
    {
      name: 'document.validated',
      description: 'Fired after human validation is completed'
    },
    {
      name: 'batch.completed',
      description: 'Fired when a batch of documents finishes processing'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-neutral-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-blue-400 to-blue-800 text-white overflow-hidden pb-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full text-white font-semibold text-sm mb-8 backdrop-blur-sm">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            Real-time Webhooks
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight max-w-5xl mx-auto">
            Event-Driven Webhooks
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
            Receive real-time notifications as documents are processed, validated, and integrated with secure, reliable webhooks.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link 
              to="/contact" 
              className="px-8 py-4 bg-white text-primary rounded-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 inline-flex items-center justify-center gap-2"
            >
              Setup Webhooks
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
            <Link 
              to="/platform" 
              className="px-8 py-4 bg-transparent border-2 border-white/50 text-white rounded-lg font-bold hover:bg-white/10 transition-all duration-300"
            >
              View Platform
            </Link>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-20 md:h-32" viewBox="0 0 1440 120" preserveAspectRatio="none" fill="white">
            <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-24 relative z-10">
        <div className="bg-white rounded-2xl shadow-2xl border border-neutral-100 p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm md:text-base text-neutral-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            Powerful Webhook Features
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Enterprise-grade event delivery with security and reliability
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 border border-neutral-100 hover:border-indigo-500/30 hover:-translate-y-1">
              <div className="text-indigo-600 mb-4">{capability.icon}</div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">{capability.title}</h3>
              <p className="text-neutral-600 mb-4 leading-relaxed">{capability.description}</p>
              <div className="flex flex-wrap gap-2">
                {capability.benefits.map((benefit, idx) => (
                  <span key={idx} className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                    {benefit}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Events Section */}
      <section className="bg-neutral-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
              Available Events
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Subscribe to the events that matter to your workflow
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {events.map((event, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col md:flex-row md:items-center gap-4">
                <code className="px-3 py-1 bg-primary/10 text-primary rounded-md font-mono text-sm font-semibold">
                  {event.name}
                </code>
                <p className="flex-1 text-neutral-600">{event.description}</p>
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
              Ready for Real-time Updates?
            </h2>
            <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
              Configure webhooks and start receiving instant notifications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="px-8 py-4 bg-white text-primary rounded-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 inline-flex items-center justify-center gap-2"
              >
                Get Started Free
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
              <Link 
                to="/platform"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white rounded-lg font-bold hover:bg-white/20 transition-all duration-300"
              >
                View Documentation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebhooksPage;
