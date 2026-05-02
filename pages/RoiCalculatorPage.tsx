import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Link } from 'react-router-dom';

// FIX: Define a type for a product to ensure type safety for product data.
type Product = {
  name: string;
  description: string;
  category: string;
  unit: string;
  priceDivisor: number;
  tiers?: { upTo: number; price: number }[];
  price?: number;
};

// FIX: Define a type for a platform to ensure type safety for platform data.
type Platform = {
  name: string;
  products: Record<string, Product>;
};

// Combined pricing data for all providers
const ALL_PRICING_DATA: Record<string, Platform> = {
  google: {
    name: 'Google Document AI',
    products: {
      gcp_doc_ocr: {
        name: 'Enterprise Document OCR',
        description: 'Digitizes text from documents with high accuracy.',
        category: 'Digitize Text',
        unit: 'per 1,000 pages',
        tiers: [
          { upTo: 5000000, price: 1.50 },
          { upTo: Infinity, price: 0.60 },
        ],
        priceDivisor: 1000,
      },
      gcp_custom_extractor: {
        name: 'Custom Extractor',
        description: 'Trains a model to extract specific fields from your unique documents.',
        category: 'Extract Structures/Entities',
        unit: 'per 1,000 pages',
        tiers: [
          { upTo: 1000000, price: 30.00 },
          { upTo: Infinity, price: 20.00 },
        ],
        priceDivisor: 1000,
      },
      gcp_form_parser: {
        name: 'Form Parser',
        description: 'Extracts key-value pairs and tables from forms.',
        category: 'Extract Structures/Entities',
        unit: 'per 1,000 pages',
        tiers: [
          { upTo: 1000000, price: 30.00 },
          { upTo: Infinity, price: 20.00 },
        ],
        priceDivisor: 1000,
      },
      gcp_layout_parser: {
        name: 'Layout Parser',
        description: 'Extracts text, tables, and document structure without field-specific extraction.',
        category: 'Extract Structures/Entities',
        unit: 'per 1,000 pages',
        price: 10.00,
        priceDivisor: 1000,
      },
      gcp_custom_splitter: {
        name: 'Custom Document Splitter & Classifier',
        description: 'Automatically classifies and splits documents based on your defined categories.',
        category: 'Classify / Split Documents',
        unit: 'per 1,000 pages',
        tiers: [
          { upTo: 1000000, price: 5.00 },
          { upTo: Infinity, price: 3.00 },
        ],
        priceDivisor: 1000,
      },
      gcp_pretrained_parsers: {
        name: 'Pretrained Parsers (e.g., Invoice, Expense, Utility)',
        description: 'Ready-to-use models for extracting data from common document types.',
        category: 'Pretrained Processors',
        unit: 'per 10 pages',
        price: 0.10,
        priceDivisor: 10,
      },
      gcp_pretrained_classified: {
        name: 'Pretrained Parsers (Pay Slip, W-2)',
        description: 'Specialized models for extracting data from payroll and tax documents.',
        category: 'Pretrained Processors',
        unit: 'per document',
        price: 0.30,
        priceDivisor: 1,
      },
    }
  },
  azure: {
    name: 'Azure Document Intelligence',
    products: {
      azure_read_ocr: {
        name: 'Read OCR',
        description: 'Extracts printed and handwritten text from images and documents.',
        category: 'Digitize Text',
        unit: 'per 1,000 pages',
        tiers: [
          { upTo: 1000000, price: 1.50 },
          { upTo: Infinity, price: 0.60 },
        ],
        priceDivisor: 1000,
      },
      azure_prebuilt_models: {
        name: 'All Prebuilt Models',
        description: 'Includes Document, Layout, Receipt, Invoice, ID, W-2, 1098 Tax forms, Health insurance card, Contract.',
        category: 'Pretrained Processors',
        unit: 'per 1,000 pages',
        price: 10.00,
        priceDivisor: 1000,
      },
      azure_custom_classification: {
        name: 'Custom Classification',
        description: 'Trains a model to classify and split documents based on your defined categories.',
        category: 'Classify / Split Documents',
        unit: 'per 1,000 pages',
        price: 3.00,
        priceDivisor: 1000,
      },
      azure_custom_extraction: {
        name: 'Custom Extraction',
        description: 'Trains a model to extract specific fields from your unique documents.',
        category: 'Extract Structures/Entities',
        unit: 'per 1,000 pages',
        price: 30.00,
        priceDivisor: 1000,
      },
      azure_custom_generative_extraction: {
        name: 'Custom Generative Extraction',
        description: 'Uses generative AI to extract fields from documents without extensive training.',
        category: 'Extract Structures/Entities',
        unit: 'per 1,000 pages',
        price: 30.00,
        priceDivisor: 1000,
      }
    },
  },
  aws: {
    name: 'Amazon Web Services Textract',
    products: {
      aws_detect_text: {
        name: 'Detect Document Text (OCR)',
        description: 'Detects and extracts text from a wide range of documents using OCR.',
        category: 'Digitize Text',
        unit: 'per 1,000 pages',
        tiers: [
          { upTo: 1000000, price: 1.50 },
          { upTo: Infinity, price: 0.60 },
        ],
        priceDivisor: 1000,
      },
      aws_analyze_forms: {
        name: 'Analyze Document - Forms',
        description: 'Extracts key-value pairs from form-based documents.',
        category: 'Extract Structures/Entities',
        unit: 'per 1,000 pages',
        tiers: [
          { upTo: 1000000, price: 50.00 },
          { upTo: Infinity, price: 40.00 },
        ],
        priceDivisor: 1000,
      },
      aws_analyze_tables: {
        name: 'Analyze Document - Tables',
        description: 'Extracts data organized in tables and rows from documents.',
        category: 'Extract Structures/Entities',
        unit: 'per 1,000 pages',
        tiers: [
          { upTo: 1000000, price: 15.00 },
          { upTo: Infinity, price: 10.00 },
        ],
        priceDivisor: 1000,
      },
      aws_analyze_queries: {
        name: 'Analyze Document - Queries',
        description: 'Specify the information you need and receive the data as part of the response.',
        category: 'Extract Structures/Entities',
        unit: 'per 1,000 pages',
        tiers: [
          { upTo: 1000000, price: 15.00 },
          { upTo: Infinity, price: 10.00 },
        ],
        priceDivisor: 1000,
      },
       aws_analyze_layout: {
        name: 'Analyze Document - Layout',
        description: 'Extracts layout elements like paragraphs, titles, and lists. Note: This feature is free when used with Forms, Tables, or Queries.',
        category: 'Extract Structures/Entities',
        unit: 'per 1,000 pages',
        tiers: [
          { upTo: 1000000, price: 4.00 },
          { upTo: Infinity, price: 3.00 },
        ],
        priceDivisor: 1000,
      },
      aws_analyze_signatures: {
        name: 'Analyze Document - Signatures',
        description: 'Detects handwritten signatures, electronic signatures, and initials on any document.',
        category: 'Extract Structures/Entities',
        unit: 'per 1,000 pages',
        tiers: [
          { upTo: 1000000, price: 3.50 },
          { upTo: Infinity, price: 1.40 },
        ],
        priceDivisor: 1000,
      },
      aws_analyze_expense: {
        name: 'Analyze Expense',
        description: 'A pre-trained model for processing invoices and receipts.',
        category: 'Prebuilt Models',
        unit: 'per 1,000 pages',
        tiers: [
            { upTo: 1000000, price: 10.00 },
            { upTo: Infinity, price: 8.00 },
        ],
        priceDivisor: 1000,
      },
      aws_analyze_id: {
        name: 'Analyze ID',
        description: 'A pre-trained model for processing identity documents like passports and driver\'s licenses.',
        category: 'Prebuilt Models',
        unit: 'per 1,000 pages',
        tiers: [
            { upTo: 100000, price: 25.00 },
            { upTo: Infinity, price: 10.00 },
        ],
        priceDivisor: 1000,
      },
      aws_analyze_lending: {
        name: 'Analyze Lending',
        description: 'A specialized API for classifying and extracting information from mortgage application documents.',
        category: 'Prebuilt Models',
        unit: 'per 1,000 pages',
        tiers: [
            { upTo: 1000000, price: 70.00 },
            { upTo: Infinity, price: 55.00 },
        ],
        priceDivisor: 1000,
      },
    },
  },
};

