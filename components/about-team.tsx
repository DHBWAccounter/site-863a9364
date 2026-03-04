"use client";

import { useEffect, useRef } from "react";

const teamMembers = [
  {
    name: "Dr. Amira Hassan",
    role: "CEO & Co-Founder",
    bio: "Former Associate Professor of Computer Science, MIT. Published 60+ papers in NLP and machine learning. Built her first citation analysis tool in 2012.",
    initials: "AH",
  },
  {
    name: "Dr. James Okonkwo",
    role: "CTO & Co-Founder",
    bio: "PhD in Information Science, University of Michigan. Previously led search infrastructure teams at a major academic publisher. Expert in semantic search and knowledge representation.",
    initials: "JO",
  },
  {
    name: "Dr. Sarah Lindqvist",
    role: "Chief Research Officer",
    bio: "PhD in Science & Technology Studies, Edinburgh. Former researcher at the Max Planck Institute. Studies how researchers work and how tools shape knowledge production.",
    initials: "SL",
  },
  {
    name: "Michael Chen",
    role: "VP of Engineering",
    bio: "15 years building scalable platforms. Previously at Google Scholar and a scholarly infrastructure non-profit. Ensures ScholariumAI performs reliably at scale.",
    initials: "MC",
  },
];

export function AboutTeam() {
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
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 lg:py-28 bg-gradient-to-b from-muted/30 to-white"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="animate-on-scroll opacity-0 text-3xl sm:text-4xl font-serif font-semibold text-primary mb-4">
            Leadership Team
          </h2>
          <div className="animate-on-scroll opacity-0 w-16 h-1 bg-accent mx-auto rounded-full mb-6 animate-delay-100" />
          <p className="animate-on-scroll opacity-0 text-foreground/60 max-w-2xl mx-auto animate-delay-200">
            Researchers and engineers dedicated to transforming how knowledge is
            discovered and synthesized.
          </p>
        </div>

        {/* Team grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className="animate-on-scroll opacity-0 group"
              style={{ animationDelay: `${index * 100 + 300}ms` }}
            >
              <div className="bg-white rounded-2xl border border-border/50 p-8 hover:shadow-xl hover:border-accent/30 transition-all duration-300 h-full">
                <div className="flex items-start gap-6">
                  {/* Avatar */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-serif font-bold text-xl">
                      {member.initials}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-serif font-semibold text-primary mb-1">
                      {member.name}
                    </h3>
                    <div className="text-accent font-medium text-sm mb-4">
                      {member.role}
                    </div>
                    <p className="text-foreground/70 text-sm leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
