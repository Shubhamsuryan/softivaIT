import React, { ChangeEvent, FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';



function Hero() {
  return (
    <section className=" text-white py-24" style={{ position: 'relative', backgroundColor: '#00000081' }}>
      <img
        src="/hero-bg.avif"
        alt=""
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
           filter: 'brightness(50%)'
        }}
      />

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center relative">
        <div>
          <h1 className="text-5xl text-white-100 font-bold mb-6">Google Document AI for Advanced Professional</h1>

          <p className="text-gray-300 mb-6">
            Build skills covering OCR, Layout, Form Parsing, Prebuilt Parsers, Custom Models, and real-world AI use cases.
          </p>

          <div className="flex gap-4">
            <Link to="/contact" className="bg-blue-600 px-6 py-3 rounded-lg inline-flex items-center justify-center">
              Enroll Now
            </Link>
          </div>
        </div>

        <div style={{ position: 'relative' }}>
          <img src="/hero.jpg" alt="document ai" className="rounded-lg" />
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
    { icon: <IconClipboard />, title: 'Hands-on Labs' },

    { icon: <IconPhone />, title: 'Mentor Support' },
    { icon: <IconChart />, title: 'LLM-ready Chunking Outputs' },
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
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6 text-center text-primary">About Google Document AI</h2>

        <p className="text-gray-600 text-lg leading-relaxed text-center max-w-4xl mx-auto">
          Google Document AI is a Google Cloud service for intelligent document processing. It combines OCR, layout
          understanding, key-value extraction, prebuilt processors (invoice, bank statement, ID, etc.), and custom models to
          produce high-quality structured JSON.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="p-6 shadow rounded-lg">
            <h3 className="font-semibold text-xl mb-3">OCR + Confidence</h3>
            <p className="text-gray-600">Understand tokens, bounding boxes, confidence, and multilingual extraction.</p>
          </div>

          <div className="p-6 shadow rounded-lg">
            <h3 className="font-semibold text-xl mb-3">Parsers</h3>
            <p className="text-gray-600">Use layout &amp; form parsing and map outputs into your target schema.</p>
          </div>

          <div className="p-6 shadow rounded-lg">
            <h3 className="font-semibold text-xl mb-3">Custom Models</h3>
            <p className="text-gray-600">Train classifiers and extractors for your own document types and fields.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Curriculum() {
  const modules = [
    {
      title: 'Document OCR',
      content: [
        'Extract text from PDFs/images',
        'Handle multilingual and noisy documents',
        'Understand tokens, bounding boxes, confidence',
        'Output: raw OCR + structured tokens',
        'Lab: OCR extraction from mixed documents'
      ]
    },
    {
      title: 'Layout Parser',
      content: [
        'Extract document structure (blocks, paragraphs, tables)',
        'Understand reading order & hierarchy',
        'Chunk documents for downstream processing (LLM-ready)',
        'Output: structured layout JSON',
        'Lab: table + paragraph extraction'
      ]
    },
    {
      title: 'Form Parser',
      content: [
        'Extract key-value pairs',
        'Detect checkboxes & selection marks',
        'Handle semi-structured forms',
        'Output: key-value JSON',
        'Lab: form extraction with checkbox handling'
      ]
    },
    {
      title: 'Prebuilt Parsers',
      content: [
        'Invoice, Bank Statement, Pay Slip, ID parsers',
        'Understand schema outputs & field mapping',
        'Output: domain-specific structured data',
        'Lab: invoice + bank parser validation'
      ]
    },
    {
      title: 'Custom Classifier',
      content: [
        'Train document classification model',
        'Label document types (multi-class)',
        'Evaluate accuracy & confusion cases',
        'Output: classified documents',
        'Lab: multi-document classification pipeline'
      ]
    },
    {
      title: 'Custom Extractor',
      content: [
        'Train extraction model (fields + tables)',
        'Label datasets',
        'Handle variations across formats',
        'Output: custom structured JSON',
        'Lab: custom invoice / contract extraction'
      ]
    },
    {
      title: 'Intelligent Invoice + Payment Reconciliation',
      content: [
        'Match invoice data with bank transactions',
        'Detect mismatches, duplicates, partial payments',
        'Output reconciliation status & exceptions',
        'Python app: reconciliation pipeline'
      ]
    },
    {
      title: 'Smart Document Split + Classification',
      content: [
        'Split large PDFs into logical documents',
        'Classify each document type',
        'Output structured document sets',
        'Python app: ingestion & indexing pipeline'
      ]
    },
    {
      title: 'Multi-Parser Fraud Detection',
      content: [
        'Cross-check data across documents',
        'Detect inconsistencies (names, dates, amounts)',
        'Output fraud risk score',
        'Python app: fraud detection engine'
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
        <h2 className="text-4xl font-bold text-center mb-12 text-primary">Google Document AI Curriculum</h2>

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
                      <div className="border-l-4 border-primary/30 pl-4 space-y-2">
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
        'Deep modules covering OCR, layout, forms, prebuilt processors, and custom models.',
        'Rewatch labs to strengthen mapping, validation, and confidence tuning.',
        'Study materials prepared by practitioners.'
      ],
      buttonText: 'Get Access'
    },
    {
      image: '/developer2.webp',
      title: 'Led by Industry Experts',
      points: [
        'Hands-on guidance with real datasets and edge cases.',
        'Best practices for JSON schema mapping and production readiness.',
        'Mentor support to unblock you quickly.'
      ],
      buttonText: 'Enroll Now'
    },
    {
      image: '/developer3.avif',
      title: 'Corporate Solutions',
      points: [
        'Team training aligned to your document types and workflows.',
        'Weekday/weekend delivery options.',
        'Focus on scalable pipelines and governance.'
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
                              
                            </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Objectives() {
  const items = [
    {
      question: 'What is Google Document AI?',
      answer:
        'Google Document AI is a Google Cloud service that extracts structured data from documents using OCR, layout understanding, prebuilt processors, and custom ML models.'
    },
    {
      question: 'What you will learn in Google Document AI Training?',
      answer:
        'OCR tokens and confidence, layout parsing, form parsing (key-values + selection marks), prebuilt processors (invoice/bank/ID), custom classifier and custom extractor training, plus advanced pipelines for reconciliation, splitting, and fraud detection.'
    },
    {
      question: 'Who should take Google Document AI Training?',
      answer:
        'Developers, automation engineers, data/ML engineers, and solution teams building document processing workflows and integrations.'
    },
    {
      question: 'What are the prerequisites for Google Document AI Training?',
      answer:
        'Basic programming knowledge is recommended. Familiarity with JSON and APIs helps, but the labs cover the practical steps and patterns needed.'
    },
    {
      question: 'Why should you go for a Google Document AI Course?',
      answer:
        'You learn production-ready patterns—confidence tuning, schema mapping, chunking for downstream LLM workflows, and handling real-world edge cases.'
    },
    {
      question: 'What career opportunities are available for professionals skilled in Google Document AI?',
      answer:
        'Common roles include Document AI Engineer, IDP Developer, Cloud Automation Engineer, and Solution Architect for enterprise document processing.'
    },
    {
      question: 'What are the key features of Google Document AI?',
      answer:
        'OCR with token geometry, layout and form extraction, domain processors with schemas, custom model training, and API-first integration with structured JSON outputs.'
    },
    {
      question: 'Is Google Document AI a good choice for career growth?',
      answer:
        'Yes—especially when combined with workflow automation and integrations. Companies need engineers who can take extraction to production reliably.'
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

  const visibleItems =items;

  const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value
    }));
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    // eslint-disable-next-line no-console
    console.log(formData);
    alert('Thank you for your enquiry!');
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        
          <div className="md:col-span-2">
            <h2 className="text-4xl font-bold mb-12 text-primary">Google Document AI Objectives</h2>

            <div className="space-y-2">
              {visibleItems.map((item, index) => (
                <div
                  key={`${item.question}-${index}`}
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
                    <span>{item.question}</span>
                    <span
                      className={`text-2xl transition-transform duration-300 ease-in-out ${
                        openIndex === index ? 'rotate-0' : 'rotate-180'
                      }`}
                      aria-hidden="true"
                    >
                      ▲
                    </span>
                  </button>

                  {item.answer && (
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
                          <p>{item.answer}</p>
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

  const faqs = [
    {
      question: 'What are the system requirements I need to attend online training?',
      answer:
        'A laptop/desktop with stable internet, a modern browser, and the ability to run required SDKs/tools. For labs, Google Cloud access is recommended (or we guide you with a shared setup).'
    },
    {
      question: 'How can I access recorded videos of my training sessions?',
      answer: "Check your training platform's storage or cloud drive for saved session recordings."
    },
    {
      question: 'Do I get any discount on the course?',
      answer:
        'Discounts may be available for early-bird, group, and corporate enrollments. Contact us for the current offers.'
    },
    {
      question: 'How do I get a course completion certificate?',
      answer:
        'Complete the required labs and submit outputs (OCR tokens, layout JSON, key-values, processor mappings, and use-case pipelines).'
    },
    {
      question: 'How do you help me with certification?',
      answer:
        'We guide you through processor outputs, field mapping, confidence tuning, and portfolio building so you can demonstrate practical capability.'
    },
    {
      question: 'Can you help me with resume preparation?',
      answer:
        'Yes—resume support includes project-focused bullets (OCR, parsers, custom models, reconciliation, splitting, fraud detection) and interview-ready narratives.'
    },
    {
      question: 'Do you offer placements after the training program?',
      answer:
        'We provide job assistance (portfolio, resume and mock interviews). Placements are not guaranteed and depend on your background and market conditions.'
    },
    {
      question: 'How does your mock interviews process work?',
      answer:
        'Mock interviews cover processor selection, schema mapping, confidence thresholds, error handling, and end-to-end pipeline design. You’ll receive detailed feedback.'
    },
    {
      question: 'What are the terms and conditions of the refund policy?',
      answer:
        'Refund terms vary by batch type and progress. We share the policy during enrollment—contact support for your batch terms.'
    },
    {
      question: 'Can I split the payment into two or more instalments?',
      answer: 'Installment options may be available depending on the batch. Contact us with your preferred plan.'
    },
    {
      question: 'Can I avail EMI option to pay the fee?',
      answer: 'EMI availability depends on payment options and location. Contact us to check supported EMI modes.'
    },
    {
      question: 'Looking for better Discount Price?',
      answer:
        'Share your learning mode (self-paced/led/corporate) and batch preference, and we’ll provide the best available offer.'
    },
    {
      question: 'Is SoftivaIT certification good?',
      answer:
        'A certificate helps, but your lab outputs and portfolio matter most. We focus on hands-on deliverables you can show in interviews.'
    },
    {
      question: 'Work On Live Projects?',
      answer:
        'Yes—labs simulate real-world processing: extraction, validation, schema mapping, and advanced pipelines like reconciliation and fraud detection.'
    },
    {
      question: 'Who are the Trainers?',
      answer:
        'Trainers are practitioners with hands-on experience in IDP and cloud integrations, focused on practical implementation and troubleshooting.'
    }
  ];


  const [activeTab, setActiveTab] = useState(0);
  const [openIndex, setOpenIndex] = useState<number | null>(2);
  const [showAll, setShowAll] = useState(false);

  const visibleFAQs = showAll ? faqs : faqs.slice(0, 5);

  return (
    <section className="py-5 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-primary text-center">Why SoftivaIT?</h2>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="bg-gradient-to-br from-[#93c5fd] to-600 to-blue-900 rounded-lg p-6 mb-4 inline-block text-4xl">
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
      name: 'Akhil Mehta',
      rating: 5,
      review:
        'The labs were very practical—OCR tokens, layout parsing, and mapping made everything click. Advanced use cases were super helpful.'
    },
    {
      name: 'Sneha Reddy',
      rating: 4,
      review: 'Great coverage of prebuilt processors and custom models. Confidence tuning tips were valuable.'
    },
    {
      name: 'Jason Lee',
      rating: 4,
      review: 'Loved the focus on real-world pipelines like reconciliation and fraud detection.'
    },
    {
      name: 'Priya Nair',
      rating: 5,
      review: 'Mentor support was quick and the course is very well structured.'
    }
  ];

  const renderStars = (rating: number) => '★'.repeat(rating) + '☆'.repeat(Math.max(0, 5 - rating));

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-4 text-primary">Hear From Our Learners</h2>

        <div className="mb-12">
          <p className="text-gray-800">
            Google Document AI rated <span className="text-primary text-xl">★★★★☆</span>{' '}
            <span className="font-semibold">(4.6 / 5)</span> based on <span className="font-semibold">8 reviews</span>.
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

const Googlecloudinfo: React.FC = () => {
  return (
    <div className="bg-white">
      
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

export default Googlecloudinfo;
