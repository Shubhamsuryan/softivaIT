import React, { ChangeEvent, FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';

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
          <h1 className="text-5xl text-white-100 font-bold mb-6">Azure Document Intelligence – For Advanced Professional</h1>

          <p className="text-gray-300 mb-6">
            Build skills covering OCR, Layout, Prebuilt Models, Custom Models, and Content Understanding.
          </p>

          <div className="flex gap-4">
            <Link to="/contact" className="bg-blue-600 px-6 py-3 rounded-lg inline-flex items-center justify-center">
              Enroll Now
            </Link>
          </div>
        </div>

        <div style={{ position: 'relative' }}>
          <img src="/hero.jpg" alt="azure document intelligence" className="rounded-lg" />
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
    { icon: <IconChart />, title: 'Structured JSON Outputs' },

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
        <h2 className="text-3xl font-bold mb-6 text-center text-primary">About Azure Document Intelligence</h2>

        <p className="text-gray-600 text-lg leading-relaxed text-center max-w-4xl mx-auto">
          Azure Document Intelligence (formerly Form Recognizer) extracts text, key-value pairs, selection marks and tables
          from PDFs and images. It provides prebuilt models for invoices, receipts and IDs, plus custom models for
          classification and extraction—outputting structured JSON with confidence scores.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="p-6 shadow rounded-lg">
            <h3 className="font-semibold text-xl mb-3">OCR / Read</h3>
            <p className="text-gray-600">Printed + handwritten extraction with bounding boxes and confidence.</p>
          </div>

          <div className="p-6 shadow rounded-lg">
            <h3 className="font-semibold text-xl mb-3">Models</h3>
            <p className="text-gray-600">Prebuilt models and custom classification + extraction for your schemas.</p>
          </div>

          <div className="p-6 shadow rounded-lg">
            <h3 className="font-semibold text-xl mb-3">Content Understanding</h3>
            <p className="text-gray-600">Combine OCR outputs with reasoning (LLM) to produce intelligent insights.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Curriculum() {
  const modules = [
    {
      title: 'OCR / Read',
      content: [
        'Extract printed & handwritten text',
        'Handle PDFs and images',
        'Output: raw text + bounding boxes',
        'Lab: extract text from mixed documents'
      ]
    },
    {
      title: 'Layout',
      content: [
        'Extract tables, selection marks, structure',
        'Understand bounding boxes & reading order',
        'Output: structured layout',
        'Lab: table extraction + checkbox detection'
      ]
    },
    {
      title: 'General Documents',
      content: [
        'Extract key-value pairs',
        'Handle semi-structured documents',
        'Output: key-value JSON',
        'Lab: form-like document extraction'
      ]
    },
    {
      title: 'Prebuilt Models',
      content: [
        'Use prebuilt models (Invoices, Receipts, ID docs)',
        'Understand schema outputs',
        'Output: structured domain data',
        'Lab: invoice extraction + validation'
      ]
    },
    {
      title: 'Custom Classification Model',
      content: [
        'Train classification model',
        'Label document types',
        'Output: classified documents',
        'Lab: multi-document classification'
      ]
    },
    {
      title: 'Custom Extraction Model',
      content: [
        'Train extraction model',
        'Label fields & tables',
        'Output: structured custom schema',
        'Lab: custom invoice / form extraction'
      ]
    },
    {
      title: 'Content Understanding',
      content: [
        'Multimodal processing (text, image, audio)',
        'AI-based reasoning on documents',
        'Combine OCR + LLM',
        'Output: intelligent insights',
        'Lab: AI-assisted extraction & validation'
      ]
    },
    {
      title: 'Checkbox Reader (Python App)',
      content: [
        'Consume Azure output to detect checkbox states',
        'Map values into JSON such as Yes/No, True/False, or selected option lists',
        'Use Python apps for form digitization, survey processing, and onboarding forms',
        'Output: normalized checkbox data for downstream validation or API posting',
        'Lab: build a Python service that reads Azure JSON for checkbox values'
      ]
    },
    {
      title: 'Signature Reader (Python App)',
      content: [
        'Use OCR/Layout plus custom post-processing in Python to locate signature zones',
        'Combine bounding boxes and image regions to mark Signature as Y/N',
        'Use in Python apps for contract intake, tax forms, consent documents',
        'Output: signature status, page number, and region coordinates',
        'Lab: build a Python app that flags unsigned documents for manual review'
      ]
    },
    {
      title: 'Table Detection (Python App)',
      content: [
        'Consume Layout output to detect tables, rows, columns, and cell text',
        'Convert extracted table structures into DataFrames, CSV files, or application JSON',
        'Use Python apps for invoice line items and statement parsing',
        'Output: structured table data with row and column relationships preserved',
        'Lab: build a Python utility that converts Azure table output into CSV'
      ]
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [showAll, setShowAll] = useState(false);

  const visibleModules = modules;

  const toggleModule = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary">Azure Document Intelligence Curriculum</h2>

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
        'Learn OCR, layout, prebuilt and custom models with guided modules.',
        'Practice with labs producing structured JSON outputs.',
        'Access study materials created by practitioners.'
      ],
      buttonText: 'Get Access'
    },
    {
      image: '/developer2.webp',
      title: 'Led by Industry Experts',
      points: [
        'Hands-on guidance on confidence thresholds, schema mapping, and validation.',
        'Weekday/Weekend batches based on your schedule.',
        'Mentor support to help you complete labs and use cases.'
      ],
      buttonText: 'Enroll Now'
    },
    {
      image: '/developer3.avif',
      title: 'Corporate Solutions',
      points: [
        'Training aligned to your document types and target workflows.',
        'Focus on production patterns and governance.',
        'Team enablement with hands-on deliverables.'
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
                <h3 className="text-2xl  font-semibold mb-4 text-[#1f4e79]">{option.title}</h3>

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

function Objectives() {
  const items = [
    {
      question: 'What is Azure Document Intelligence?',
      answer:
        'Azure Document Intelligence is a service that extracts text, key-value pairs, selection marks, and tables from documents using OCR and machine learning, producing structured JSON with confidence.'
    },
    {
      question: 'What you will learn in this advanced training?',
      answer:
        'OCR/Read outputs, layout and table extraction, key-value parsing, prebuilt model schemas, custom classification and custom extraction models, and content understanding with OCR + LLM patterns.'
    },
    {
      question: 'Who should take this course?',
      answer:
        'IDP developers, automation engineers, and solution teams building document-centric workflows with validation and integrations.'
    },
    {
      question: 'What are the prerequisites?',
      answer:
        'Basic programming knowledge and comfort with JSON/APIs. Familiarity with Azure is helpful but not required to follow the labs.'
    },
    {
      question: 'What outcomes will I have after the course?',
      answer:
        'A practical portfolio of labs: OCR + bounding boxes, layout/table extraction, key-values, prebuilt processors validation, custom models, and Python app use cases for checkbox/signature/table utilities.'
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

  const visibleItems =  items;

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
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-3">
            <h2 className="text-4xl font-bold mb-12 text-primary">Azure Document Intelligence Objectives</h2>

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
        'A laptop/desktop with stable internet, a modern browser, and basic tooling support for labs. If Azure access is required for hands-on exercises, we guide you through setup.'
    },
    {
      question: 'How can I access recorded videos of my training sessions?',
      answer: "Check your training platform's storage or cloud drive for saved session recordings."
    },
    {
      question: 'Do I get any discount on the course?',
      answer: 'Discounts may be available for early-bird, group enrollments, and corporate batches. Contact us for details.'
    },
    {
      question: 'How do I get a course completion certificate?',
      answer:
        'Complete the required labs and deliverables (OCR, layout, models, and Python app use cases) to receive the certificate.'
    },
    {
      question: 'How does your mock interviews process work?',
      answer:
        'Mock interviews cover model selection, schema mapping, confidence tuning, exception handling, and end-to-end pipeline scenarios with feedback.'
    }
  ];

  const tabs = ['General', 'Self-Paced', 'Online', 'Corporate'];
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
              <div className="bg-gradient-to-br from-[#93c5fd] to-blue-900 rounded-lg p-6 mb-4 inline-block text-4xl">
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
      name: 'Rahul Kumar',
      rating: 5,
      review: 'Great deep dive into OCR, layout and custom models. The Python use cases were very practical.'
    },
    {
      name: 'Neha Singh',
      rating: 4,
      review: 'Loved the focus on confidence tuning, schema mapping, and real-world validation patterns.'
    },
    {
      name: 'Daniel Smith',
      rating: 4,
      review: 'The labs on table detection and signature/checkbox extraction were exactly what I needed for my project.'
    },
    {
      name: 'Anita Patel',
      rating: 5,
      review: 'Well-structured day-wise curriculum and helpful mentor support throughout.'
    }
  ];

  const renderStars = (rating: number) => '★'.repeat(rating) + '☆'.repeat(Math.max(0, 5 - rating));

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-4 text-primary">Hear From Our Learners</h2>

        <div className="mb-12">
          <p className="text-gray-800">
            Azure Document Intelligence rated <span className="text-primary text-xl">★★★★☆</span>{' '}
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

const AzureInfo: React.FC = () => {
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

export default AzureInfo;

