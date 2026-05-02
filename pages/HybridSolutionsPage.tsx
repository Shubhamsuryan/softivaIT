import React from 'react';

const HybridSolutionsPage: React.FC = () => {
  return (
    <div className="bg-accent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <h1 className="text-4xl md:text-5xl font-extrabold text-neutral-900 text-center">Hybrid Solutions</h1>
            <p className="mt-6 max-w-3xl mx-auto text-xl text-neutral-600 text-justify">
                <strong className="font-semibold text-neutral-800">Best‑in‑class platforms + custom AI.</strong> Sometimes the smartest approach combines a robust platform with specialized AI. We blend cloud services (such as Textract’s pay‑as‑you‑go APIs) and pre‑trained models with bespoke agents that handle the tricky bits. The result is faster deployment, lower cost and a tailored solution that grows with your needs.
            </p>
        </div>
        <div className="bg-white py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-lg text-neutral-700 space-y-6 text-justify">
                    <p className="leading-relaxed">
                        How our agents elevate by acting as an orchestration layer. Choosing the right engine for each document, merging outputs and applying custom logic. They also enable human‑in‑the‑loop review for 100 % confidence, delivering a future‑proof IDP solution tuned to your business.
                    </p>
                </div>
            </div>
        </div>
    </div>
  );
};

export default HybridSolutionsPage;