// FIX: Add a type for LLM pricing data for type safety and to allow correct type inference.
type LlmPriceInfo = { name: string; inputPrice: number; outputPrice: number };

const LLM_PRICING_DATA: Record<string, LlmPriceInfo> = {
    gpt4o: { name: 'OpenAI - GPT-4o', inputPrice: 0.0025, outputPrice: 0.01 }, // per 1k tokens
    gpt35turbo: { name: 'OpenAI - GPT-3.5-Turbo', inputPrice: 0.0005, outputPrice: 0.0015 }, // per 1k tokens
    gemini25pro: { name: 'Google - Gemini 2.5 Pro', inputPrice: 0.00125, outputPrice: 0.01 }, // per 1k tokens
    gemini25flash: { name: 'Google - Gemini 2.5 Flash', inputPrice: 0.0003, outputPrice: 0.0025 }, // per 1k tokens
    gemini20flash: { name: 'Google - Gemini 2.0 Flash', inputPrice: 0.0001, outputPrice: 0.0004 }, // per 1k tokens
    gemini15flash: { name: 'Google - Gemini 1.5 Flash', inputPrice: 0.000075, outputPrice: 0.0003 }, // per 1k tokens
};

const calculateOcrCost = (product: Product, pages: number): number => {
  const pageCountNum = Number(pages) || 0;
  if (pageCountNum <= 0) return 0;

  // Graduated pricing for tiered products
  if (product.tiers && product.tiers.length > 0) {
    let totalCost = 0;
    let pagesRemaining = pageCountNum;
    let lowerBound = 0;

    const sortedTiers = [...product.tiers].sort((a, b) => a.upTo - b.upTo);

    for (const tier of sortedTiers) {
      if (pagesRemaining <= 0) break;

      const tierLimit = tier.upTo;
      // The number of pages that fall into this tier's range
      const pagesInTier = Math.min(pagesRemaining, tierLimit - lowerBound);

      if (pagesInTier > 0) {
        totalCost += (pagesInTier / product.priceDivisor) * tier.price;
        pagesRemaining -= pagesInTier;
        lowerBound = tierLimit;
      }
    }
    return totalCost;
  }
  
  // Simple pricing for non-tiered products
  if (typeof product.price === 'number') {
    return (pageCountNum / product.priceDivisor) * product.price;
  }

  return 0;
};


