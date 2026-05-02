import React, { ChangeEvent, FormEvent, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';



function Hero() {
  return (
    <section className=" text-white py-24" style={{ position: 'relative', backgroundColor: '#00000081' }}>
      <img
        src="/hero-bg.avif"
        alt=""
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' , filter: 'brightness(50%)'}}
      />

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center relative">
        <div>
          <h1 className="text-5xl text-white-100  font-bold mb-6 ">Tungsten TotalAgility Training</h1>

          <p className="text-gray-300 mb-6">
            Learn intelligent document automation, workflow orchestration, and enterprise process automation using Tungsten
            TotalAgility.
          </p>

          <div className="flex gap-4">
            <Link
              to="/contact"
              className="bg-blue-600 px-6 py-3 rounded-lg inline-flex items-center justify-center"
            >
              Enroll Now
            </Link>
            
          </div>
        </div>

        <div style={{ position: 'relative' }}>
          <img src="/hero.jpg" alt="automation" className="rounded-lg" />
          <div
            style={{
              backgroundColor: '#000',
              height: '100%',
              width: '100%',
              position: 'absolute',
              top: 0,
              left: 0,
              opacity: 0.4
            }}
          />
        </div>
      </div>
    </section>
  );
}

function Highlights() {
  const IconClipboard = () => (
    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
      />
    </svg>
  );

  const IconPhone = () => (
    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-3l-4 4z"
      />
    </svg>
  );

  const IconChart = () => (
    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
      />
    </svg>
  );

  const highlights = [
    { icon: <IconClipboard />, title: 'Live interactive Sessions' },
    { icon: <IconPhone />, title: 'Mentor Support' },
    { icon: <IconChart />, title: 'Project Based Learning' },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-primary mb-12">Key Highlights</h2>

        <div className="grid md:grid-cols-3 gap-12">
          {highlights.map((item) => (
            <div key={item.title} className="flex items-start gap-4">
              <div className="flex-shrink-0 mt-1">{item.icon}</div>
              <p className="text-lg text-gray-800 font-medium">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CourseDetails() {
  return (
    <section className="py-5 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid md:grid-cols-3 gap-8 ">
          <div className="p-6 shadow rounded-lg">
            <h3 className="font-semibold text-xl mb-3">Intelligent Document Processing</h3>
            <p className="text-gray-600">
              Extract and classify data from documents using AI-powered OCR and automation tools.
            </p>
          </div>

          <div className="p-6 shadow rounded-lg">
            <h3 className="font-semibold text-xl mb-3">Workflow Automation</h3>
            <p className="text-gray-600">
              Design and automate business processes to reduce manual intervention and increase productivity.
            </p>
          </div>

          <div className="p-6 shadow rounded-lg">
            <h3 className="font-semibold text-xl mb-3">Analytics &amp; Insights</h3>
            <p className="text-gray-600">
              Monitor business workflows with real-time analytics and performance dashboards.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Curriculum() {
  const modules = [
    {
      title: 'Architecture & Scripting Basics',
      content: [
        'KTA architecture, object model',
        'When to use config vs scripting',
        'Script basics: variables, field read/write',
        'Lab - Normalize & validate fields',
        'Output - intake + validation solution'
      ]
    },
    {
      title: 'Transformation Capture Advanced',
      content: [
        'Locator strategies (regex, format, table)',
        'Confidence tuning, extraction patterns',
        'Script - normalization, cross-field validation, table iteration',
        'Lab - Invoice extraction with validations',
        'Output - capture project with exception handling'
      ]
    },
    {
      title: 'Workflow Advanced',
      content: [
        'Process design, queues, SLA, escalation',
        'Routing strategies (role, priority)',
        'Script - routing logic, priority calc, SLA timers',
        'Lab - approval workflow with escalation',
        'Output - workflow with routing & SLA'
      ]
    },
    {
      title: 'Transformation & Integration',
      content: [
        'Complex variables, table handling',
        'CSV & JSON generation',
        'Script - loops, aggregation & iteration, deduplication',
        'Lab - export data to CSV + JSON',
        'Output - transformation + export module'
      ]
    },
    {
      title: 'Validation, Debugging & AI',
      content: [
        'Validation UX, audit trail & logging',
        'Reusable scripting helpers',
        'AI concepts (LLM + OCR)',
        'Lab - enhanced validation + audit',
        'Output - end-to-end solution'
      ]
    },
    {
      title: 'Signature Detection',
      content: [
        'Detect signature regions (bottom area bias)',
        'Set Signature Indicator (Y/N)',
        'Route unsigned docs to validation',
        'Export signature snippet'
      ]
    },
    {
      title: 'Barcode Reader',
      content: [
        'Read QR/Barcode from document',
        'Extract encoded data (contact/info)',
        'Use as key for lookup or auto-fill',
        'Handle multiple barcode formats'
      ]
    },
    {
      title: 'Data Lookups',
      content: [
        'DB/API lookup using extracted keys (e.g., Vendor ID)',
        'Enrich missing fields',
        'Validate against master data',
        'Handle lookup failures with fallback'
      ]
    },
    {
      title: 'Azure Document AI Integration',
      content: [
        'Send document to Azure Document Intelligence',
        'Parse JSON response',
        'Map fields to KTA'
      ]
    },
    {
      title: 'GCP Document AI Integration',
      content: [
        'Send document to GCP Doc AI processor',
        'Parse JSON response',
        'Normalize fields & Map fields to KTA',
        'Combine with KTA workflow'
      ]
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [showAll, setShowAll] = useState(false);

  const visibleModules =  modules;

  const toggleModule = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary">Tungsten TotalAgility Curriculum</h2>

        <div className="space-y-2">
          {visibleModules.map((module, index) => (
            <div
              key={`${module.title}-${index}`}
              className={`border border-gray-300 rounded-lg overflow-hidden ${openIndex === index ? 'bg-blue-200' : 'bg-white'}`}
            >
              <button
                type="button"
                onClick={() => toggleModule(index)}
                aria-expanded={openIndex === index}
                aria-controls={`curriculum-panel-${index}`}
                className={`w-full flex justify-between items-center px-6 py-4 font-semibold text-left ${
                  openIndex === index ? 'bg-primary/20 text-primary' : 'bg-white text-gray-900 hover:bg-gray-50'
                }`}
              >
                <span>{module.title}</span>
                <span
                  className={`text-2xl transition-transform duration-300 ease-in-out ${openIndex === index ? 'rotate-0' : 'rotate-180'}`}
                  aria-hidden="true"
                >
                  ▲
                </span>
              </button>

              {module.content.length > 0 && (
                <div
                  id={`curriculum-panel-${index}`}
                  className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                    openIndex === index ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div
                      className={`px-6 py-4 bg-white text-gray-700 transition-opacity duration-300 ease-in-out ${
                        openIndex === index ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      <div className="border-l-4 border-blue-200 pl-4 space-y-2">
                        {module.content.map((item) => (
                          <div key={item} className="flex items-start gap-3">
                            <span className="text-primary mt-0.5">•</span>
                            <p className="text-sm leading-relaxed">{item}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        

      </div>
    </section>
  );
}

function LearningOptions() {
  const options = [
    {
      image: '/developer1.webp',
      title: 'Self-Paced Learning',
      points: [
        '24/7 access to premium quality self-paced high-end learning videos providing enhanced training.',
        'Explore the digital learning experience with LMS access.',
        'Get access to study materials develop by professionals with years of expertise.'
      ],
      buttonText: 'Get Access'
    },
    {
      image: '/developer2.webp',
      title: 'Led by Industry Experts',
      points: [
        'Experienced practitioners providing case studies and best practices to sessions.',
        'Regular/Weekend batches meeting the requirements of the students.',
        '24/7 online support and guidance by top industry experts and mentors to solve conceptual doubts.'
      ],
      buttonText: 'Enroll Now'
    },
    {
      image: '/developer3.avif',
      title: 'Corporate Solutions',
      points: [
        'Access world-class learning experiences developed on industry-designed projects, mentoring, etc.',
        '24/7 online support and guidance by top industry experts and mentors.',
        'Top-notch online training by industry experts and self-paced learning with effective guidance.'
      ],
      buttonText: 'View More'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-primary">Learning Options</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {options.map((option) => (
            <div
              key={option.title}
              className="bg-white border-2 border-gray-300 rounded-lg overflow-hidden shadow hover:shadow-lg transition"
            >
              <div className="h-48 bg-gray-300 overflow-hidden">
                <img src={option.image} alt={option.title} className="w-full h-full object-cover" />
              </div>

              <div className="p-6">
                <h3 className="text-2xl text-[#1f4e79] font-semibold mb-4 text-gray-900">{option.title}</h3>

                <ul className="space-y-3 mb-6">
                  {option.points.map((point) => (
                    <li key={point} className="flex gap-3 text-gray-700 text-sm leading-relaxed">
                      <span className="text-[#1f4e79] font-bold mt-1">›</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                
                <Link
              to="/contact"
              className="w-full bg-[#1f4e79] hover:bg-[#135197] text-white px-6 py-3 rounded font-semibold transition flex items-center justify-center gap-2"
            >
              {option.buttonText}
              <span>»</span>
            </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// function Certification() {
//   return (
//     <section className="py-20 bg-gray-100">
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="grid md:grid-cols-2 gap-20 items-center">
//           <div>
//             <h2 className="text-4xl font-bold mb-8 text-primary">Tungsten TotalAgility Certification</h2>

//             <p className="text-gray-800 mb-6 leading-relaxed">
//               The SoftivaIT certification is widely acknowledged, enhancing the credibility of your resume and opening doors
//               to high-level positions in leading multinational corporations globally.
//             </p>

//             <p className="text-gray-800 mb-6 leading-relaxed">
//               At the end of this course, you will receive a course completion certificate which certifies that you have
//               successfully completed <span className="font-bold">SoftivaIT</span> training in{' '}
//               <span className="font-bold">Tungsten TotalAgility</span> technology.
//             </p>

//             <p className="text-gray-800 leading-relaxed">
//               You will get certified in <span className="font-bold">Tungsten TotalAgility</span> by clearing the online
//               examination with a minimum score of 70%.
//             </p>
//           </div>

//           <div className="flex justify-center">
//             <div className="border-8 border-gray-800 rounded-lg shadow-2xl overflow-hidden">
//               <img src="/Certificate.png" alt="Tungsten TotalAgility Certification" className="w-full h-auto" />
//             </div>
//           </div>
//         </div>

//         <div className="mt-16 text-center bg-white py-8 rounded-lg">
//           <div className="flex items-center justify-center gap-4">
//             <span className="text-2xl font-semibold text-gray-800">Get Certification</span>
//             <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded font-semibold transition">
//               Join us
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

function Objectives() {
  const faqs = [
    
    {
      question: 'What you will learn in Tungsten Total Agility Training?',
      answer:
        'You learn end-to-end intelligent automation: capture and extraction concepts, validation and exception handling, workflow/process design (queues, SLAs, routing), scripting fundamentals, integrations, and best practices to build maintainable solutions.'
    },
    {
      question: 'Who should take Tungsten Total Agility Training?',
      answer:
        'This course is ideal for IDP/RPA developers, workflow/BPM engineers, solution architects, QA/automation testers, and business analysts who work on document-centric processes and want to automate capture-to-workflow pipelines.'
    },
    {
      question: 'What are the prerequisites for Tungsten Total Agility Training?',
      answer:
        'Basic understanding of business processes, data fields, and web applications is helpful. Prior exposure to scripting (any language) and databases/APIs is a plus, but beginners can start with the fundamentals covered in the course.'
    },
    {
      question: 'Why should you go for a Tungsten Total Agility Course?',
      answer:
        'Tungsten TotalAgility is widely used for enterprise document automation and orchestration. Learning it helps you design scalable, auditable workflows, reduce manual processing, and deliver measurable efficiency improvements in real-world projects.'
    },
    {
      question: 'What career opportunities are available for professionals skilled in Tungsten TotalAgility?',
      answer:
        'Common roles include IDP Developer, Workflow/BPM Developer, Automation Engineer, Intelligent Automation Consultant, Solution Architect, and Platform Specialist supporting capture, validation, and process orchestration initiatives.'
    },
    
    {
      question: 'Is Tungsten Total Agility Successful Choice for Career?',
      answer:
        'Yes—when paired with strong fundamentals in automation, document processing, and integrations. It’s especially valuable for enterprise automation work where workflows, governance, and exception handling are as important as extraction accuracy.'
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [showAll, setShowAll] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: '',
    phone: '',
    message: ''
  });

  const visibleFaqs =  faqs;

  const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value
    }));
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    // Keeping original content behavior.
    // eslint-disable-next-line no-console
    console.log(formData);
    alert('Thank you for your enquiry!');
  };

  return (
    <section className="py-20 bg-white flex justify-center items-center">
      <div className="max-w-5xl mx-auto px-6">
        
          <div className="md:col-span-2">
            <h2 className="text-4xl font-bold mb-12 text-primary">Tungsten TotalAgility Objectives</h2>

            <div className="space-y-2">
              {visibleFaqs.map((faq, index) => (
                <div
                  key={`${faq.question}-${index}`}
                  className={`border border-gray-300 rounded-lg overflow-hidden ${openIndex === index ? 'bg-blue-200' : 'bg-white'}`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    aria-expanded={openIndex === index}
                    aria-controls={`objectives-panel-${index}`}
                    className={`w-full flex justify-between items-center px-6 py-4 font-semibold text-left transition ${
                      openIndex === index ? 'bg-primary/20 text-primary' : 'bg-white text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    <span>{faq.question}</span>
                    <span
                      className={`text-2xl transition-transform duration-300 ease-in-out ${
                        openIndex === index ? 'rotate-0' : 'rotate-180'
                      }`}
                      aria-hidden="true"
                    >
                      ▲
                    </span>
                  </button>

                  {faq.answer && (
                    <div
                      id={`objectives-panel-${index}`}
                      className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                        openIndex === index ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div
                          className={`px-6 py-4 bg-white text-gray-700 transition-opacity duration-300 ease-in-out ${
                            openIndex === index ? 'opacity-100' : 'opacity-0'
                          }`}
                        >
                          <p>{faq.answer}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            
          </div>

          
        </div>
      
    </section>
  );
}

function FAQ() {
  const stats = [
    { icon: '📕', number: '20+', label: 'Years of Experience' },
    { icon: '🏢', number: '50+', label: 'Corporate Clients' },
    { icon: '📚', number: '100+', label: 'Courses' },
    
  ];

  


  const [activeTab, setActiveTab] = useState(0);
  const [openIndex, setOpenIndex] = useState<number | null>(2);
  const [showAll, setShowAll] = useState(false);



  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-primary text-center">Why SoftivaIT?</h2>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="bg-gradient-to-br from-blue-200 to-blue-900 rounded-lg p-6 mb-4 inline-block text-4xl">
                {stat.icon}
              </div>
              <p className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</p>
              <p className="text-gray-700 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        

       

       
      </div>
    </section>
  );
}

function Testimonials() {
  const testimonials = [
    {
      name: 'Sunitha Viswanathan',
      rating: 5,
      review:
        'I successfully completed my course, thanks to SoftivaIT. This is the right place for all industry-recognized courses. I shall definitely recommend this training to my friends and colleagues.'
    },
    {
      name: 'Akshat Sharma',
      rating: 4,
      review:
        'I am feeling very satisfied with this course and thanks to each member involved in it. The videos are nice. The trainer is very good. Contents are up to date. What should I say? A good online training provider. Thanks a lot!'
    },
    {
      name: 'Pavan Surya',
      rating: 4,
      review:
        'Through this Tungsten Totalagility training I gained valuable knowledge and also got hands-on experience through projects. Support was helpful, trainers are really good and explained every concept in depth.'
    },
    {
      name: 'Mark Vogle',
      rating: 4,
      review:
        'This training course covers a very broad range of disciplines and the challenge was to get the grip of all these new elements quickly. That made the course a bit hard to achieve but of great fun, and it has proved a tremendous opportunity for me.'
    },
    {
      name: 'Arushi',
      rating: 5,
      review:
        "I'm thankful to SoftivaIT for providing these kinds of courses. Very nice course content that is useful and informative. I love the way you provide everything right and up to the mark covering all topics that make people feel better."
    }
  ];

  const renderStars = (rating: number) => '★'.repeat(rating) + '☆'.repeat(Math.max(0, 5 - rating));

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-4 text-primary">Hear From Our Learners</h2>

        <div className="mb-12">
          <p className="text-gray-800">
            Tungsten TotalAgility rated <span className="text-primary text-xl">★★★★☆</span>{' '}
            <span className="font-semibold">(4.2 / 5)</span> based on <span className="font-semibold">6 reviews</span>.
          </p>
        </div>

        <div className="space-y-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition border border-gray-200"
            >
              <div className="flex items-center gap-2 mb-3">
                <h3 className="text-lg font-semibold text-gray-900">{testimonial.name}</h3>
                <span className="text-primary text-lg">{renderStars(testimonial.rating)}</span>
              </div>

              <p className="text-gray-700 leading-relaxed">{testimonial.review}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// function ContactForm() {
//   const trendingCourses = [
//     'Oracle JD Edwards Technical',
//     'Salesforce Business Analyst',
//     'Salesforce IoT',
//     'R Programming',
//     'Agile Scrum Master',
//     'Data Analytics with R',
//     'Advanced PPC',
//     'Social Media Marketing',
//     'AWS DevOps Engineer',
//     'Web Analytics'
//   ];

//   const masterCourses = [
//     'Cybersecurity',
//     'Business Analyst',
//     'Full Stack Developer',
//     'DevOps Engineer',
//     'Cloud Architect',
//     'Automation Testing',
//     'Azure Cloud Engineer',
//     'Data Analyst',
//     'AWS Cloud Architect',
//     'Big Data Architect'
//   ];

//   const company = [
//     'Corporate Training',
//     'Become an Instructor',
//     'Become a Partner',
//     'SoftivaIT Careers',
//     'Online Training',
//     'Project Training',
//     'Weekend Training',
//     'Class Room Training',
//     'Hire from SoftivaIT',
//     'City Sitemap'
//   ];

//   const categories = [
//     'ORACLE',
//     'SAS',
//     'BIG DATA',
//     'LANGUAGES',
//     'IBM',
//     'PEOPLESOFT',
//     'NETWORK',
//     'CLOUD COMPUTING',
//     'TESTING',
//     'SIEBEL',
//     'OTHER TRAININGS',
//     'MOBILE APPLICATIONS',
//     'MICROSOFT',
//     'WEB TECHNOLOGY',
//     'WORKDAY',
//     'HYPERION',
//     'FUSION',
//     'DIGITAL MARKETING',
//     'ROBOTIC(RPA)',
//     'MANAGEMENT SKILLS',
//     'AWS',
//     'TIBCO',
//     'SALESFORCE',
//     'PROGRAMMING',
//     'CYBER SECURITY',
//     'ADOBE',
//     'INFORMATICA'
//   ];

//   const year = useMemo(() => new Date().getFullYear(), []);

//   return (
//     <footer className="bg-gray-900 text-gray-300 py-16">
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="grid md:grid-cols-4 gap-12 mb-12">
//           <div>
//             <h3 className="text-white font-bold text-lg mb-6">Trending Courses</h3>
//             <ul className="space-y-3">
//               {trendingCourses.map((course) => (
//                 <li key={course} className="flex items-start gap-2">
//                   <span className="text-red-500">›</span>
//                   <a href="#" className="hover:text-white transition">
//                     {course}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <div>
//             <h3 className="text-white font-bold text-lg mb-6">Trending Master Courses</h3>
//             <ul className="space-y-3">
//               {masterCourses.map((course) => (
//                 <li key={course} className="flex items-start gap-2">
//                   <span className="text-red-500">›</span>
//                   <a href="#" className="hover:text-white transition">
//                     {course}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <div>
//             <h3 className="text-white font-bold text-lg mb-6">Company</h3>
//             <ul className="space-y-3">
//               {company.map((item) => (
//                 <li key={item} className="flex items-start gap-2">
//                   <span className="text-red-500">›</span>
//                   <a href="#" className="hover:text-white transition">
//                     {item}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <div>
//             <h3 className="text-white font-bold text-lg mb-6">Contact</h3>
//             <div className="space-y-4">
//               <div>
//                 <p className="text-white font-semibold flex items-center gap-2 mb-2">📍 Address:</p>
//                 <p className="text-sm leading-relaxed">
//                   No.65, 3rd Floor, Priyanka Apartments, Yerrannaya Palya Road, OPP: Heritage Fresh, Ramamurthi Nagar,
//                   Bangalore, Karnataka - 560016.
//                 </p>
//               </div>
//               <div>
//                 <p className="text-white font-semibold flex items-center gap-2 mb-2">✉️ E-mail</p>
//                 <a href="mailto:info@SoftivaIT.com" className="hover:text-white transition">
//                   info@SoftivaIT.com
//                 </a>
//               </div>
//               <div>
//                 <p className="text-white font-semibold flex items-center gap-2 mb-2">📞 Contact</p>
//                 <a href="tel:+918296960414" className="hover:text-white transition">
//                   +91-8296960414
//                 </a>
//               </div>
//               <div>
//                 <p className="text-white font-semibold mb-3">Follow us:</p>
//                 <div className="flex gap-4">
//                   <a href="#" className="hover:text-red-500 transition">
//                     Facebook
//                   </a>
//                   <a href="#" className="hover:text-red-500 transition">
//                     LinkedIn
//                   </a>
//                   <a href="#" className="hover:text-red-500 transition">
//                     Instagram
//                   </a>
//                   <a href="#" className="hover:text-red-500 transition">
//                     X
//                   </a>
//                   <a href="#" className="hover:text-red-500 transition">
//                     YouTube
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="mb-8 pb-8 border-b border-gray-700">
//           <h3 className="text-white font-bold text-lg mb-4">Categories</h3>
//           <div className="flex flex-wrap gap-2">
//             {categories.map((cat) => (
//               <span
//                 key={cat}
//                 className="px-3 py-1 bg-gray-800 hover:bg-red-500 rounded text-xs font-semibold transition cursor-pointer"
//               >
//                 {cat}
//               </span>
//             ))}
//           </div>
//         </div>

//         <div className="mb-8 pb-8 border-b border-gray-700">
//           <p className="text-sm">
//             SoftivaIT offering training in cities: Bangalore, Hyderabad, Chennai, Delhi, Kolkata, UK, London, Texas,
//             Chicago, San Francisco, Dallas, Washington, New York, Houston, Atlanta, Orlando, Boston, Toronto, Ottawa,
//             Windsor, Leeds.
//           </p>
//         </div>

//         <div className="mb-8 pb-8 border-b border-gray-700">
//           <p className="text-xs text-gray-400">
//             Disclaimer: All the technology or course names, logos, and certification titles we use are their respective
//             owners&apos; property. The names of firms, services, or products featured on the website are provided solely for
//             the purpose of identification. We neither own nor endorse any brand, logo, or name featured on our website.
//             Some graphics on our website are freely available in the public domain.
//           </p>
//         </div>

//         <div className="text-center text-sm border-t border-gray-700 pt-4">
//           <p>
//             Terms &amp; Conditions | Refund Policy | Privacy Policy | {'\u00A9'} {year} Copyright SoftivaIT
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// }

const TungstenInfo: React.FC = () => {
  return (
    <div className="bg-white">
      {/* <Navbar /> */}
      <Hero />
      <Highlights />
      <CourseDetails />
      <Curriculum />
      <LearningOptions />
      
      <Objectives />
      <FAQ />
      <Testimonials />
      
    </div>
  );
};

export default TungstenInfo;
