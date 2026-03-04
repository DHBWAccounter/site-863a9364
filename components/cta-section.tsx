"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

interface CTASectionProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
  showTrustBadges?: boolean;
}

const trustedInstitutions = [
  "Harvard",
  "MIT",
  "Stanford",
  "Cambridge",
  "and leading institutions worldwide",
];

export function CTASection({
  title = "Start Your Free Trial Today",
  description = "Get full access to ScholariumAI for 14 days—no credit card required. See how much faster your research can move.",
  buttonText = "Start Free Trial",
  buttonHref = "/contact",
  showTrustBadges = true,
}: CTASectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-scale-in");
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-secondary" />
      
      {/* Decorative elements */}
      <div className="absolute inset-0 texture-overlay pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
      
      <div className="relative mx-auto max-w-4xl px-6 lg:px-8">
        <div className="text-center space-y-8">
          {/* Main headline */}
          <h2 className="animate-on-scroll opacity-0 text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-white leading-tight">
            {title}
          </h2>

          {/* Description */}
          <p className="animate-on-scroll opacity-0 text-lg sm:text-xl text-white/80 max-w-2xl mx-auto animate-delay-100">
            {description}
          </p>

          {/* CTA Button */}
          <div className="animate-on-scroll opacity-0 animate-delay-200">
            <Link
              href={buttonHref}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-medium text-primary bg-white hover:bg-accent hover:text-white rounded-lg transition-all shadow-xl hover:shadow-2xl group"
            >
              {buttonText}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Trust message */}
          {showTrustBadges && (
            <div className="animate-on-scroll opacity-0 pt-8 animate-delay-300">
              <div className="flex flex-wrap items-center justify-center gap-2 text-white/60 text-sm">
                <CheckCircle2 className="w-4 h-4 text-accent" />
                <span>Already trusted by researchers at</span>
                {trustedInstitutions.map((institution, index) => (
                  <span key={index} className="font-medium text-white/80">
                    {institution}
                    {index < trustedInstitutions.length - 1 ? "," : ""}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
