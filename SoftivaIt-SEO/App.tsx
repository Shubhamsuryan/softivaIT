import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingWhatsAppButton from './components/FloatingWhatsAppButton';
import Seo from './components/Seo';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import IvaLeadGenPage from './pages/IvaLeadGenPage';
import RedactionPage from './pages/RedactionPage';
import ScrubbingPage from './pages/ScrubbingPage';
import PlatformPage from './pages/PlatformPage';
import SolutionsPage from './pages/SolutionsPage';
import BankingPage from './pages/solutions/BankingPage';
import HealthcarePage from './pages/solutions/HealthcarePage';
import LegalPage from './pages/solutions/LegalPage';
import LogisticsPage from './pages/solutions/LogisticsPage';
import ManufacturingPage from './pages/solutions/ManufacturingPage';
import RetailPage from './pages/solutions/RetailPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ScrollToTop from './components/ScrollToTop';
import OurExpertisePage from './pages/OurExpertisePage';
import PlatformAgnosticPage from './pages/PlatformAgnosticPage';
import ServiceModelPage from './pages/ServiceModelPage';
import ClientMetricsPage from './pages/ClientMetricsPage';
import AzureDocumentIntelligencePage from './pages/AzureFormRecognizerPage';
import GoogleDocumentAIPage from './pages/GoogleDocumentAIPage';
import AWSTextractPage from './pages/AWSTextractPage';
import UiPathDocumentUnderstandingPage from './pages/UiPathDocumentUnderstandingPage';
import AbbyyVantagePage from './pages/AbbyyVantagePage';
import ServicesPage from './pages/ServicesPage';
import CustomAIAgentsPage from './pages/CustomAIAgentsPage';
import TraditionalIdpPlatformsPage from './pages/TraditionalIdpPlatformsPage';
import HybridSolutionsPage from './pages/HybridSolutionsPage';
import ResourcesPage from './pages/ResourcesPage';
import RoiCalculatorPage from './pages/RoiCalculatorPage';
import FaqPage from './pages/FaqPage';
import BlogInsightsPage from './pages/BlogInsightsPage';
import TrainingPage from './pages/TrainingPage';
import TungstenInfo from './pages/TungstenInfo';
import Googlecloudinfo from './pages/Googlecloudinfo';
import Tangsten from './pages/TungstenTotalAgilityPage';
import AzureInfo from './pages/AzureInfo';
import OcrPage from './pages/platform/OcrPage';
import NlpPage from './pages/platform/NlpPage';
import DataExtractionPage from './pages/platform/DataExtractionPage';
import CrmIntegrationPage from './pages/platform/CrmIntegrationPage';
import ApisPage from './pages/platform/ApisPage';
import WebhooksPage from './pages/platform/WebhooksPage';
import SecurityCompliancePage from './pages/platform/SecurityCompliancePage';
import ResourceLibraryPage from './pages/resources/ResourceLibraryPage';
import DocumentationPage from './pages/resources/DocumentationPage';
import CaseStudiesPage from './pages/resources/CaseStudiesPage';
import WhitepapersPage from './pages/resources/WhitepapersPage';
import WebinarsPage from './pages/resources/WebinarsPage';
import GuidesPage from './pages/resources/GuidesPage';
import PartnersPage from './pages/company/PartnersPage';
import CareersPage from './pages/CareersPage';
import TrainingOverviewPage from './pages/training/TrainingOverviewPage';
import AWSTrainingPage from './pages/training/AWSTrainingPage';
import CustomTrainingPage from './pages/training/CustomTrainingPage';
import NotFoundPage from './pages/NotFoundPage';



