"use client";

import { useEffect, useRef } from "react";
import {
  Heart,
  Users,
  Atom,
  BookOpen,
  GitBranch,
} from "lucide-react";

interface Discipline {
  title: string;
  description: string;
  icon: React.ElementType;
}

const disciplines: Discipline[] = [
  {
    title: "Health & Medicine",
    description: "Clinical research, public health, nursing, health policy",
    icon: Heart,
  },
  {
    title: "Social Sciences",
    description: "Psychology, sociology, political science, economics, education",
    icon: Users,
  },
  {
    title: "STEM",
    description: "Biology, chemistry, physics, engineering, computer science",
    icon: Atom,
  },
  {
    title: "Humanities",
    description: "History, literature, philosophy, linguistics, cultural studies",
    icon: BookOpen,
  },
  {
    title: "Interdisciplinary",
    description: "Environmental studies, data science, cognitive science, area studies",
    icon: GitBranch,
  },
];

export function SolutionsDisciplines() {
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

  return (
    <section
      ref={sectionRef}
      className="py-20 lg:py-28 bg-gradient-to-b from-white to-muted/30 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="animate-on-scroll opacity-0 text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-primary leading-tight mb-6">
            Disciplines We Serve
          </h2>
          <div className="animate-on-scroll opacity-0 w-24 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto mb-6 rounded-full animate-delay-100" />
          <p className="animate-on-scroll opacity-0 text-lg text-foreground/70 max-w-2xl mx-auto animate-delay-200">
            ScholariumAI supports research across the full spectrum of academic disciplines
          </p>
        </div>

        {/* Disciplines grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {disciplines.map((discipline, index) => {
            const Icon = discipline.icon;
            return (
              <div
                key={index}
                className="animate-on-scroll opacity-0 group"
                style={{ animationDelay: `${(index + 3) * 100}ms` }}
              >
                <div className="h-full p-6 lg:p-8 bg-white rounded-xl border border-border hover:border-accent/40 transition-all hover:shadow-xl hover:shadow-accent/5">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-accent/10 text-accent mb-4 group-hover:bg-accent group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-primary mb-2">
                    {discipline.title}
                  </h3>
                  <p className="text-foreground/60 text-sm leading-relaxed">
                    {discipline.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
