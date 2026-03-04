"use client";

import { useEffect, useRef } from "react";
import { HelpCircle } from "lucide-react";

export function FaqHero() {
  const heroRef = useRef<HTMLDivElement>(null);

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

    const elements = heroRef.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={heroRef} className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
      {/* Background gradient mesh */}
      <div className="absolute inset-0 gradient-mesh pointer-events-none" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      {/* Geometric pattern overlay */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1" className="text-primary" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Eyebrow */}
          <div className="animate-on-scroll opacity-0 inline-flex items-center gap-2 px-4 py-1.5 bg-accent/10 border border-accent/20 rounded-full text-sm font-medium text-accent mb-8">
            <HelpCircle className="w-4 h-4" />
            <span>Support Center</span>
          </div>

          {/* Main headline */}
          <h1 className="animate-on-scroll opacity-0 text-4xl sm:text-5xl lg:text-6xl font-serif font-semibold text-primary leading-tight mb-6 animate-delay-100">
            Frequently Asked Questions
          </h1>

          {/* Decorative line */}
          <div className="animate-on-scroll opacity-0 w-24 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto mb-8 rounded-full animate-delay-200" />

          {/* Description */}
          <p className="animate-on-scroll opacity-0 text-lg sm:text-xl text-foreground/70 leading-relaxed max-w-3xl mx-auto animate-delay-300">
            Find answers to common questions about ScholariumAI. Can't find what you're looking for?{" "}
            <a href="/contact" className="text-accent hover:text-accent/80 font-medium underline underline-offset-4 transition-colors">
              Contact our support team
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
