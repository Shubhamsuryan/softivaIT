import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ExpertiseIcon, 
  ServiceModelIcon, 
  PlatformAgnosticIcon,
  ArrowRightIcon,
  InnovationIcon,
  WorkflowIcon,
  CloudIcon
} from '../components/icons';

const ProductsPage: React.FC = () => {
  const products = [
    {
      id: 'iva-leadgen',
      title: 'IvaLeadGen',
      description: 'Generate high-quality leads using advanced AI algorithms and machine learning.',
      fullDescription: 'Leverage cutting-edge artificial intelligence to identify, qualify, and nurture leads automatically. Our AI-powered platform analyzes customer behavior, predicts buying intent, and delivers targeted insights.',
      icon: <ExpertiseIcon className="w-12 h-12" />,
      color: 'from-blue-500 to-blue-600',
      features: ['AI-Powered Lead Scoring', 'Automated Outreach', 'Behavioral Analytics', 'CRM Integration']
    },
    {
      id: 'redaction',
      title: 'Redaction',
      description: 'Automatically detect and remove sensitive data from documents with precision.',
      fullDescription: 'Protect sensitive information with intelligent document redaction. Our system uses advanced pattern recognition to identify PII, financial data, and confidential information across all document types.',
      icon: <ServiceModelIcon className="w-12 h-12" />,
      color: 'from-purple-500 to-purple-600',
      features: ['AI Pattern Detection', 'Multi-format Support', 'Compliance Ready', 'Audit Trails']
    },
    {
      id: 'scrubbing',
      title: 'Scrubbing',
      description: 'Clean and anonymize datasets while maintaining data utility and integrity.',
      fullDescription: 'Transform raw data into privacy-compliant datasets. Our scrubbing technology removes personally identifiable information while preserving analytical value for research and testing.',
      icon: <PlatformAgnosticIcon className="w-12 h-12" />,
      color: 'from-green-500 to-green-600',
      features: ['Data Anonymization', 'Format Preservation', 'GDPR Compliant', 'Batch Processing']
    }
  ];

  const benefits = [
    {
      icon: <InnovationIcon className="w-8 h-8" />,
      title: 'AI-Powered Automation',
      description: 'Leverage advanced machine learning models to automate complex document processing tasks.'
    },
    {
      icon: <WorkflowIcon className="w-8 h-8" />,
      title: 'Seamless Integration',
      description: 'Easy integration with your existing systems and workflows via REST APIs and webhooks.'
    },
    {
      icon: <CloudIcon className="w-8 h-8" />,
      title: 'Cloud-Native Architecture',
      description: 'Built for scale with enterprise-grade security and 99.9% uptime SLA.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-neutral-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-blue-400 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center p-2 bg-white/10 rounded-full mb-6 backdrop-blur-sm">
              <ExpertiseIcon className="w-16 h-16" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Intelligent Document Processing Solutions
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed">
              Transform your document workflows with powerful AI solutions designed for modern businesses
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="px-8 py-4 bg-white text-primary rounded-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 inline-flex items-center justify-center gap-2"
              >
                Get Started
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
              <Link 
                to="/resources/documentation" 
                className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white rounded-lg font-bold hover:bg-white/20 transition-all duration-300 inline-flex items-center justify-center gap-2"
              >
                View Documentation
              </Link>
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

      {/* Products Grid */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            Our Products
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Powerful AI-driven solutions designed to streamline your document processing and data management workflows
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {products.map((product, index) => (
            <div 
              key={product.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-neutral-100 hover:border-primary/30 hover:-translate-y-1"
            >
              <div className={`bg-gradient-to-br ${product.color} p-8 text-white relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-black/10 rounded-full -ml-12 -mb-12"></div>
                <div className="relative z-10">
                  <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {product.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{product.title}</h3>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-neutral-600 mb-4 leading-relaxed">
                  {product.fullDescription}
                </p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-neutral-900 mb-3 text-sm uppercase tracking-wide">Key Features</h4>
                  <ul className="space-y-2">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-neutral-600">
                        <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link 
                  to={`/products/${product.id}`}
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-300 group/link"
                >
                  Learn More
                  <ArrowRightIcon className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gradient-to-br from-neutral-50 to-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
              Why Choose Our Products?
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Built with cutting-edge technology and designed for enterprise scale
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-neutral-100"
              >
                <div className="inline-flex p-3 bg-primary/10 rounded-lg text-primary mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Product - ACMO Signmore */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-gradient-to-br from-primary/5 to-blue-50 rounded-3xl overflow-hidden border border-primary/10">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="p-8 lg:p-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold text-sm mb-6">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                Featured Product
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                SoftivaIT Electronic Signature
              </h2>
              <p className="text-lg text-neutral-600 mb-3">
                Enterprise Signature Solution
              </p>
              <p className="text-neutral-600 mb-6 leading-relaxed">
                Sign Documents Anywhere, Anytime, using Any device with SignMore. Experience seamless electronic signature workflows with enterprise-grade security and compliance.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Multi-device support (Desktop, Tablet, Mobile)',
                  'Legally binding electronic signatures',
                  'Advanced document tracking & audit trails',
                  'Integration with major business platforms'
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-neutral-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link 
                to="/products"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 hover:gap-3 shadow-lg hover:shadow-xl"
              >
                Learn More
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
            </div>
            <div className="relative h-full min-h-[400px] bg-gradient-to-br from-primary to-blue-700 flex items-center justify-center p-12">
              <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]"></div>
              <div className="relative">
                <div className="w-64 h-64 bg-white/10 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
                <ExpertiseIcon className="w-48 h-48 text-white relative z-10 drop-shadow-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-gradient-to-br from-primary via-blue-400 to-blue-800 rounded-3xl p-12 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Document Workflow?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Get started with our intelligent document processing solutions today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="px-8 py-4 bg-white text-primary rounded-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 inline-flex items-center justify-center gap-2"
              >
                Book a Demo
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
              <Link 
                to="/pricing"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white rounded-lg font-bold hover:bg-white/20 transition-all duration-300"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