const RoiCalculatorPage: React.FC = () => {
  const [pageCount, setPageCount] = useState<number | string>(10000);
  const [selectedPlatform, setSelectedPlatform] = useState<string>(Object.keys(ALL_PRICING_DATA)[0]);
  const [selectedProduct, setSelectedProduct] = useState<string>(Object.keys(ALL_PRICING_DATA.google.products)[0]);

  const [useIDP, setUseIDP] = useState<boolean>(true);
  const [useLLM, setUseLLM] = useState<boolean>(false);
  const [inputTokens, setInputTokens] = useState<number | string>(700);
  const [outputTokens, setOutputTokens] = useState<number | string>(300);
  const [selectedLLM, setSelectedLLM] = useState<string>('gpt4o');
  const [costs, setCosts] = useState({ ocr: 0, llm: 0, hosting: 0, total: 0 });
  
  const [currency, setCurrency] = useState<'USD' | 'INR'>('USD');
  const [exchangeRate, setExchangeRate] = useState<number | null>(null);
  const [validationWarning, setValidationWarning] = useState<string>('');


  useEffect(() => {
    const fetchExchangeRate = async () => {
      try {
        // Using a free, no-key API for exchange rates (Frankfurter.app)
        const response = await fetch('https://api.frankfurter.app/latest?from=USD&to=INR');
        if (!response.ok) throw new Error('Failed to fetch exchange rate');
        const data = await response.json();
        setExchangeRate(data.rates.INR);
      } catch (error) {
        console.error("Could not fetch exchange rate:", error);
        setExchangeRate(83.50); // Fallback rate
      }
    };
    fetchExchangeRate();
  }, []);

  const formatCurrency = useCallback((value: number) => {
    const convertedValue = currency === 'INR' && exchangeRate ? value * exchangeRate : value;
    return convertedValue.toLocaleString(currency === 'INR' ? 'en-IN' : 'en-US', {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }, [currency, exchangeRate]);

  const currentPlatformData = useMemo(() => ALL_PRICING_DATA[selectedPlatform as keyof typeof ALL_PRICING_DATA], [selectedPlatform]);
  
  const currentProductData: Product = useMemo(
    () => (currentPlatformData.products as Record<string, Product>)[selectedProduct],
    [currentPlatformData, selectedProduct]
  );

  const handlePlatformChange = (platformKey: string) => {
    setSelectedPlatform(platformKey);
    const newPlatform = ALL_PRICING_DATA[platformKey as keyof typeof ALL_PRICING_DATA];
    const firstProductKey = Object.keys(newPlatform.products)[0];
    setSelectedProduct(firstProductKey);
  };
  
  const handleNumericInputChange = (value: string, setter: React.Dispatch<React.SetStateAction<string | number>>, isTokenField = false) => {
    if (value === '') {
        setter('');
        if (isTokenField) setValidationWarning('');
        return;
    }
    const numValue = parseInt(value, 10);
    if (!isNaN(numValue) && numValue > 0) {
        setter(numValue);
        if (isTokenField) {
            if (numValue > 5000) {
                setValidationWarning('This is a high token count. Please verify if this is intentional.');
            } else {
                setValidationWarning('');
            }
        }
    }
  };

  const calculateCosts = useCallback(() => {
    const pageCountNum = Number(pageCount) || 1;
    
    let ocrCost = 0;
    let hostingCost = 0;
    if (useIDP && currentProductData) {
      ocrCost = calculateOcrCost(currentProductData, pageCountNum);
      if (selectedPlatform === 'google' && (selectedProduct === 'gcp_custom_extractor' || selectedProduct === 'gcp_custom_splitter')) {
          hostingCost = 36.50;
      }
    }
    
    let llmCost = 0;
    if (useLLM) {
      const llmData = LLM_PRICING_DATA[selectedLLM as keyof typeof LLM_PRICING_DATA];
      const inputTokensNum = Number(inputTokens) || 0;
      const outputTokensNum = Number(outputTokens) || 0;
      const costPerDoc = (inputTokensNum / 1000 * llmData.inputPrice) + (outputTokensNum / 1000 * llmData.outputPrice);
      llmCost = costPerDoc * pageCountNum;
    }

    setCosts({
      ocr: ocrCost,
      llm: llmCost,
      hosting: hostingCost,
      total: ocrCost + llmCost + hostingCost,
    });
  }, [pageCount, currentProductData, useIDP, useLLM, inputTokens, outputTokens, selectedLLM, selectedPlatform, selectedProduct]);

  useEffect(() => {
    calculateCosts();
  }, [calculateCosts]);

  return (
    <div className="bg-neutral-100">
      <div className="bg-accent pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-8 text-center">
          <h1 className="text-2xl md:text-3xl font-extrabold text-neutral-900">IDP Cost Calculator</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-neutral-600">
            Estimate your costs for processing documents with major cloud providers. Adjust the inputs to see how different platforms and services impact your budget.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          
          <div className="lg:col-span-3 bg-accent p-6 rounded-2xl shadow-lg">
            <div className="space-y-5">
              <div className="grid grid-cols-3 items-center gap-4">
                <label htmlFor="pageCount" className="col-span-1 text-base font-bold text-neutral-800">Number of Pages / Documents</label>
                <input
                  type="number"
                  id="pageCount"
                  min="1"
                  value={pageCount}
                  onChange={(e) => handleNumericInputChange(e.target.value, setPageCount)}
                  onBlur={(e) => { if (e.target.value === '') setPageCount(1); }}
                  placeholder="e.g., 10000"
                  className="col-span-2 block w-full px-3 py-2 bg-white border border-neutral-300 rounded-md shadow-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                />
              </div>

               <div className="border-t border-primary/30 pt-5">
                <div className="relative flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="useIDP"
                      type="checkbox"
                      checked={useIDP}
                      onChange={(e) => setUseIDP(e.target.checked)}
                      className="focus:ring-primary h-4 w-4 text-primary border-neutral-300 rounded"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="useIDP" className="font-bold text-base text-neutral-900">IDP Processing Cost</label>
                     <p className="text-xs text-neutral-600 italic mt-1">Calculate costs for document extraction and classification.</p>
                  </div>
                </div>
              </div>
              
              <div className={`transition-all duration-500 ease-in-out overflow-hidden ${useIDP ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="space-y-5 pt-5">
                  <div className="grid grid-cols-3 items-center gap-4">
                    <label htmlFor="platform" className="col-span-1 text-base font-bold text-neutral-800">Platform</label>
                    <select
                      id="platform"
                      value={selectedPlatform}
                      onChange={(e) => handlePlatformChange(e.target.value)}
                      disabled={!useIDP}
                      className="col-span-2 block w-full pl-3 pr-10 py-2 bg-white border border-neutral-300 rounded-md text-base text-neutral-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary sm:text-sm disabled:cursor-not-allowed disabled:bg-neutral-100"
                    >
                      {/* FIX: Use Object.keys to map over the pricing data to avoid type inference issues with Object.entries where the value can be inferred as 'unknown'. This ensures that 'platform' is correctly typed. */}
                      {Object.keys(ALL_PRICING_DATA).map((key) => (
                        <option key={key} value={key}>{ALL_PRICING_DATA[key].name}</option>
                      ))}
                    </select>
                  </div>

                  <div className="grid grid-cols-3 items-start gap-4">
                    <label htmlFor="product" className="col-span-1 text-base font-bold text-neutral-800">Product</label>
                    <div className="col-span-2">
                      <select
                        id="product"
                        value={selectedProduct}
                        onChange={(e) => setSelectedProduct(e.target.value)}
                        disabled={!useIDP}
                        className="block w-full pl-3 pr-10 py-2 bg-white border border-neutral-300 rounded-md text-base text-neutral-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary sm:text-sm disabled:cursor-not-allowed disabled:bg-neutral-100"
                      >
                        {/* FIX: Use Object.keys to map over products to prevent type inference issues with Object.entries. This ensures correct typing for each product. */}
                        {currentPlatformData?.products && Object.keys(currentPlatformData.products).map((key) => (
                          <option key={key} value={key}>{currentPlatformData.products[key].name}</option>
                        ))}
                      </select>
                      {currentProductData?.description && (
                          <p className="text-xs text-neutral-600 italic mt-2">{currentProductData.description}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>


              <div className="border-t border-primary/30 pt-5">
                <div className="relative flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="useLLM"
                      type="checkbox"
                      checked={useLLM}
                      onChange={(e) => setUseLLM(e.target.checked)}
                      className="focus:ring-primary h-4 w-4 text-primary border-neutral-300 rounded"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="useLLM" className="font-bold text-base text-neutral-900">LLM Processing Cost</label>
                    <p className="text-xs text-neutral-600 italic mt-1">For summarization, Q&A, etc. We assume one page is ~700 input & 300 output tokens.</p>
                  </div>
                </div>
              </div>

              <div className={`transition-all duration-500 ease-in-out overflow-hidden ${useLLM ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="space-y-5 pt-5 pl-5 border-l-2 border-primary/30">
                  <div>
                    <div className="grid grid-cols-3 items-center gap-4">
                      <label htmlFor="inputTokens" className="col-span-1 text-base font-bold text-neutral-800">Estimated Input Tokens per Document</label>
                      <input
                        type="number"
                        id="inputTokens"
                        min="1"
                        value={inputTokens}
                        onChange={(e) => handleNumericInputChange(e.target.value, setInputTokens, true)}
                        onBlur={(e) => { if (e.target.value === '') setInputTokens(1); }}
                        className="col-span-2 block w-full px-3 py-2 bg-white border border-neutral-300 rounded-md shadow-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                      />
                    </div>
                    {validationWarning && <p className="text-xs text-primary mt-2 text-right">{validationWarning}</p>}
                  </div>
                  <div className="grid grid-cols-3 items-center gap-4">
                    <label htmlFor="outputTokens" className="col-span-1 text-base font-bold text-neutral-800">Estimated Output Tokens per Document</label>
                    <input
                      type="number"
                      id="outputTokens"
                      min="1"
                      value={outputTokens}
                      onChange={(e) => handleNumericInputChange(e.target.value, setOutputTokens)}
                      onBlur={(e) => { if (e.target.value === '') setOutputTokens(1); }}
                      className="col-span-2 block w-full px-3 py-2 bg-white border border-neutral-300 rounded-md shadow-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                    />
                  </div>
                   <div className="grid grid-cols-3 items-center gap-4">
                    <label htmlFor="llmModel" className="col-span-1 text-base font-bold text-neutral-800">LLM Model</label>
                    <select
                      id="llmModel"
                      value={selectedLLM}
                      onChange={(e) => setSelectedLLM(e.target.value)}
                      className="col-span-2 block w-full pl-3 pr-10 py-2 bg-white border border-neutral-300 rounded-md text-base text-neutral-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary sm:text-sm"
                    >
                      {/* FIX: Use Object.keys to iterate over LLM pricing data. This approach, combined with the explicit typing of LLM_PRICING_DATA, ensures type safety. */}
                      {Object.keys(LLM_PRICING_DATA).map((key) => (
                        <option key={key} value={key}>{LLM_PRICING_DATA[key].name}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="sticky top-28">
              <div className="bg-primary text-white p-6 rounded-2xl shadow-lg">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-base font-medium text-primary/40">Total Estimated Cost</h3>
                    <p className="text-4xl font-extrabold mt-1">{formatCurrency(costs.total)}</p>
                  </div>
                   <div className="flex space-x-2 bg-primary/50 p-1 rounded-full">
                      <button onClick={() => setCurrency('USD')} className={`px-3 py-1 text-sm font-semibold rounded-full transition-colors ${currency === 'USD' ? 'bg-white text-primary' : 'text-white'}`}>USD</button>
                      <button onClick={() => setCurrency('INR')} className={`px-3 py-1 text-sm font-semibold rounded-full transition-colors ${currency === 'INR' ? 'bg-white text-primary' : 'text-white'}`}>INR</button>
                    </div>
                </div>

                <div className="mt-5 pt-5 border-t border-primary/50 space-y-1 text-primary/20">
                  <div className="flex justify-between">
                    <span>IDP Processing Cost:</span>
                    <span className="font-semibold">{formatCurrency(costs.ocr)}</span>
                  </div>
                   {costs.hosting > 0 && (
                    <div className="flex justify-between">
                        <span>Hosting Cost:</span>
                        <span className="font-semibold">{formatCurrency(costs.hosting)}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span>LLM Cost:</span>
                    <span className="font-semibold">{formatCurrency(costs.llm)}</span>
                  </div>
                </div>
                 <p className="mt-4 text-xs text-primary/45">
                    Prices are based on public pay-as-you-go rates and are for estimation only.
                    {currency === 'INR' && exchangeRate && ` (1 USD ≈ ₹${exchangeRate.toFixed(2)})`}
                  </p>
              </div>

              {(useIDP && selectedPlatform === 'google' && (selectedProduct === 'gcp_custom_splitter' || selectedProduct === 'gcp_custom_extractor')) && (
                <div className="mt-6 bg-blue-50 p-4 rounded-2xl border border-blue-200">
                    <p className="text-sm text-neutral-700">
                        Total includes an estimated monthly hosting fee of ~{formatCurrency(36.50)} for the deployed custom processor.
                    </p>
                </div>
              )}

              {(useIDP && selectedPlatform === 'google' && selectedProduct === 'gcp_pretrained_parsers') && (
                <div className="mt-6 bg-yellow-50 p-5 rounded-2xl border border-yellow-200">
                    <h3 className="font-semibold text-neutral-800">Note on Pretrained Parsers</h3>
                    <div className="mt-3 text-sm text-neutral-600 space-y-2">
                        <p>
                            This estimate is based on $0.10 for every 10 pages for common parsers (e.g., Invoice, Expense). For example, a document with 1-10 pages costs $0.10, and one with 11-20 pages costs $0.20.
                        </p>
                        <p>
                            Other parsers have different pricing models and are not included in this estimate.
                        </p>
                    </div>
                </div>
              )}

               <div className="mt-6 bg-white p-5 rounded-2xl text-center border border-neutral-200">
                    <h3 className="font-semibold text-neutral-800">Ready for a precise quote?</h3>
                    <p className="mt-2 text-sm text-neutral-600">
                        Our experts can provide a detailed assessment based on your specific documents and workflows.
                    </p>
                    <Link to="/contact" className="mt-4 inline-block px-6 py-2.5 bg-primary text-white rounded-md font-semibold hover:bg-primary transition duration-300">
                        Contact Sales
                    </Link>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoiCalculatorPage;