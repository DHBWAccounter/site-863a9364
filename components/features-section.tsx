"use client";

import { useEffect, useRef } from "react";
import { Search, FileText, Network, Users } from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: Search,
    title: "Intelligent Literature Discovery",
    description:
      "Go beyond keyword search. Describe your research question in natural language, and ScholariumAI finds relevant papers you'd miss with traditional databases—surfacing work from adjacent fields and undercited authors.",
    accent: "from-primary to-secondary",
  },
  {
    icon: FileText,
    title: "Automated Summarization",
    description:
      "Get comprehensive summaries of any paper in seconds. Extract key findings, methodology details, limitations, and future research suggestions without reading every word.",
    accent: "from-secondary to-accent",
  },
  {
    icon: Network,
    title: "Knowledge Graph Mapping",
    description:
      "Visualize how ideas connect across your field. See citation networks, identify seminal works, and discover emerging research frontiers before they appear in mainstream journals.",
    accent: "from-accent to-primary",
  },
  {
    icon: Users,
    title: "Collaborative Workspaces",
    description:
      "Share collections, annotations, and insights with your research group. Build institutional knowledge that persists beyond individual projects.",
    accent: "from-primary to-accent",
  },
];

export function FeaturesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slide-up");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-mesh pointer-events-none" />
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <h2 className="animate-on-scroll opacity-0 text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-primary mb-6">
            Built for How You Actually Work
          </h2>
          <div className="animate-on-scroll opacity-0 w-16 h-0.5 bg-accent mx-auto animate-delay-100" />
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={`animate-on-scroll opacity-0 group relative bg-white rounded-2xl border border-border/50 p-8 lg:p-10 hover:shadow-xl hover:border-accent/30 transition-all duration-300 animate-delay-${(index + 2) * 100}`}
              >
                {/* Accent line */}
                <div className={`absolute top-0 left-8 right-8 h-0.5 bg-gradient-to-r ${feature.accent} opacity-0 group-hover:opacity-100 transition-opacity`} />
                
                {/* Icon */}
                <div className="mb-6 inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl group-hover:from-primary/20 group-hover:to-secondary/20 transition-colors">
                  <Icon className="w-7 h-7 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl lg:text-2xl font-serif font-semibold text-primary mb-4">
                  {feature.title}
                </h3>
                <p className="text-base text-foreground/70 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <Link
            href="/features"
            className="inline-flex items-center gap-2 text-primary font-medium hover:text-secondary transition-colors group"
          >
            Explore all features
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
