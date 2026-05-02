import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, LogisticsIcon } from '../../components/icons';

const LogisticsPage: React.FC = () => {
  const useCases = [
    {
      title: 'Bill of Lading Automation',
      description: 'Extract shipping details, cargo information, and routing data automatically.',
      icon: '📦',
      benefits: ['Real-time tracking', 'Reduced errors', 'Faster processing']
    },
    {
      title: 'Proof of Delivery (POD) Verification',
      description: 'Digitize and verify delivery confirmations, signatures, and timestamps.',
      icon: '✅',
      benefits: ['Instant verification', 'Dispute resolution', 'Better visibility']
    },
    {
      title: 'Customs Declaration Processing',
      description: 'Automate customs forms, declarations, and compliance documentation.',
      icon: '🛃',
      benefits: ['Faster clearance', 'Compliance ready', 'Reduced delays']
    },
    {
      title: 'Freight Bill Auditing',
      description: 'Validate freight charges, compare rates, and detect billing discrepancies.',
      icon: '💰',
      benefits: ['Cost savings', 'Error detection', 'Better accuracy']
    },
    {
      title: 'Warehouse Receipts',
      description: 'Process warehouse receipts, inventory count sheets, and stock movements.',
      icon: '🏭',
      benefits: ['Inventory accuracy', 'Real-time updates', 'Loss prevention']
    },
    {
      title: 'Inventory Management',
      description: 'Track inventory levels, orders, and replenishment automatically.',
      icon: '📊',
      benefits: ['Stock optimization', 'Demand forecasting', 'Cost reduction']
    }
  ];

  const stats = [
    { value: '80%', label: 'Faster Processing' },
    { value: '99%', label: 'Accuracy Rate' },
    { value: '55%', label: 'Cost Reduction' },
    { value: 'Real-time', label: 'Tracking' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-neutral-50">
      <section className="relative bg-gradient-to-br from-primary via-blue-400 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-white font-semibold text-sm mb-6 backdrop-blur-sm">
                <LogisticsIcon className="w-4 h-4" />
                Logistics & Supply Chain
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Smart Logistics Document Automation
              </h1>
              <p className="text-xl md:text-2xl text-white/80 mb-2 leading-relaxed">
                Optimize shipping documents, invoices, and inventory management
              </p>
              <p className="text-lg text-white/70 mb-8">
                Streamline the entire logistics document lifecycle from bills of lading to proof of delivery without manual intervention.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/contact" 
                  className="px-8 py-4 bg-white text-primary rounded-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 inline-flex items-center justify-center gap-2"
                >
                  Schedule a Demo
                  <ArrowRightIcon className="w-5 h-5" />
                </Link>
                <Link 
                  to="#use-cases" 
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white rounded-lg font-bold hover:bg-white/20 transition-all duration-300"
                >
                  Explore Use Cases
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-64 sm:h-80 lg:h-96 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20 p-8 flex items-center justify-center">
                <LogisticsIcon className="w-48 h-48 text-white/20" />
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
        </div>
      </section>

      <section className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
        <div className="bg-white rounded-2xl shadow-2xl border border-neutral-100 p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-neutral-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="use-cases" className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            Logistics Use Cases
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Optimize your supply chain with intelligent document processing
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 border border-neutral-100 hover:border-green-500/30 hover:-translate-y-1">
              <div className="text-5xl mb-4">{useCase.icon}</div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">{useCase.title}</h3>
              <p className="text-neutral-600 mb-4 leading-relaxed">{useCase.description}</p>
              <div className="flex flex-wrap gap-2">
                {useCase.benefits.map((benefit, idx) => (
                  <span key={idx} className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                    {benefit}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-gradient-to-br from-primary via-blue-400 to-blue-800 rounded-3xl p-12 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Optimize Your Supply Chain?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Join logistics companies using AI to reduce costs and improve delivery performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="px-8 py-4 bg-white text-primary rounded-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 inline-flex items-center justify-center gap-2"
              >
                Get Started Today
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
              <Link 
                to="/solutions"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white rounded-lg font-bold hover:bg-white/20 transition-all duration-300"
              >
                View All Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LogisticsPage;
