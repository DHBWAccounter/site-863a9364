"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, LucideIcon } from "lucide-react";

interface SolutionFeature {
  title: string;
  description: string;
}

interface SolutionsSectionProps {
  id: string;
  title: string;
  features: SolutionFeature[];
  linkText: string;
  linkHref: string;
  icon: LucideIcon;
  variant?: "default" | "accent";
}

export function SolutionsSection({
  id,
  title,
  features,
  linkText,
  linkHref,
  icon: Icon,
  variant = "default",
}: SolutionsSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const isAccent = variant === "accent";

  return (
    <section
      ref={sectionRef}
      id={id}
      className={`py-20 lg:py-28 relative overflow-hidden ${
        isAccent ? "bg-muted/30" : "bg-white"
      }`}
    >
      {/* Decorative background element */}
      {isAccent && (
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/5 to-transparent pointer-events-none" />
      )}

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Title column */}
          <div className="lg:col-span-4">
            <div className="animate-on-scroll opacity-0 sticky top-32">
              <div
                className={`inline-flex items-center justify-center w-14 h-14 rounded-xl mb-6 ${
                  isAccent
                    ? "bg-accent/10 text-accent"
                    : "bg-primary/10 text-primary"
                }`}
              >
                <Icon className="w-7 h-7" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-primary leading-tight mb-4">
                {title}
              </h2>
              <div
                className={`w-16 h-1 rounded-full mb-6 ${
                  isAccent ? "bg-accent" : "bg-primary/30"
                }`}
              />
              <Link
                href={linkHref}
                className={`inline-flex items-center gap-2 text-sm font-medium transition-colors group ${
                  isAccent
                    ? "text-accent hover:text-accent/80"
                    : "text-primary hover:text-primary/80"
                }`}
              >
                {linkText}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Features column */}
          <div className="lg:col-span-8 space-y-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="animate-on-scroll opacity-0 group"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <div
                  className={`p-6 lg:p-8 rounded-xl border transition-all ${
                    isAccent
                      ? "bg-white border-accent/20 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5"
                      : "bg-white border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
                  }`}
                >
                  <h3 className="text-xl font-serif font-semibold text-primary mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
