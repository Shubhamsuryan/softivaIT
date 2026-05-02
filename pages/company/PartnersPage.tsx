import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '../../components/icons';

const PartnersPage: React.FC = () => {
  const partners = [
    {
      name: 'Microsoft Azure',
      category: 'Cloud Platform Partner',
      description: 'Official Microsoft partner for Azure Document Intelligence and cloud solutions.',
      icon: <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M11.5 23L13.1 21.2L13.6 21.7L12.4 23H11.5M5.1 16.8L7.5 14.4L8 14.9L6.5 16.4L5.1 16.8M2 10H5V11H2V10M13.1 2.8L11.5 1H12.4L13.6 2.3L13.1 2.8M21 10V11H18V10H21M17.1 14.9L17.6 14.4L20 16.8L18.6 16.4L17.1 14.9M7.5 9.6L5.1 7.2L6.5 7.6L8 9.1L7.5 9.6M16 12C16 14.2 14.2 16 12 16S8 14.2 8 12 9.8 8 12 8 16 9.8 16 12M12 8V16L8.5 12L12 8Z"/></svg>,
      benefits: ['Technical Certification', 'Co-development', 'Priority Support']
    },
    {
      name: 'Google Cloud',
      category: 'Cloud Platform Partner',
      description: 'Google Cloud partner specializing in Document AI and machine learning solutions.',
      icon: <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/></svg>,
      benefits: ['Cloud Integration', 'Advanced AI', 'Global Reach']
    },
    {
      name: 'Amazon Web Services',
      category: 'Cloud Platform Partner',
      description: 'AWS Advanced Technology Partner for Textract and document processing solutions.',
      icon: <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335c-.072.048-.144.072-.208.072-.08 0-.16-.04-.239-.112-.12-.128-.216-.263-.296-.415-.08-.152-.16-.32-.248-.52-.616.728-1.391 1.095-2.327 1.095-.664 0-1.191-.192-1.599-.583-.408-.384-.616-.896-.616-1.543 0-.68.239-1.231.72-1.647.48-.416 1.119-.624 1.938-.624.264 0 .536.024.824.064.288.04.584.104.888.144v-.48c0-.496-.104-.847-.304-1.047-.208-.2-.56-.296-1.063-.296-.232 0-.472.024-.72.08-.248.056-.496.12-.728.2-.112.04-.2.064-.256.072-.064 0-.096-.048-.096-.144v-.224c0-.072.008-.128.032-.168.024-.04.064-.08.12-.104.232-.12.512-.216.848-.296C2.224.536 2.56.5 2.88.5c.64 0 1.104.144 1.415.44.304.296.456.744.456 1.343v1.775zm-3.215 1.207c.256 0 .52-.048.8-.144.28-.096.528-.272.76-.52.136-.16.232-.336.288-.535.056-.2.088-.448.088-.752v-.36c-.224-.032-.464-.056-.712-.08-.248-.016-.488-.024-.712-.024-.512 0-.888.104-1.136.304-.248.2-.368.48-.368.88 0 .368.096.64.28.816.192.184.48.272.88.272.264 0 .544-.048.832-.144zM9.312 13.464c-.104 0-.176-.016-.232-.056-.056-.032-.104-.104-.136-.2L6.528 3.784c-.032-.104-.048-.176-.048-.216 0-.088.04-.136.128-.136h.768c.112 0 .184.016.232.056.056.032.096.104.128.2l1.984 7.815 1.832-7.815c.024-.104.064-.168.12-.2.056-.04.128-.056.24-.056h.624c.112 0 .184.016.24.056.056.032.096.104.12.2l1.856 7.919 2.016-7.919c.032-.104.072-.168.128-.2.056-.04.128-.056.232-.056h.728c.088 0 .136.04.136.136 0 .032-.008.064-.016.104-.008.04-.024.088-.048.16L14.48 13.2c-.032.104-.072.168-.136.2-.056.04-.12.056-.232.056h-.672c-.112 0-.184-.016-.24-.056-.056-.04-.104-.104-.12-.208L11.28 5.544 9.488 13.192c-.024.104-.064.168-.12.208-.056.04-.128.056-.24.056h-.672zM19.584 14.048c-.456 0-.912-.056-1.352-.16-.44-.112-.784-.232-1.04-.368-.144-.072-.24-.16-.28-.24-.04-.08-.056-.144-.056-.216v-.232c0-.096.04-.144.104-.144.04 0 .08.008.12.024.04.016.096.04.168.072.384.176.792.312 1.216.408.432.096.856.144 1.28.144.68 0 1.2-.12 1.568-.368.368-.248.552-.592.552-1.04 0-.304-.096-.568-.28-.784-.192-.216-.552-.416-1.088-.592l-1.56-.48c-.792-.248-1.376-.616-1.736-1.096-.36-.472-.544-1.008-.544-1.568 0-.464.104-.872.304-1.224.2-.352.472-.648.808-.888.336-.24.728-.416 1.176-.544.448-.12.928-.184 1.44-.184.192 0 .392.008.576.032.192.016.368.048.536.08.16.04.312.08.456.12.144.04.256.088.344.136.128.064.224.128.28.192.056.064.088.152.088.272v.224c0 .096-.032.144-.096.144-.04 0-.104-.016-.2-.056-.608-.28-1.296-.416-2.064-.416-.616 0-1.104.104-1.448.312-.344.208-.52.52-.52.936 0 .304.104.568.312.792.208.224.6.432 1.176.624l1.528.48c.784.248 1.352.592 1.696 1.04.344.448.512.96.512 1.528 0 .472-.096.904-.288 1.28-.192.376-.456.696-.8.968-.344.272-.76.48-1.248.632-.504.144-1.048.216-1.632.216z"/></svg>,
      benefits: ['Textract Expertise', 'Scalability', 'Security']
    },
    {
      name: 'Salesforce',
      category: 'CRM Integration Partner',
      description: 'Certified Salesforce partner for seamless CRM integration and workflow automation.',
      icon: <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M10.006 5.413a4.905 4.905 0 0 1 3.677-1.684c1.757 0 3.292.925 4.153 2.313a6.595 6.595 0 0 1 3.782 5.951c0 3.646-2.956 6.602-6.602 6.602a6.566 6.566 0 0 1-3.084-.767 4.887 4.887 0 0 1-4.118 2.252c-2.699 0-4.888-2.189-4.888-4.888 0-1.031.32-1.985.865-2.772a3.64 3.64 0 0 1-.14-1.01c0-2.019 1.637-3.656 3.656-3.656.742 0 1.433.222 2.011.603a6.595 6.595 0 0 1 .688-.944z"/></svg>,
      benefits: ['Native Integration', 'Workflow Automation', 'Data Sync']
    },
    {
      name: 'UiPath',
      category: 'RPA Partner',
      description: 'Strategic partner for UiPath Document Understanding and automation workflows.',
      icon: <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M11.993 0C5.363 0 0 5.371 0 12s5.363 12 11.993 12C18.63 24 24 18.629 24 12S18.63 0 11.993 0zM12 21.598c-5.295 0-9.598-4.303-9.598-9.598S6.705 2.402 12 2.402 21.598 6.705 21.598 12 17.295 21.598 12 21.598z"/></svg>,
      benefits: ['RPA Integration', 'Process Mining', 'Automation']
    },
    {
      name: 'Tungsten Automation',
      category: 'IDP Platform Partner',
      description: 'Official partner for Tungsten TotalAgility implementation and customization.',
      icon: <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/></svg>,
      benefits: ['Platform Expertise', 'Custom Development', 'Support']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-neutral-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-blue-400 to-blue-800 text-white overflow-hidden pb-32">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight max-w-5xl mx-auto">
            Our Technology Partners
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
            Collaborating with industry leaders to deliver the best intelligent automation solutions.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-20 md:h-32" viewBox="0 0 1440 120" preserveAspectRatio="none" fill="white">
            <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-16 py-20 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 border border-neutral-100 hover:border-primary/30 hover:-translate-y-1">
              <div className="text-primary mb-6">{partner.icon}</div>
              <div className="mb-2">
                <span className="inline-block px-3 py-1 bg-neutral-100 text-neutral-700 text-xs font-semibold rounded-full mb-3">
                  {partner.category}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-3">{partner.name}</h3>
              <p className="text-neutral-600 mb-6 leading-relaxed">{partner.description}</p>
              <div className="space-y-2">
                {partner.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-neutral-600">
                    <svg className="w-5 h-5 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>{benefit}</span>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Become a Partner</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join our partner program and deliver intelligent automation solutions to your customers.
            </p>
            <Link 
              to="/contact"
              className="px-8 py-4 bg-white text-primary rounded-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 inline-flex items-center justify-center gap-2"
            >
              Partner With Us
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PartnersPage;
