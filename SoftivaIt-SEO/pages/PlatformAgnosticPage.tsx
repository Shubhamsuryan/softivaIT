import React from 'react';

const PlatformAgnosticPage: React.FC = () => {
  return (
    <div className="bg-accent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-neutral-900">Platform-Agnostic Approach</h1>
            <p className="mt-6 max-w-3xl mx-auto text-xl text-neutral-600">
                Learn how our solutions integrate seamlessly with your existing technology stack, regardless of the platform.
            </p>
        </div>
        <div className="bg-white py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-lg text-neutral-700 space-y-6 text-justify">
                    <p className="leading-relaxed">
                        We take a platform-agnostic approach because every business has different tools, document types, volumes, and compliance needs. We work across <span className="font-semibold text-primary">ABBYY</span>, <span className="font-semibold text-primary">UiPath</span>, <span className="font-semibold text-primary">Tungsten</span>, <span className="font-semibold text-primary">Instabase</span>, <span className="font-semibold text-primary">Base64.ai</span>, <span className="font-semibold text-primary">Google Document AI</span>, <span className="font-semibold text-primary">Azure Document Intelligence</span>, <span className="font-semibold text-primary">Amazon Textract</span> and other leading solutions, combining their strengths with custom AI agents where needed. This ensures flexibility today and keeps your solution future-ready as technologies evolve.
                    </p>
                </div>
            </div>
        </div>
    </div>
  );
};

export default PlatformAgnosticPage;