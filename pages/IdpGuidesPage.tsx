import React from 'react';

const guideContent = (
    <div className="space-y-4 text-lg text-neutral-700 leading-relaxed">
        <p>Every organization lives on documents. Contracts, invoices, insurance claims, shipping notes and HR forms are the lifeblood of business, yet most of the information inside them is unstructured. Valuable data lives in many file types like PDFs, Word documents, email and all these are not easily usable. Roughly 80% of enterprise information is trapped in these unstructured documents. That means armies of people are still copying and pasting, introducing errors, slowing processes and driving up costs.</p>
        
        <h3 className="text-xl font-semibold text-neutral-800 pt-2">This problem cuts across industries:</h3>
        <ul className="list-disc pl-6 space-y-2">
            <li><span className="font-semibold">Banks and insurers</span> waste hours reconciling claims, policies and statements.</li>
            <li><span className="font-semibold">Healthcare providers</span> drown in patient forms and clinical notes.</li>
            <li><span className="font-semibold">Manufacturers and logistics firms</span> struggle with bills of lading, customs forms and invoices.</li>
            <li><span className="font-semibold">Educational institutions</span> still manage student records and certificates manually.</li>
        </ul>
        <p>In every case, valuable time and money are lost because the data inside documents cannot flow freely into digital systems.</p>
        
        <h3 className="text-xl font-semibold text-neutral-800 pt-2">Intelligent Document Processing (IDP) tackles this head-on. It combines multiple technologies:</h3>
        <ul className="list-disc pl-6 space-y-2">
            <li><span className="font-semibold">Optical Character Recognition (OCR)</span> - Turns scanned images into machine readable text.</li>
            <li><span className="font-semibold">Natural Language Processing (NLP)</span> - Interprets meaning from sentences and fields.</li>
            <li><span className="font-semibold">Machine Learning & Deep Learning</span> - Train models to recognize patterns and adapt to new document types.</li>
            <li><span className="font-semibold">Validation & Human-in-the-Loop</span> - Ensure tricky cases get reviewed and models keep improving.</li>
        </ul>
        <p>Together these steps classify incoming documents, extract key information like names, dates, amounts or tables, validate them against business rules and then integrate the structured output into downstream systems such as ERP, CRM or workflow tools.</p>
        
        <h3 className="text-xl font-semibold text-neutral-800 pt-2">When done right, IDP delivers tangible results:</h3>
        <ul className="list-disc pl-6 space-y-2">
            <li><span className="font-semibold">Speed</span> - Processes that once took days shrink to minutes.</li>
            <li><span className="font-semibold">Accuracy</span> - AI agents learn and adapt, often surpassing human accuracy on specialized forms.</li>
            <li><span className="font-semibold">Scalability</span> - Handle millions of documents without adding headcount.</li>
            <li><span className="font-semibold">Compliance</span> - Ensure data is captured consistently and audit trails are maintained.</li>
            <li><span className="font-semibold">Employee Satisfaction</span> - Free people from repetitive copy paste work so they can focus on higher value tasks.</li>
        </ul>
        
        <p className="pt-2">The volume of business documents continues to grow, while customer expectations for speed and accuracy rise. Legacy capture tools can’t keep up. Intelligent Document Processing is no longer a “nice to have” but a competitive necessity. It unlocks 80% of enterprise knowledge that has been hidden, making it usable, shareable and actionable.</p>
    </div>
);

const guides = [
    { 
        title: 'What is Intelligent Document Processing (IDP)?', 
        description: 'A foundational overview of IDP, its components, and why it matters for modern businesses.',
        content: guideContent
    },
    { title: 'OCR vs. ICR vs. IDP: Understanding the Key Differences', description: 'Demystifying the acronyms and exploring the evolution of document capture technologies.' },
    { title: 'How to Choose the Right IDP Solution for Your Business', description: 'A practical guide with key criteria to consider when evaluating and selecting an IDP vendor or platform.' },
    { title: 'The Role of AI Agents in Next-Generation IDP', description: 'Learn how agentic AI is transforming document processing from simple data extraction to autonomous workflow execution.' },
];

const IdpGuidesPage: React.FC = () => {
  return (
    <div className="bg-neutral-100 min-h-screen">
        <div className="bg-accent">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
                <h1 className="text-4xl md:text-5xl font-extrabold text-neutral-900">IDP Guides</h1>
                <p className="mt-6 max-w-3xl mx-auto text-xl text-neutral-600">
                    Your comprehensive resource for understanding Intelligent Document Processing. Explore our guides to learn about concepts, technologies, and best practices.
                </p>
            </div>
        </div>
        <div className="bg-white py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto space-y-8">
                    {guides.map((guide, index) => (
                        'content' in guide ? (
                            <details key={index} className="group border border-neutral-200 rounded-lg p-6 transition-all duration-300 open:border-primary open:shadow-lg">
                                <summary className="flex justify-between items-center font-semibold text-xl text-neutral-800 cursor-pointer list-none">
                                    <div className="flex-grow">
                                        <h2 className="text-2xl font-bold text-primary">{guide.title}</h2>
                                        <p className="mt-3 text-lg text-neutral-700 font-normal">{guide.description}</p>
                                    </div>
                                    <span className="transition-transform duration-300 group-open:rotate-180 flex-shrink-0 ml-4">
                                        <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                                    </span>
                                </summary>
                                <div className="mt-6 pt-6 border-t border-neutral-200">
                                    {guide.content}
                                </div>
                            </details>
                        ) : (
                            <div key={index} className="border border-neutral-200 rounded-lg p-6 bg-neutral-50">
                                <h2 className="text-2xl font-bold text-neutral-600">{guide.title}</h2>
                                <p className="mt-3 text-lg text-neutral-700">{guide.description}</p>
                                <p className="mt-4 text-sm font-semibold text-neutral-500">Coming Soon</p>
                            </div>
                        )
                    ))}
                </div>
            </div>
        </div>
    </div>
  );
};

export default IdpGuidesPage;