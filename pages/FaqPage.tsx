import React from 'react';

const faqs = [
    { q: 'What is an AI Agent?', a: 'An AI Agent is an autonomous software program that can perceive its environment, make decisions, and take actions to achieve specific goals. In our context, they are designed to handle complex document processing and workflow automation tasks from end to end without human intervention.' },
    { q: 'How is this different from traditional OCR?', a: 'Traditional OCR (Optical Character Recognition) simply converts images of text into machine-readable text. Our AI agents go much further. They not only read the text but also understand its context, extract specific data points, validate information, make decisions based on business rules, and integrate the data into other systems.' },
    { q: 'What kind of documents can you process?', a: 'Our agents can be trained to handle virtually any type of document, structured or unstructured. This includes invoices, purchase orders, receipts, contracts, legal documents, patient forms, bills of lading, and custom industry-specific forms.' },
    { q: 'How long does an implementation take?', a: 'Implementation times vary depending on complexity, but a typical project follows our structured model: Discovery & Design, Build & Train, Integrate & Validate, and Go-Live. A mini-Proof of Concept can be ready in days, while a full enterprise-scale deployment may take a few weeks to a few months.' },
    { q: 'Is my data secure?', a: 'Absolutely. We adhere to the highest standards of data security and compliance. We offer flexible deployment options, including on-premise and private cloud, to ensure your data is handled according to your specific security policies and regulatory requirements.' },
];

const FaqPage: React.FC = () => {
  return (
    <div className="bg-neutral-100 min-h-screen">
        <div className="bg-accent">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
                <h1 className="text-4xl md:text-5xl font-extrabold text-neutral-900">Frequently Asked Questions</h1>
                <p className="mt-6 max-w-3xl mx-auto text-xl text-neutral-600">
                    Find answers to common questions about SoftivaIT, our services, and intelligent document processing.
                </p>
            </div>
        </div>
        <div className="bg-white py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto space-y-6">
                    {faqs.map((faq, index) => (
                         <details key={index} className="group border-b border-neutral-200 pb-4">
                            <summary className="flex justify-between items-center font-semibold text-xl text-neutral-800 cursor-pointer list-none">
                                <span>{faq.q}</span>
                                 <span className="transition-transform duration-300 group-open:rotate-180">
                                    <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                                </span>
                            </summary>
                            <p className="text-neutral-600 mt-3 text-lg leading-relaxed">{faq.a}</p>
                        </details>
                    ))}
                </div>
            </div>
        </div>
    </div>
  );
};

export default FaqPage;