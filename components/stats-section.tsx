"use client";

import { useEffect, useRef, useState } from "react";
import { BookOpen, Clock, Users, Building2 } from "lucide-react";

const stats = [
  {
    value: "12 million+",
    label: "academic papers indexed",
    icon: BookOpen,
  },
  {
    value: "85%",
    label: "reduction in literature review time",
    icon: Clock,
  },
  {
    value: "50,000+",
    label: "active researchers",
    icon: Users,
  },
  {
    value: "200+",
    label: "universities and institutions",
    icon: Building2,
  },
];

export function StatsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-20 lg:py-28 bg-primary overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 texture-overlay pointer-events-none" />
      
      {/* Decorative gradient */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-50" />
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-white mb-4">
            Trusted by Researchers Worldwide
          </h2>
          <div className="w-16 h-0.5 bg-accent mx-auto" />
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className={`text-center transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-white/10 rounded-xl mb-4">
                  <Icon className="w-7 h-7 text-accent" />
                </div>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-sm sm:text-base text-white/70">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
