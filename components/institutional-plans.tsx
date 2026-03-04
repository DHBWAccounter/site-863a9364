"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { Building2, Globe, Users, Shield, ArrowRight } from "lucide-react";

interface InstitutionalPlan {
  name: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
  buttonText: string;
  buttonHref: string;
}

const institutionalPlans: InstitutionalPlan[] = [
  {
    name: "Lab/Department",
    description: "For research groups and academic departments",
    features: [
      "Everything in Scholar tier",
      "Unlimited user seats",
      "SSO integration",
      "Admin dashboard and usage analytics",
      "Training and onboarding support",
      "Custom data integrations",
    ],
    icon: <Users className="w-8 h-8" />,
    buttonText: "Contact Sales",
    buttonHref: "/contact",
  },
  {
    name: "Enterprise",
    description: "For universities, research institutes, and organizations",
    features: [
      "Everything in Lab/Department",
      "Multi-deployment options (cloud or on-premise)",
      "Custom model fine-tuning",
      "Dedicated infrastructure",
      "SLA guarantees",
      "24/7 premium support",
    ],
    icon: <Globe className="w-8 h-8" />,
    buttonText: "Contact Sales",
    buttonHref: "/contact",
  },
];

export function InstitutionalPlans() {
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
    <section ref={sectionRef} className="py-20 lg:py-28 bg-gradient-to-b from-muted/30 to-white relative">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="currentColor" className="text-primary" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="animate-on-scroll opacity-0 inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary mb-6">
            <Building2 className="w-4 h-4" />
            <span>Institutional Solutions</span>
          </div>
          <h2 className="animate-on-scroll opacity-0 text-3xl sm:text-4xl font-serif font-semibold text-primary mb-4 animate-delay-100">
            Institutional Plans
          </h2>
          <div className="animate-on-scroll opacity-0 w-16 h-0.5 bg-accent mx-auto mb-6 animate-delay-200" />
          <p className="animate-on-scroll opacity-0 text-lg text-foreground/70 max-w-2xl mx-auto animate-delay-300">
            Custom pricing for teams and organizations with advanced needs
          </p>
        </div>

        {/* Plans grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {institutionalPlans.map((plan, index) => (
            <div
              key={plan.name}
              className={`animate-on-scroll opacity-0 group relative bg-white rounded-2xl border-2 border-border hover:border-primary/30 p-8 lg:p-10 transition-all duration-300 hover:shadow-xl animate-delay-${(index + 4) * 100}`}
            >
              {/* Icon */}
              <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 text-primary group-hover:from-primary group-hover:to-secondary group-hover:text-white transition-all duration-300">
                {plan.icon}
              </div>

              {/* Plan name */}
              <h3 className="text-2xl font-serif font-semibold text-primary mb-2">
                {plan.name}
              </h3>

              {/* Price badge */}
              <div className="inline-flex items-center px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full mb-4">
                Custom Pricing
              </div>

              {/* Description */}
              <p className="text-foreground/60 mb-6">
                {plan.description}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Shield className="w-5 h-5 mt-0.5 flex-shrink-0 text-accent" />
                    <span className="text-sm text-foreground/70">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Link
                href={plan.buttonHref}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-secondary transition-all group"
              >
                {plan.buttonText}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