const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans">
      <Seo />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded focus:bg-white focus:px-4 focus:py-2 focus:text-neutral-900 focus:shadow"
      >
        Skip to main content
      </a>
      <Header />
      <ScrollToTop />
      <main id="main-content" className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/iva-leadgen" element={<IvaLeadGenPage />} />
          <Route path="/products/redaction" element={<RedactionPage />} />
          <Route path="/products/scrubbing" element={<ScrubbingPage />} />
          <Route path="/platform" element={<PlatformPage />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/solutions/overview" element={<SolutionsPage />} />
          <Route path="/solutions/banking" element={<BankingPage />} />
          <Route path="/solutions/healthcare" element={<HealthcarePage />} />
          <Route path="/solutions/legal" element={<LegalPage />} />
          <Route path="/solutions/logistics" element={<LogisticsPage />} />
          <Route path="/solutions/manufacturing" element={<ManufacturingPage />} />
          <Route path="/solutions/retail" element={<RetailPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/custom-ai-agents" element={<CustomAIAgentsPage />} />
          <Route path="/services/traditional-idp-platforms" element={<TraditionalIdpPlatformsPage />} />
          <Route path="/services/hybrid-solutions" element={<HybridSolutionsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/resources/roi-calculator" element={<RoiCalculatorPage />} />
          <Route path="/resources/faq" element={<FaqPage />} />
          <Route path="/resources/blog-insights" element={<BlogInsightsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/our-expertise" element={<OurExpertisePage />} />
          <Route path="/platform-agnostic-approach" element={<PlatformAgnosticPage />} />
          <Route path="/service-model" element={<ServiceModelPage />} />
          <Route path="/client-metrics" element={<ClientMetricsPage />} />
          <Route path="/platform-expertise/azure-form-recognizer" element={<AzureDocumentIntelligencePage />} />
          <Route path="/platform-expertise/google-document-ai" element={<GoogleDocumentAIPage />} />
          <Route path="/platform-expertise/aws-textract" element={<AWSTextractPage />} />
          <Route path="/platform-expertise/tungsten-totalagility" element={<Tangsten />} />
          <Route path="/platform-expertise/uipath-document-understanding" element={<UiPathDocumentUnderstandingPage />} />
          <Route path="/platform-expertise/abbyy-vantage" element={<AbbyyVantagePage />} />

          <Route path="/training" element={<TrainingPage />} />
          <Route path="/training/tungsten-totalagility" element={<TungstenInfo />} />
          <Route path="/training/gcp" element={<Googlecloudinfo />} />
     
          <Route path="/training/azure" element={<AzureInfo />} />
          
          {/* Platform Feature Routes */}
          <Route path="/platform/ocr" element={<OcrPage />} />
          <Route path="/platform/nlp" element={<NlpPage />} />
          <Route path="/platform/data-extraction" element={<DataExtractionPage />} />
          <Route path="/platform/integrations/crm" element={<CrmIntegrationPage />} />
          <Route path="/platform/integrations/apis" element={<ApisPage />} />
          <Route path="/platform/integrations/webhooks" element={<WebhooksPage />} />
          <Route path="/platform/security" element={<SecurityCompliancePage />} />
          
          {/* Resources Routes */}
          <Route path="/resources/library" element={<ResourceLibraryPage />} />
          <Route path="/resources/documentation" element={<DocumentationPage />} />
          <Route path="/resources/case-studies" element={<CaseStudiesPage />} />
          <Route path="/resources/whitepapers" element={<WhitepapersPage />} />
          <Route path="/resources/webinars" element={<WebinarsPage />} />
          <Route path="/resources/guides" element={<GuidesPage />} />
          
          {/* Company Routes */}
          <Route path="/company/partners" element={<PartnersPage />} />
          <Route path="/company/careers" element={<CareersPage />} />
          
          {/* Training Routes */}
          <Route path="/training/overview" element={<TrainingOverviewPage />} />
          <Route path="/training/aws" element={<AWSTrainingPage />} />
          <Route path="/training/custom" element={<CustomTrainingPage />} />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
      <FloatingWhatsAppButton />
    </div>
  );
};

export default App;
