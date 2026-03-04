"use client";

import { useEffect, useRef } from "react";
import { Shield, Lock, Heart, GitBranch } from "lucide-react";

const values = [
  {
    title: "Research Integrity First",
    description:
      "We build tools that enhance rigorous scholarship, not shortcuts. Every feature is designed with methodological best practices in mind.",
    icon: Shield,
  },
  {
    title: "Privacy & Ownership",
    description:
      "Your research data belongs to you. We never train our models on your private collections or annotations. Your work stays yours.",
    icon: Lock,
  },
  {
    title: "Accessibility",
    description:
      "We offer discounted and free access for researchers in under-resourced institutions and developing regions. Knowledge should not be gated by resources.",
    icon: Heart,
  },
  {
    title: "Interdisciplinary Thinking",
    description:
      "We believe breakthroughs happen at boundaries. Our tools are designed to help researchers see across disciplines, not stay siloed within them.",
    icon: GitBranch,
  },
];

export function AboutValues() {
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
      <div className="absolute top-20 right-20 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="animate-on-scroll opacity-0 text-3xl sm:text-4xl font-serif font-semibold text-primary mb-4">
            Our Values
          </h2>
          <div className="animate-on-scroll opacity-0 w-16 h-1 bg-accent mx-auto rounded-full mb-6 animate-delay-100" />
          <p className="animate-on-scroll opacity-0 text-foreground/60 max-w-2xl mx-auto animate-delay-200">
            The principles that guide everything we build.
          </p>
        </div>

        {/* Values grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={value.title}
                className="animate-on-scroll opacity-0"
                style={{ animationDelay: `${index * 100 + 300}ms` }}
              >
                <div className="group h-full bg-white rounded-2xl border border-border/50 p-8 hover:shadow-xl hover:border-accent/30 transition-all duration-300">
                  <div className="flex items-start gap-5">
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:from-accent/20 group-hover:to-accent/10 transition-colors">
                        <Icon className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />
                      </div>
                    </div>

                    {/* Content */}
                    <div>
                      <h3 className="text-xl font-serif font-semibold text-primary mb-3">
                        {value.title}
                      </h3>
                      <p className="text-foreground/70 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
