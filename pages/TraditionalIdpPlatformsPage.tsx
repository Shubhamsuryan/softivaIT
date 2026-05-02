import React from 'react';

const TraditionalIdpPlatformsPage: React.FC = () => {
  return (
    <div className="bg-accent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <h1 className="text-4xl md:text-5xl font-extrabold text-neutral-900 text-center">Traditional IDP Platforms</h1>
            <p className="mt-6 max-w-3xl mx-auto text-xl text-neutral-600 text-justify">
                We configure and deploy leading systems. <span className="font-semibold text-primary">Azure Form Recognizer</span>, <span className="font-semibold text-primary">Google Document AI</span>, <span className="font-semibold text-primary">AWS Textract</span>, <span className="font-semibold text-primary">ABBYY Vantage</span>, <span className="font-semibold text-primary">UiPath Document Understanding</span> and <span className="font-semibold text-primary">Tungsten TotalAgility</span>. These platforms use AI to extract text, tables and key‑values from documents, offer pre‑built processors for invoices and identity documents and integrate with downstream processes for at scale automation.
            </p>
        </div>
        <div className="bg-white py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-lg text-neutral-700 space-y-6 text-justify">
                    <p className="leading-relaxed font-semibold text-primary">
                        How our agents elevate this:
                    </p>
                    <p className="leading-relaxed">
                        We fine‑tune these platforms to your data, setting validation rules and stitching together multiple services. Where platforms fall short (e.g. handling handwriting or multi‑page tables), our custom agents fill the gap to deliver accuracy and efficiency.
                    </p>
                </div>
            </div>
        </div>
    </div>
  );
};

export default TraditionalIdpPlatformsPage;