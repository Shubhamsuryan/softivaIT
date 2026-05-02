import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
  ArrowRightIcon, ClientMetricsIcon, ExpertiseIcon, PlatformAgnosticIcon, ServiceModelIcon,
  AzureIcon, GoogleDocumentAIIcon, AWSTextractIcon, TungstenIcon, UiPathIcon, AbbyyVantageIcon,
  LegalIcon, InnovationIcon, FinanceIcon, HealthcareIcon, LogisticsIcon, WorkflowIcon, CloudIcon, CloudBoltIcon
} from './icons';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);

  useEffect(() => {
    if (!isOpen) {
      setOpenMobileDropdown(null);
    }
  }, [isOpen]);

  const navLinkClasses = "text-neutral-700 hover:text-primary transition duration-300 font-medium";
  const activeLinkClasses = "text-primary";

  // Products Mega Menu - Featured + Grid Layout
  const productsMenu = {
    title: 'Products',
    description: 'Powerful agentic AI solutions for document processing',
    isMegaMenu: true,
    featured: {
      to: '/products',
      title: 'SoftivaIT Products',
      description: 'Sign Documents Anywhere, Anytime, using Any device',
      linkText: 'Learn More',
      icon: <ExpertiseIcon className="w-12 h-12 text-primary" />
    },
    children: [
      {
        to: '/products/iva-leadgen',
        text: 'IvaLeadGen',
        description: 'Generate leads using AI'
      },
      {
        to: '/products/redaction',
        text: 'Redaction',
        description: 'Remove sensitive data automatically'
      },
      {
        to: '/products/scrubbing',
        text: 'Scrubbing',
        description: 'Clean & anonymize datasets'
      }
    ]
  };

  // Solutions Mega Menu
  const solutionsMenu = {
    title: 'Solutions',
    description: 'Industry-specific intelligent automation solutions',
    isMegaMenu: true,
    featured: {
      to: '/solutions/overview',
      title: 'Industry Solutions',
      description: 'Tailored automation solutions designed for your industry needs',
      linkText: 'Explore All',
      icon: <InnovationIcon className="w-12 h-12 text-primary" />
    },
    children: [
      { to: '/solutions/banking', text: 'Banking & Financial Services', description: 'Automate loan processing, KYC, and compliance workflows.' },
      { to: '/solutions/healthcare', text: 'Healthcare', description: 'Streamline patient records, claims, and medical document processing.' },
      { to: '/solutions/legal', text: 'Legal', description: 'Accelerate contract review, case management, and discovery.' },
      { to: '/solutions/logistics', text: 'Logistics & Supply Chain', description: 'Optimize shipping documents, invoices, and inventory management.' },
      { to: '/solutions/manufacturing', text: 'Manufacturing', description: 'Digitize quality control, compliance, and production documentation.' },
      { to: '/solutions/retail', text: 'Retail & E-commerce', description: 'Automate order processing, returns, and vendor management.' }
    ]
  };

  // Platform Mega Menu
  const platformMenu = {
    title: 'Platform',
    description: 'Our technology capabilities and integrations',
    isMegaMenu: true,
    featured: {
      to: '/platform/overview',
      title: 'Platform Overview',
      description: 'Our technology capabilities and integrations for intelligent automation',
      linkText: 'Explore Platform',
      icon: <PlatformAgnosticIcon className="w-12 h-12 text-primary" />
    },
    children: [
      { to: '/platform/ocr', text: 'OCR', description: 'Optical Character Recognition' },
      { to: '/platform/nlp', text: 'NLP', description: 'Natural Language Processing' },
      { to: '/platform/data-extraction', text: 'Data Extraction', description: 'Intelligent data extraction' },
      { to: '/platform/integrations/crm', text: 'CRM', description: 'Customer Relationship Management' },
      { to: '/platform/integrations/apis', text: 'APIs', description: 'REST and GraphQL APIs' },
      { to: '/platform/integrations/webhooks', text: 'Webhooks', description: 'Real-time event webhooks' },
      { to: '/platform/security', text: 'Security & Compliance', description: 'Enterprise security standards' }
    ]
  };

  // Resources Mega Menu
  const resourcesMenu = {
    title: 'Resources',
    description: 'Learning and documentation',
    isMegaMenu: true,
    featured: {
      to: '/resources/library',
      title: 'Resource Library',
      description: 'Access our comprehensive library of guides, documentation, and insights',
      linkText: 'View All Resources',
      icon: <ServiceModelIcon className="w-12 h-12 text-primary" />
    },
    children: [
      { to: '/resources/blog-insights', text: 'Blog', description: 'Latest articles and insights' },
      { to: '/resources/documentation', text: 'Documentation', description: 'Technical documentation' },
      { to: '/resources/case-studies', text: 'Case Studies', description: 'Real-world success stories' },
      { to: '/resources/whitepapers', text: 'Whitepapers', description: 'In-depth industry reports' },
      { to: '/resources/webinars', text: 'Webinars', description: 'Expert training sessions' },
      { to: '/resources/guides', text: 'Guides', description: 'Step-by-step tutorials' }
    ]
  };

  // Company Mega Menu
  const companyMenu = {
    title: 'Company',
    description: 'About us',
    isMegaMenu: true,
    featured: {
      to: '/about',
      title: 'About SoftivaIT',
      description: 'Learn about our mission, values, and the team driving innovation in intelligent automation',
      linkText: 'Our Story',
      icon: <ClientMetricsIcon className="w-12 h-12 text-primary" />
    },
    children: [
      { to: '/about', text: 'About Us', description: 'Learn about SoftivaIT' },
      { to: '/contact', text: 'Contact Us', description: 'Get in touch with us' },
      { to: '/company/careers', text: 'Careers', description: 'Join our team' },
      { to: '/company/partners', text: 'Partners', description: 'Our strategic partners' }
    ]
  };

  // Training Mega Menu
  const trainingMenu = {
    title: 'Training',
    description: 'Upskill your team with hands-on training across leading IDP and cloud platforms.',
    isMegaMenu: true,
    featured: {
      to: '/training/overview',
      title: 'Training Programs',
      description: 'Upskill your team with hands-on training across leading IDP and cloud platforms',
      linkText: 'View All Training',
      icon: <WorkflowIcon className="w-12 h-12 text-primary" />
    },
    children: [
      { to: '/training/tungsten-totalagility', text: 'Tungsten TotalAgility', description: 'Build and scale intelligent automation workflows.' },
      { to: '/training/gcp', text: 'GCP', description: 'Learn Google Cloud best practices for document AI.' },
      { to: '/training/azure', text: 'Azure', description: 'Master Azure Document Intelligence integrations.' },
      { to: '/training/aws', text: 'AWS', description: 'Amazon Web Services document processing training.' },
      { to: '/training/custom', text: 'Custom Training', description: 'Tailored training programs for your team.' }
    ]
  };

  const navLinks = [
    { to: '/', text: 'Home', children: undefined },
    { text: 'Products', ...productsMenu, to: '/products' },
    { text: 'Solutions', ...solutionsMenu, to: '/solutions' },
    { text: 'Platform', ...platformMenu, to: '/platform' },
    { text: 'Resources', ...resourcesMenu, to: '/resources' },
    { text: 'Training', ...trainingMenu, to: '/training' },
    { text: 'Company', ...companyMenu, to: '/company' }
  ];

  return (
    <header className="bg-white/95 backdrop-blur-md sticky top-0 z-50 border-b border-neutral-200 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center gap-3">
              <img src="/components/logo.svg" alt="SoftivaIT" className="h-10 w-auto" style={{scale:"1"}}/>
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-6 flex-1 justify-center">
            {navLinks.map((link) => (
              link.children ? (
                <div
                  key={link.text}
                  className="relative group"
                  onMouseEnter={() => setOpenDropdown(link.to)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    className={`${navLinkClasses} px-4 py-2 flex items-center rounded-lg whitespace-nowrap text-sm font-semibold hover:bg-neutral-100 transition-all duration-300 cursor-pointer`}
                  >
                    {link.text}
                    {/* <svg className={`w-5 h-5 ml-1.5 transition-transform duration-300 ${openDropdown === link.to ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg> */}
                  </button>
                  <div className={`absolute top-full left-1/2 -translate-x-1/2 pt-2 z-10 ${link.isMegaMenu ? 'w-[720px] lg:w-[1000px] max-w-[calc(100vw-2rem)]' : 'w-80 max-w-[calc(100vw-2rem)]'} ${openDropdown === link.to ? '' : 'pointer-events-none'}`}>
                    <div className={`bg-white rounded-2xl shadow-2xl border border-neutral-100 overflow-hidden transition-all duration-300 ease-in-out ${openDropdown === link.to ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-3 invisible'}`}>
                      {link.isMegaMenu ? (
                        // Mega Menu - Featured Section + Grid
                        <div className="grid grid-cols-12">
                          {/* Featured Section - Left */}
                          <div className="hidden lg:flex lg:col-span-4 bg-gradient-to-br from-neutral-50 to-white p-8 flex-col justify-between border-r border-neutral-200">
                            {'featured' in link && link.featured ? (
                              <>
                                <div>
                                  <div className="mb-4">
                                    {link.featured.icon}
                                  </div>
                                  <h3 className="text-lg font-bold text-neutral-900 mb-3 leading-tight">{link.featured.title}</h3>
                                  <p className="text-sm text-neutral-600 leading-relaxed mb-6">{link.featured.description}</p>
                                </div>
                                <NavLink
                                  to={link.featured.to}
                                  onClick={() => setOpenDropdown(null)}
                                  className="inline-flex items-center text-primary font-semibold text-sm hover:gap-2 gap-1 transition-all duration-300 group px-4 py-2 rounded-lg bg-white border border-primary/20 shadow-lg hover:shadow-2xl hover:-translate-y-1"
                                >
                                  {link.featured.linkText}
                                  <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                                </NavLink>
                              </>
                            ) : null}
                          </div>
                          {/* Grid Section - Right */}
                          <div className="col-span-12 lg:col-span-8 p-6">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 max-h-[500px] overflow-y-auto pr-2">
                              {link.children?.map(child => (
                                'to' in child && child.to ? (
                                  <NavLink
                                    key={child.to}
                                    to={child.to}
                                    onClick={() => setOpenDropdown(null)}
                                    className="group/item p-4 mb-1 rounded-lg bg-white hover:bg-primary/5 border border-neutral-100 hover:border-primary/30 transition-all duration-200 shadow-md hover:shadow-xl hover:-translate-y-1"
                                  >
                                    <h4 className="font-semibold text-sm text-neutral-900 mb-1 group-hover/item:text-primary transition-colors">{'text' in child && child.text}</h4>
                                    <p className="text-xs text-neutral-600 leading-relaxed">{'description' in child && child.description}</p>
                                  </NavLink>
                                ) : null
                              ))}
                            </div>
                          </div>
                        </div>
                      ) : (
                        // Standard Dropdown
                        <div className="p-6">
                          <h3 className="text-sm font-bold text-primary mb-4 uppercase tracking-wider">{link.title}</h3>
                          <div className="space-y-1">
                            {link.children.map((child, index) =>
                              'heading' in child ? (
                                <div key={`heading-${index}`} className="pt-4 pb-2 px-2">
                                  <p className="text-xs font-bold text-neutral-400 uppercase tracking-wider">{child.heading}</p>
                                </div>
                              ) : child.to ? (
                                <NavLink
                                  key={child.to}
                                  to={child.to}
                                  onClick={() => setOpenDropdown(null)}
                                  className="group/item flex items-start p-3 rounded-lg bg-white hover:bg-primary/5 transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-1 border border-neutral-100"
                                >
                                  <div className="flex-1">
                                    <p className="text-sm font-semibold text-neutral-900 group-hover/item:text-primary transition-colors">{child.text}</p>
                                    <p className="text-xs text-neutral-500 mt-0.5">{child.description}</p>
                                  </div>
                                  <ArrowRightIcon className="w-4 h-4 text-neutral-300 group-hover/item:text-primary ml-2 flex-shrink-0 transition-colors" />
                                </NavLink>
                              ) : null
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) => `${navLinkClasses} ${isActive ? activeLinkClasses : ''} px-4 py-2 rounded-lg text-sm font-semibold hover:bg-neutral-100 transition-all duration-300`}
                >
                  {link.text}
                </NavLink>
              )
            ))}
          </nav>
          <div className="hidden md:flex items-center gap-4">
            <Link
              to="/contact"
              className="px-6 py-2.5 bg-primary  hover:from-blue-700 hover:to-primary text-white rounded-lg font-bold shadow-md hover:shadow-lg transition-all duration-300  text-sm"
            >
              Book a Demo
            </Link>
          </div>
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary transition-colors"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden border-t border-neutral-200 bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              link.children ? (
                <div key={link.text}>
                  <div className="flex items-center justify-between">
                    <NavLink
                      to={link.to}
                      end
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) => `flex-grow px-3 py-2 rounded-md text-base font-medium ${navLinkClasses} ${isActive ? activeLinkClasses : ''}`}
                    >
                      {link.text}
                    </NavLink>
                    <button
                      onClick={() => setOpenMobileDropdown(openMobileDropdown === link.to ? null : link.to)}
                      className={`p-2 rounded-md ${navLinkClasses}`}
                      aria-label="Toggle submenu"
                    >
                      <svg className={`w-5 h-5 transition-transform ${openMobileDropdown === link.to ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </button>
                  </div>
                  {openMobileDropdown === link.to && (
                    <div className="pl-5 mt-1 space-y-1 border-l-2 border-neutral-200 ml-3">
                      {link.children?.map((child, index) =>
                        'heading' in child ? (
                          <div key={`heading-${index}`} className="pt-3 pb-1 px-3">
                            <p className="text-xs font-bold text-neutral-500 uppercase tracking-wider">{child.heading}</p>
                          </div>
                        ) : child.to ? (
                          <NavLink
                            key={child.to}
                            to={child.to}
                            onClick={() => setIsOpen(false)}
                            className={({ isActive }) => `block px-3 py-2 rounded-md text-base font-medium ${navLinkClasses} ${isActive ? activeLinkClasses : ''}`}
                          >
                            {child.text}
                          </NavLink>
                        ) : null
                      )}
                    </div>
                  )}
                </div>
              ) : (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) => `block px-3 py-2 rounded-md text-base font-medium ${navLinkClasses} ${isActive ? activeLinkClasses : ''}`}
                >
                  {link.text}
                </NavLink>
              )
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
