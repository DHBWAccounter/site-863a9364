import { Metadata } from "next";
import { GraduationCap, Users, FileSearch, Building2 } from "lucide-react";
import { SolutionsHero } from "@/components/solutions-hero";
import { SolutionsSection } from "@/components/solutions-section";
import { SolutionsDisciplines } from "@/components/solutions-disciplines";
import { CtaSection } from "@/components/cta-section";

export const metadata: Metadata = {
  title: "Solutions | ScholariumAI",
  description:
    "Discover how ScholariumAI supports different research workflows across disciplines.",
  openGraph: {
    title: "Solutions | ScholariumAI",
    description:
      "Discover how ScholariumAI supports different research workflows across disciplines.",
    type: "website",
    locale: "en_US",
    siteName: "ScholariumAI",
  },
};

const graduateStudentFeatures = [
  {
    title: "Comprehensive Literature Reviews",
    description:
      "Conduct dissertation-quality literature reviews in a fraction of the time. Find relevant papers, synthesize findings, and identify research gaps with tools designed for rigorous scholarship.",
  },
  {
    title: "Staying Current",
    description:
      "Set up automated feeds for your research area. Get weekly digests of new publications relevant to your thesis work.",
  },
  {
    title: "Building Your Academic Identity",
    description:
      "Develop systematic research habits that will serve you throughout your career. Build a personal knowledge base that grows with you.",
  },
];

const facultyFeatures = [
  {
    title: "Managing Research Portfolios",
    description:
      "Track literature across multiple active projects. Switch between research contexts while maintaining organized collections and notes.",
  },
  {
    title: "Lab Knowledge Management",
    description:
      "Create institutional memory for your research group. Onboard new students faster with curated reading lists and shared collections.",
  },
  {
    title: "Strategic Positioning",
    description:
      "Use gap detection and trend analysis to identify high-impact research opportunities and position your work effectively.",
  },
];

const systematicReviewFeatures = [
  {
    title: "Screening at Scale",
    description:
      "AI-assisted title/abstract screening that learns your inclusion criteria. Reduce screening workload by 60-80% while maintaining rigor.",
  },
  {
    title: "Data Extraction Support",
    description:
      "Automatically extract key data points from included studies. Compare extraction across reviewers with built-in conflict resolution.",
  },
  {
    title: "Audit Trails",
    description:
      "Document every decision for PRISMA compliance. Generate ready-to-use PRISMA flow diagrams.",
  },
  {
    title: "Multi-Site Collaboration",
    description:
      "Coordinate review teams across institutions with synchronized workspaces and role-based permissions.",
  },
];

const institutionFeatures = [
  {
    title: "Research Intelligence",
    description:
      "Understand research output and trends across your institution. Identify collaboration opportunities and emerging strengths.",
  },
  {
    title: "Resource Optimization",
    description:
      "Make informed decisions about database subscriptions, research investments, and hiring based on comprehensive analytics.",
  },
  {
    title: "Research Visibility",
    description:
      "Help your researchers' work get discovered. Connect your institutional repository to improve visibility and impact.",
  },
  {
    title: "Training & Support",
    description:
      "On-demand training modules and dedicated support to ensure your researchers get maximum value from the platform.",
  },
];

export default function SolutionsPage() {
  return (
    <>
      <SolutionsHero />

      <SolutionsSection
        id="graduate-students"
        title="For Graduate Students"
        features={graduateStudentFeatures}
        linkText="Learn More About Graduate Student Tools"
        linkHref="/contact"
        icon={GraduationCap}
        variant="default"
      />

      <SolutionsSection
        id="faculty"
        title="For Faculty & Principal Investigators"
        features={facultyFeatures}
        linkText="Learn More About PI Tools"
        linkHref="/contact"
        icon={Users}
        variant="accent"
      />

      <SolutionsSection
        id="systematic-reviews"
        title="For Systematic Review Teams"
        features={systematicReviewFeatures}
        linkText="Learn More About Systematic Review Tools"
        linkHref="/contact"
        icon={FileSearch}
        variant="default"
      />

      <SolutionsSection
        id="institutions"
        title="For Research Institutions"
        features={institutionFeatures}
        linkText="Contact Us About Institutional Solutions"
        linkHref="/contact"
        icon={Building2}
        variant="accent"
      />

      <SolutionsDisciplines />

      <CtaSection
        title="Find Your Solution"
        description="Tell us about your research context, and we'll show you how ScholariumAI can help."
        buttonText="Talk to Solutions Team"
        buttonHref="/contact"
      />
    </>
  );
}
