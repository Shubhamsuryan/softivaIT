import React from 'react';

const CustomAIAgentsPage: React.FC = () => {

  return (
    <div className="bg-accent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <h1 className="text-4xl md:text-5xl font-extrabold text-neutral-900 text-center">Custom AI Agents</h1>
            <p className="mt-6 max-w-3xl mx-auto text-xl text-neutral-600 text-justify">
                We develop agents that understand your unique document formats and workflows. By combining multiple OCR engines, language models and feedback loops, our agents learn continuously and achieve near-human accuracy on complex layouts, handwriting or domain-specific data. Human-in-the-loop review and clear integration APIs ensure traceable, reliable outputs.
            </p>
        </div>
    </div>
  );
};

export default CustomAIAgentsPage;