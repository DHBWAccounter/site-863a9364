"use client";

import { useEffect, useRef } from "react";
import { FileText, Users, Globe } from "lucide-react";

export function AboutStory() {
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
    <section
      ref={sectionRef}
      className="py-20 lg:py-28 bg-gradient-to-b from-white to-muted/30"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Story content */}
          <div className="space-y-6">
            <div className="animate-on-scroll opacity-0">
              <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-primary mb-6">
                Our Story
              </h2>
              <div className="w-16 h-1 bg-accent rounded-full mb-8" />
            </div>

            <div className="space-y-5 text-foreground/75 leading-relaxed">
              <p className="animate-on-scroll opacity-0 animate-delay-100">
                In 2019, our founding team was completing a systematic review in
                computational linguistics. Over eight months, we manually
                screened 4,000+ papers, struggling to track findings across
                spreadsheets and reference managers. We knew there had to be a
                better way.
              </p>

              <p className="animate-on-scroll opacity-0 animate-delay-200">
                We built the first version of ScholariumAI for our own research
                group. Word spread. Colleagues in other departments asked to use
                it. Then researchers at other universities. By 2021, what
                started as a side project had grown into a platform serving
                thousands of researchers.
              </p>

              <p className="animate-on-scroll opacity-0 animate-delay-300">
                Today, ScholariumAI is used by researchers at over 200
                universities and research institutions worldwide. We remain
                committed to our original mission: giving researchers the tools
                they need to spend less time searching and more time thinking.
              </p>
            </div>
          </div>

          {/* Right: Visual elements */}
          <div className="relative">
            <div className="animate-on-scroll opacity-0 animate-delay-200">
              {/* Main card */}
              <div className="relative bg-white rounded-2xl shadow-xl border border-border/50 p-8 space-y-6">
                {/* Stats grid */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 bg-muted/50 rounded-xl">
                    <div className="text-3xl font-serif font-bold text-primary mb-1">
                      4,000+
                    </div>
                    <div className="text-sm text-foreground/60">
                      Papers screened manually
                    </div>
                  </div>
                  <div className="text-center p-4 bg-muted/50 rounded-xl">
                    <div className="text-3xl font-serif font-bold text-primary mb-1">
                      8 mo
                    </div>
                    <div className="text-sm text-foreground/60">
                      Time spent
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="border-t border-border/50" />

                {/* Journey highlights */}
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <FileText className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">
                        Started as a research tool
                      </div>
                      <div className="text-sm text-foreground/60">
                        Built for our own systematic review
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="mt-1 w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Users className="w-4 h-4 text-accent" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">
                        Grew through word of mouth
                      </div>
                      <div className="text-sm text-foreground/60">
                        Colleagues at other universities joined
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="mt-1 w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <Globe className="w-4 h-4 text-secondary" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">
                        Now serving researchers worldwide
                      </div>
                      <div className="text-sm text-foreground/60">
                        200+ universities and institutions
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/10 rounded-full blur-2xl -z-10" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-2xl -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
