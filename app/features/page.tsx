import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FeaturesHero } from "@/components/features-hero";
import { DetailedFeaturesSection } from "@/components/detailed-features-section";
import { CTASection } from "@/components/cta-section";

export const metadata = {
  title: "Features | ScholariumAI",
  description: "Explore the complete feature set of ScholariumAI's research intelligence platform.",
};

export default function FeaturesPage() {
  return (
    <>
      <Header />
      <main>
        <FeaturesHero />
        <DetailedFeaturesSection
          id="discovery"
          title="Literature Discovery Engine"
          features={[
            {
              title: "Semantic Search",
              description:
                "Search by meaning, not just keywords. Our AI understands research concepts and finds papers that address your question—even when they use different terminology.",
            },
            {
              title: "Cross-Disciplinary Discovery",
              description:
                "Break out of your citation bubble. ScholariumAI identifies relevant work from adjacent fields, helping you build more comprehensive literature reviews.",
            },
            {
              title: "Personalized Recommendations",
              description:
                "As you save and annotate papers, our system learns your research interests and suggests new publications tailored to your work.",
            },
            {
              title: "Alert Feeds",
              description:
                "Stay current with automated alerts for new publications matching your research areas, specific authors, or citation networks.",
            },
          ]}
        />
        <DetailedFeaturesSection
          id="analysis"
          title="Intelligent Analysis Tools"
          features={[
            {
              title: "Multi-Document Summarization",
              description:
                "Upload dozens of papers and get synthesized summaries organized by theme, methodology, findings, or chronology. Perfect for comprehensive literature reviews.",
            },
            {
              title: "Methodology Extraction",
              description:
                "Automatically identify and compare research methods across studies. See at a glance what approaches are used in your field.",
            },
            {
              title: "Citation Context Analysis",
              description:
                "Understand how papers are cited—whether findings are supported, challenged, or extended. Go beyond citation counts to understand scholarly impact.",
            },
            {
              title: "Gap Detection",
              description:
                "Our AI identifies underexplored areas and unanswered questions in your domain, helping you position your research for maximum contribution.",
            },
          ]}
        />
        <DetailedFeaturesSection
          id="knowledge"
          title="Knowledge Management"
          features={[
            {
              title: "Smart Collections",
              description:
                "Organize papers into dynamic collections that automatically update as new relevant work appears. Tag, annotate, and share with your team.",
            },
            {
              title: "Connected Notes",
              description:
                "Link your notes to specific papers, passages, and concepts. Build a personal knowledge base that grows with your research.",
            },
            {
              title: "Export Integration",
              description:
                "Seamlessly export to Zotero, Mendeley, EndNote, and BibTeX. Generate formatted citations in any style.",
            },
            {
              title: "Version History",
              description:
                "Track how your thinking evolves. Every annotation and note is versioned, so you can revisit earlier ideas.",
            },
          ]}
        />
        <DetailedFeaturesSection
          id="collaboration"
          title="Collaboration & Sharing"
          features={[
            {
              title: "Team Workspaces",
              description:
                "Create shared spaces for research groups, labs, or cross-institutional collaborations. Everyone stays synchronized.",
            },
            {
              title: "Annotation Sharing",
              description:
                "Highlight passages and share insights with collaborators. Discuss papers in context, not in separate email threads.",
            },
            {
              title: "Reading Lists",
              description:
                "Curate and share reading lists for courses, journal clubs, or onboarding new lab members.",
            },
            {
              title: "Institutional Repositories",
              description:
                "Connect to your university's subscription databases and institutional repositories for seamless access.",
            },
          ]}
        />
        <CTASection
          title="See These Features in Action"
          description="Schedule a personalized demo with our research solutions team. We'll show you how ScholariumAI fits your specific workflow."
          buttonText="Request a Demo"
          buttonHref="/contact"
        />
      </main>
      <Footer />
    </>
  );
}
