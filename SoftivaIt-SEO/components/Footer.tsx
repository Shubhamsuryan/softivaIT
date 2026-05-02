import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const socialLinks = [
    { name: 'Twitter', href: '#', disabled: true, icon: 'M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6.02,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/company/softiva-it/', icon: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' },
    { name: 'YouTube', href: 'https://www.youtube.com/@Softiva-IT', icon: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z' },
  ];
  
  const footerLinks = [
    { title: 'Offerings', links: [{ text: 'Platform', to: '/platform'}, { text: 'Solutions', to: '/solutions'}, { text: 'Services', to: '/services'}] },
    { title: 'Company', links: [{ text: 'About Us', to: '/about'}, { text: 'Contact', to: '/contact'}] },
    { title: 'Resources', links: [
        { text: 'IDP Cost Calculator', to: '/resources/roi-calculator'},
        { text: 'FAQ', to: '/resources/faq'},
        { text: 'Blog', to: '/resources/blog-insights'},
    ]},
  ];

  return (
    <footer className="bg-neutral-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h2 className="text-2xl font-bold text-white">SoftivaIT</h2>
            <p className="mt-4 text-neutral-400 max-w-sm">
              Empowering businesses with agentic AI to autonomously handle document processing and complex workflows.
            </p>
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target={item.disabled ? undefined : "_blank"}
                  rel={item.disabled ? undefined : "noopener noreferrer"}
                  onClick={(e) => item.disabled && e.preventDefault()}
                  className={`text-neutral-400 hover:text-white ${item.disabled ? 'pointer-events-none opacity-50' : ''}`}
                >
                  <span className="sr-only">{item.name}</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d={item.icon} />
                  </svg>
                </a>
              ))}
            </div>
            <div className="mt-6 text-sm text-neutral-400 space-y-1">
              <p>
                Email:{" "}
                <a className="hover:text-white" href="mailto:info@softivait.com">
                  info@softivait.com
                </a>
              </p>
              <p>
                Phone/WhatsApp:{" "}
                <a className="hover:text-white" href="tel:+917840020111">
                  +91 78400 20111
                </a>
              </p>
            </div>
          </div>
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold text-neutral-200 tracking-wider uppercase">{section.title}</h3>
              <ul className="mt-4 space-y-3">
                {section.links.map((link) => (
                  <li key={link.text}>
                    <Link to={link.to} className="text-base text-neutral-400 hover:text-white transition-colors duration-300">
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-12 pt-8 border-t border-neutral-800 text-center text-neutral-500">
          <p>&copy; {new Date().getFullYear()} SoftivaIT, Inc. All rights reserved.</p>
        </div>
      </div>
       
        
    </footer>
  );
};

export default Footer;
