import React from 'react';

const AbbyyVantagePage: React.FC = () => {
  return (
    <div className="bg-accent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <h1 className="text-4xl md:text-5xl font-extrabold text-neutral-900 text-center">Abbyy Vantage</h1>
            <p className="mt-6 max-w-3xl mx-auto text-xl text-neutral-600 text-justify">
                A next generation platform that uses AI rather than templates to extract and classify data. It understands virtually any document, is designed for business users, and provides pre‑trained skills and cognitive services for classification, extraction and validation.
            </p>
        </div>
        <div className="bg-white py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-lg text-neutral-700 space-y-6 text-justify">
                    <p className="leading-relaxed">
                        SoftivaIT’s new age IDP agents sit above these platforms. We choose the right tool for each document processing, invoke multiple OCR engines or other tools, fill gaps with custom models and unify the output into a single processing pipeline. With built in validation, confidence scoring and continuous learning, our agents deliver automation tailored to your business.
                    </p>
                </div>
            </div>
        </div>
    </div>
  );
};

export default AbbyyVantagePage;