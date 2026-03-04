"use client";

import { useEffect, useRef } from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "ScholariumAI cut my dissertation literature review from six months to six weeks. It found papers I never would have discovered through my usual databases.",
    author: "Dr. Elena Vasquez",
    title: "Sociology, UC Berkeley",
  },
  {
    quote:
      "The knowledge graph feature changed how I think about my field. I can actually see where the gaps are and position my work strategically.",
    author: "Marcus Thompson",
    title: "PhD Candidate, Neuroscience, Oxford",
  },
  {
    quote:
      "Finally, a tool that understands academic writing. The summarization is nuanced—it captures methodological details that other AI tools miss completely.",
    author: "Prof. Yuki Tanaka",
    title: "Information Systems, National University of Singapore",
  },
];

export function TestimonialsSection() {
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
    <section ref={sectionRef} className="py-20 lg:py-28 bg-muted/30 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <h2 className="animate-on-scroll opacity-0 text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-primary mb-6">
            What Researchers Are Saying
          </h2>
          <div className="animate-on-scroll opacity-0 w-16 h-0.5 bg-accent mx-auto animate-delay-100" />
        </div>

        {/* Testimonials grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`animate-on-scroll opacity-0 group relative bg-white rounded-2xl border border-border/50 p-8 lg:p-10 hover:shadow-xl transition-all duration-300 animate-delay-${(index + 2) * 100}`}
            >
              {/* Quote icon */}
              <div className="mb-6">
                <Quote className="w-10 h-10 text-accent/30 group-hover:text-accent/50 transition-colors" />
              </div>

              {/* Quote text */}
              <blockquote className="text-lg text-foreground/80 leading-relaxed mb-8 font-serif italic">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-serif font-semibold">
                  {testimonial.author
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .replace(".", "")}
                </div>
                <div>
                  <div className="font-medium text-primary">{testimonial.author}</div>
                  <div className="text-sm text-foreground/60">{testimonial.title}</div>
                </div>
              </div>

              {/* Decorative corner accent */}
              <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-accent/5 to-transparent rounded-bl-3xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
