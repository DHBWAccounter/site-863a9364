"use client";

import { useEffect, useRef } from "react";
import { Search, Brain, Database, Users, FileText, Network, FolderOpen, Share2 } from "lucide-react";

interface Feature {
  title: string;
  description: string;
}

interface DetailedFeaturesSectionProps {
  id: string;
  title: string;
  features: Feature[];
}

const sectionIcons: Record<string, typeof Search> = {
  discovery: Search,
  analysis: Brain,
  knowledge: Database,
  collaboration: Users,
};

const sectionAccents: Record<string, { gradient: string; border: string; bg: string }> = {
  discovery: {
    gradient: "from-primary to-secondary",
    border: "border-primary/20",
    bg: "bg-primary/5",
  },
  analysis: {
    gradient: "from-secondary to-accent",
    border: "border-secondary/20",
    bg: "bg-secondary/5",
  },
  knowledge: {
    gradient: "from-accent to-primary",
    border: "border-accent/20",
    bg: "bg-accent/5",
  },
  collaboration: {
    gradient: "from-primary to-accent",
    border: "border-primary/20",
    bg: "bg-primary/5",
  },
};

export function DetailedFeaturesSection({ id, title, features }: DetailedFeaturesSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const Icon = sectionIcons[id] || Search;
  const accent = sectionAccents[id] || sectionAccents.discovery;

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
    <section ref={sectionRef} id={id} className="py-16 lg:py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 gradient-mesh pointer-events-none" />
      
      {/* Section-specific accent */}
      <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${accent.gradient} opacity-20`} />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-12 lg:mb-16">
          <div className={`flex-shrink-0 w-12 h-12 rounded-xl ${accent.bg} border ${accent.border} flex items-center justify-center`}>
            <Icon className="w-6 h-6 text-primary" />
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-semibold text-primary">
            {title}
          </h2>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`animate-on-scroll opacity-0 group relative bg-white rounded-xl border border-border/50 p-6 lg:p-8 hover:shadow-lg hover:border-accent/30 transition-all duration-300 animate-delay-${(index + 1) * 100}`}
            >
              {/* Top accent line */}
              <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${accent.gradient} opacity-0 group-hover:opacity-100 transition-opacity rounded-t-xl`} />
              
              {/* Feature number */}
              <div className="absolute top-6 right-6 text-4xl font-serif font-bold text-primary/5 group-hover:text-primary/10 transition-colors">
                {String(index + 1).padStart(2, "0")}
              </div>

              {/* Content */}
              <div className="relative">
                <h3 className="text-lg lg:text-xl font-serif font-semibold text-primary mb-3 group-hover:text-secondary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm lg:text-base text-foreground/60 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Bottom accent on hover */}
              <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
