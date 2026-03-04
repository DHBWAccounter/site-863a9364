import type { Metadata } from "next";
import { PricingHero } from "@/components/pricing-hero";
import { PricingPlans } from "@/components/pricing-plans";
import { InstitutionalPlans } from "@/components/institutional-plans";
import { PricingFAQ } from "@/components/pricing-faq";
import { CTASection } from "@/components/cta-section";

export const metadata: Metadata = {
  title: "Pricing | ScholariumAI",
  description:
    "Choose the ScholariumAI plan that fits your research needs, from individual researchers to enterprise institutions.",
  openGraph: {
    title: "Pricing | ScholariumAI",
    description:
      "Choose the ScholariumAI plan that fits your research needs, from individual researchers to enterprise institutions.",
    type: "website",
  },
};

export default function PricingPage() {
  return (
    <>
      <PricingHero />
      <PricingPlans />
      <InstitutionalPlans />
      <PricingFAQ />
      <CTASection
        title="Ready to Transform Your Research?"
        description="Start your free 14-day trial today. No credit card required."
        buttonText="Start Free Trial"
        buttonHref="/contact"
        showTrustBadges={true}
      />
    </>
  );
}
