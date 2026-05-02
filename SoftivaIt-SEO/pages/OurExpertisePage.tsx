import React from 'react';

const OurExpertisePage: React.FC = () => {
  return (
    <div className="bg-accent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-neutral-900">Our Expertise</h1>
            <p className="mt-6 max-w-3xl mx-auto text-xl text-neutral-600">
                Delve into our deep expertise in agentic AI, intelligent document processing, and workflow automation that drives business transformation.
            </p>
        </div>
        <div className="bg-white py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-lg text-neutral-700 space-y-6 text-justify">
                    <p className="leading-relaxed">
                        SoftivaIT helps you turn unstructured documents into structured data. We understand the full document-processing journey - <span className="font-semibold text-primary">Classification</span>, <span className="font-semibold text-primary">Extraction to Validation</span>, <span className="font-semibold text-primary">Enrichment</span>, <span className="font-semibold text-primary">Human in the loop</span> and <span className="font-semibold text-primary">Export</span>.
                    </p>
                    <p className="leading-relaxed">
                        We are fluent in all leading IDP platforms and also build high performing AI agents trained on your specific documents and workflows. These agents can combine multiple OCR engines and language models, learn continuously from new inputs. Together with established platforms, we boost accuracy & STP and deliver solutions tailored to your need.
                    </p>
                </div>
            </div>
        </div>
    </div>
  );
};

export default OurExpertisePage;