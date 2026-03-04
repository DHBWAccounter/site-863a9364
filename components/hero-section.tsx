"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, BookOpen, Sparkles, Network } from "lucide-react";

export function HeroSection() {
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
    <section ref={heroRef} className="relative overflow-hidden">
      {/* Background gradient mesh */}
      <div className="absolute inset-0 gradient-mesh pointer-events-none" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column - Text content */}
          <div className="space-y-8">
            <div className="space-y-6">
              {/* Eyebrow */}
              <div className="animate-on-scroll opacity-0 inline-flex items-center gap-2 px-4 py-1.5 bg-accent/10 border border-accent/20 rounded-full text-sm font-medium text-accent">
                <Sparkles className="w-4 h-4" />
                <span>AI-Powered Research Intelligence</span>
              </div>

              {/* Main headline */}
              <h1 className="animate-on-scroll opacity-0 text-4xl sm:text-5xl lg:text-6xl font-serif font-semibold text-primary leading-tight text-balance animate-delay-100">
                Research Smarter, Not Harder
              </h1>

              {/* Subheadline */}
              <p className="animate-on-scroll opacity-0 text-lg sm:text-xl text-foreground/70 leading-relaxed max-w-2xl animate-delay-200">
                <span className="font-medium text-primary">ScholariumAI transforms how you discover, analyze, and synthesize academic literature.</span>
              </p>

              {/* Description */}
              <p className="animate-on-scroll opacity-0 text-base text-foreground/60 leading-relaxed max-w-2xl animate-delay-300">
                Stop spending weeks combing through databases and struggling to connect findings across disciplines. Our AI-powered platform reads, summarizes, and maps connections across millions of papers—delivering the insights you need in minutes, not months.
              </p>

              {/* Additional context */}
              <p className="animate-on-scroll opacity-0 text-base text-foreground/60 leading-relaxed max-w-2xl animate-delay-400">
                Whether you're writing your first literature review or conducting a decade-spanning meta-analysis, ScholariumAI gives you the tools to work with greater depth and efficiency than ever before.
              </p>
            </div>

            {/* CTA buttons */}
            <div className="animate-on-scroll opacity-0 flex flex-col sm:flex-row gap-4 animate-delay-500">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-medium text-white bg-primary hover:bg-secondary rounded-lg transition-all shadow-lg hover:shadow-xl hover:shadow-primary/20 group"
              >
                Start Free Trial
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/features"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-medium text-primary bg-white border-2 border-primary/20 hover:border-primary/40 rounded-lg transition-all group"
              >
                Explore Features
              </Link>
            </div>

            {/* Trust badges */}
            <div className="animate-on-scroll opacity-0 pt-4 animate-delay-600">
              <p className="text-sm text-foreground/50 mb-3">Trusted by researchers at</p>
              <div className="flex flex-wrap items-center gap-6 text-foreground/40">
                <span className="font-serif text-lg font-medium">Harvard</span>
                <span className="font-serif text-lg font-medium">MIT</span>
                <span className="font-serif text-lg font-medium">Stanford</span>
                <span className="font-serif text-lg font-medium">Cambridge</span>
              </div>
            </div>
          </div>

          {/* Right column - Visual element */}
          <div className="animate-on-scroll opacity-0 relative animate-delay-200">
            <div className="relative">
              {/* Main card */}
              <div className="relative bg-white rounded-2xl shadow-2xl border border-border/50 overflow-hidden">
                {/* Card header */}
                <div className="bg-gradient-to-r from-primary to-secondary px-6 py-4">
                  <div className="flex items-center gap-3">
                    <BookOpen className="w-5 h-5 text-white" />
                    <span className="text-white font-medium">Literature Discovery</span>
                  </div>
                </div>
                
                {/* Card content */}
                <div className="p-6 space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2" />
                      <div>
                        <p className="text-sm font-medium text-foreground">Query</p>
                        <p className="text-sm text-foreground/60 mt-1">"Climate change impacts on coastal ecosystems"</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3 p-3 bg-primary/5 rounded-lg border-l-2 border-accent">
                      <Network className="w-4 h-4 text-primary mt-1" />
                      <div>
                        <p className="text-sm font-medium text-foreground">Related Papers Found</p>
                        <p className="text-sm text-foreground/60 mt-1">2,847 papers • 156 highly relevant</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Mini knowledge graph visualization */}
                  <div className="pt-4 border-t border-border/50">
                    <p className="text-xs text-foreground/50 mb-3">Knowledge Graph</p>
                    <div className="relative h-32 bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg overflow-hidden">
                      {/* Nodes */}
                      <div className="absolute top-4 left-8 w-3 h-3 bg-primary rounded-full animate-pulse" />
                      <div className="absolute top-8 left-20 w-4 h-4 bg-accent rounded-full" />
                      <div className="absolute top-12 right-16 w-3 h-3 bg-secondary rounded-full animate-pulse" style={{ animationDelay: "0.5s" }} />
                      <div className="absolute bottom-8 left-16 w-3 h-3 bg-primary/60 rounded-full" />
                      <div className="absolute bottom-6 right-12 w-4 h-4 bg-accent/80 rounded-full" />
                      <div className="absolute bottom-12 left-1/2 w-2 h-2 bg-secondary/60 rounded-full animate-pulse" style={{ animationDelay: "1s" }} />
                      
                      {/* Connection lines */}
                      <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.3 }}>
                        <line x1="40" y1="20" x2="88" y2="40" stroke="#1e3a5f" strokeWidth="1" />
                        <line x1="88" y1="40" x2="180" y2="56" stroke="#c9a227" strokeWidth="1" />
                        <line x1="40" y1="20" x2="72" y2="100" stroke="#2d5a87" strokeWidth="1" />
                        <line x1="72" y1="100" x2="200" y2="108" stroke="#1e3a5f" strokeWidth="1" />
                        <line x1="88" y1="40" x2="200" y2="108" stroke="#c9a227" strokeWidth="1" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating accent card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl border border-border/50 p-4 max-w-xs">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">AI Summary Ready</p>
                    <p className="text-xs text-foreground/60">156 papers analyzed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
