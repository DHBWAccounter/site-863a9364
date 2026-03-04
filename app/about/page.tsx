import { Metadata } from "next";
import { AboutHero } from "@/components/about-hero";
import { AboutStory } from "@/components/about-story";
import { AboutTimeline } from "@/components/about-timeline";
import { AboutTeam } from "@/components/about-team";
import { AboutValues } from "@/components/about-values";
import { CTASection } from "@/components/cta-section";

export const metadata: Metadata = {
  title: "About | ScholariumAI",
  description:
    "Learn about ScholariumAI's mission to accelerate academic research and our team of researchers and engineers.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutStory />
      <AboutTimeline />
      <AboutTeam />
      <AboutValues />
      <CTASection
        title="Join Our Mission"
        description="We're always looking for researchers and engineers passionate about improving how knowledge is created and shared."
        buttonText="View Open Positions"
        buttonHref="/contact"
        showTrustBadges={false}
      />
    </>
  );
}
