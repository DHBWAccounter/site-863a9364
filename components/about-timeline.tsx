"use client";

import { useEffect, useRef } from "react";

const timelineEvents = [
  {
    year: "2019",
    title: "Founded at MIT Media Lab",
    description: "as an internal research tool",
  },
  {
    year: "2020",
    title: "Beta launch",
    description: "with 500 early adopter researchers",
  },
  {
    year: "2021",
    title: "First institutional partnerships",
    description: "with Harvard and Stanford",
  },
  {
    year: "2022",
    title: "Launched knowledge graph",
    description: "and collaboration features",
  },
  {
    year: "2023",
    title: "Reached 50,000",
    description: "active researchers globally",
  },
  {
    year: "2024",
    title: "Introduced multi-document synthesis",
    description: "and gap detection",
  },
];

export function AboutTimeline() {
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
      <div className="absolute inset-0 bg-primary" />
      <div className="absolute inset-0 texture-overlay pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-white/5 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="animate-on-scroll opacity-0 text-3xl sm:text-4xl font-serif font-semibold text-white mb-4">
            Our Journey
          </h2>
          <div className="animate-on-scroll opacity-0 w-16 h-1 bg-accent mx-auto rounded-full animate-delay-100" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-white/20 hidden lg:block" />

          <div className="space-y-8 lg:space-y-0">
            {timelineEvents.map((event, index) => (
              <div
                key={event.year}
                className={`animate-on-scroll opacity-0 relative lg:flex lg:items-center ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
                style={{ animationDelay: `${index * 100 + 200}ms` }}
              >
                {/* Content */}
                <div className={`lg:w-1/2 ${index % 2 === 0 ? "lg:pr-12 lg:text-right" : "lg:pl-12"}`}>
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-colors">
                    <div className="text-accent font-bold text-2xl mb-2">
                      {event.year}
                    </div>
                    <div className="text-white font-medium text-lg mb-1">
                      {event.title}
                    </div>
                    <div className="text-white/60 text-sm">
                      {event.description}
                    </div>
                  </div>
                </div>

                {/* Center dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 hidden lg:block">
                  <div className="w-4 h-4 rounded-full bg-accent border-4 border-primary" />
                </div>

                {/* Spacer for opposite side */}
                <div className="lg:w-1/2 hidden lg:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
