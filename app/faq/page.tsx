import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FaqHero } from "@/components/faq-hero";
import { FAQSection } from "@/components/faq-section";
import { CTASection } from "@/components/cta-section";

const gettingStartedFAQs = [
  {
    question: "How do I create an account?",
    answer: "Click \"Start Free Trial\" on any page and sign up with your academic email address. You'll get immediate access to all Researcher-tier features for 14 days.",
  },
  {
    question: "Do I need an academic email address?",
    answer: "An academic email (.edu, .ac.uk, etc.) gives you instant verification. If you're an independent researcher, contact us and we'll verify your account manually.",
  },
  {
    question: "What databases does ScholariumAI search?",
    answer: "We index content from PubMed, Semantic Scholar, arXiv, JSTOR, Project MUSE, and dozens of other academic databases. We also connect to your institution's subscriptions for full-text access.",
  },
  {
    question: "Can I import my existing library?",
    answer: "Yes. Import from Zotero, Mendeley, EndNote, or any BibTeX file. Your existing organization and annotations will be preserved.",
  },
];

const featuresFAQs = [
  {
    question: "How accurate are the AI summaries?",
    answer: "Our summaries are designed to capture key findings, methodology, and limitations accurately. However, we always recommend reading full papers for research you're citing. Think of summaries as a screening and synthesis tool, not a replacement for careful reading.",
  },
  {
    question: "Can I use ScholariumAI for papers in languages other than English?",
    answer: "We currently support full functionality for English-language papers. We can search and provide basic metadata for papers in other languages, with expanded language support coming in 2025.",
  },
  {
    question: "How does the knowledge graph work?",
    answer: "We analyze citation patterns, shared references, and conceptual similarity to build a map of how papers relate to each other. You can explore connections by topic, methodology, author networks, or citation relationships.",
  },
  {
    question: "Can I share my collections with non-ScholariumAI users?",
    answer: "Yes. You can generate shareable links to collections that anyone can view (read-only), even without a ScholariumAI account.",
  },
];

const privacyFAQs = [
  {
    question: "Do you train AI models on my research data?",
    answer: "No. Your private collections, annotations, and notes are never used to train our models. Your research stays yours.",
  },
  {
    question: "Where is my data stored?",
    answer: "Data is stored on secure, encrypted servers. Institutional customers can choose regional data residency options.",
  },
  {
    question: "Is ScholariumAI GDPR compliant?",
    answer: "Yes. We are fully GDPR compliant and offer data processing agreements for institutional customers.",
  },
  {
    question: "Can I delete my data?",
    answer: "Yes. You can export and delete all your data at any time from your account settings.",
  },
];

const technicalFAQs = [
  {
    question: "What browsers are supported?",
    answer: "ScholariumAI works in all modern browsers (Chrome, Firefox, Safari, Edge). We recommend Chrome for the best experience.",
  },
  {
    question: "Is there a mobile app?",
    answer: "We offer a mobile-optimized web app. Native iOS and Android apps are in development.",
  },
  {
    question: "Do you have an API?",
    answer: "Yes. Scholar and institutional plans include API access for custom integrations.",
  },
  {
    question: "How do I get help?",
    answer: "Email support is available to all users. Researcher and Scholar plans include priority support with faster response times. Institutional plans include dedicated support contacts.",
  },
];

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        <FaqHero />
        
        <div className="relative">
          {/* Subtle alternating backgrounds */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="h-full bg-gradient-to-b from-transparent via-muted/20 to-transparent" />
          </div>
          
          <FAQSection
            id="getting-started"
            title="Getting Started"
            items={gettingStartedFAQs}
          />
          
          <FAQSection
            id="features"
            title="Features & Functionality"
            items={featuresFAQs}
            variant="accent"
          />
          
          <FAQSection
            id="privacy"
            title="Privacy & Security"
            items={privacyFAQs}
          />
          
          <FAQSection
            id="technical"
            title="Technical & Support"
            items={technicalFAQs}
            variant="accent"
          />
        </div>
        
        <CTASection
          title="Still Have Questions?"
          description="Our support team is happy to help you get the most out of ScholariumAI."
          buttonText="Contact Support"
          buttonHref="/contact"
          showTrustBadges={false}
        />
      </main>
      
      <Footer />
    </div>
  );
}
