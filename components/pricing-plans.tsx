"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { Check, Star, ArrowRight } from "lucide-react";

interface PricingPlan {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  badge?: string;
  buttonText: string;
  buttonHref: string;
}

const individualPlans: PricingPlan[] = [
  {
    name: "Student",
    price: "Free",
    description: "Perfect for coursework and early research projects",
    features: [
      "50 paper uploads/month",
      "Basic search and recommendations",
      "Standard summarization",
      "Zotero/Mendeley export",
      "Email support",
    ],
    buttonText: "Get Started Free",
    buttonHref: "/contact",
  },
  {
    name: "Researcher",
    price: "$29",
    period: "/month",
    description: "For active researchers conducting regular literature reviews",
    features: [
      "Unlimited paper uploads",
      "Advanced semantic search",
      "Multi-document synthesis",
      "Knowledge graph access",
      "Collaboration workspaces (up to 5 members)",
      "Priority support",
    ],
    highlighted: true,
    badge: "Most Popular",
    buttonText: "Start Free Trial",
    buttonHref: "/contact",
  },
  {
    name: "Scholar",
    price: "$79",
    period: "/month",
    description: "For power users managing complex research portfolios",
    features: [
      "Everything in Researcher",
      "Unlimited collaborators",
      "API access",
      "Advanced analytics and gap detection",
      "Custom export templates",
      "Dedicated account manager",
    ],
    buttonText: "Start Free Trial",
    buttonHref: "/contact",
  },
];

export function PricingPlans() {
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
    <section ref={sectionRef} className="py-20 lg:py-28 relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="animate-on-scroll opacity-0 text-3xl sm:text-4xl font-serif font-semibold text-primary mb-4">
            Individual Plans
          </h2>
          <div className="animate-on-scroll opacity-0 w-16 h-0.5 bg-accent mx-auto mb-6 animate-delay-100" />
          <p className="animate-on-scroll opacity-0 text-lg text-foreground/70 max-w-2xl mx-auto animate-delay-200">
            Choose the plan that matches your research workflow
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-6">
          {individualPlans.map((plan, index) => (
            <div
              key={plan.name}
              className={`animate-on-scroll opacity-0 relative rounded-2xl p-8 transition-all duration-300 ${
                plan.highlighted
                  ? "bg-gradient-to-br from-primary via-primary to-secondary text-white shadow-2xl scale-105 z-10"
                  : "bg-white border-2 border-border hover:border-primary/30 hover:shadow-lg"
              } animate-delay-${(index + 2) * 100}`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-accent text-primary text-sm font-semibold rounded-full shadow-lg">
                    <Star className="w-4 h-4 fill-current" />
                    {plan.badge}
                  </div>
                </div>
              )}

              {/* Plan name */}
              <div className="mb-6">
                <h3 className={`text-2xl font-serif font-semibold mb-2 ${plan.highlighted ? "text-white" : "text-primary"}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm ${plan.highlighted ? "text-white/80" : "text-foreground/60"}`}>
                  {plan.description}
                </p>
              </div>

              {/* Price */}
              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className={`text-5xl font-bold tracking-tight ${plan.highlighted ? "text-white" : "text-primary"}`}>
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className={`text-lg ${plan.highlighted ? "text-white/70" : "text-foreground/50"}`}>
                      {plan.period}
                    </span>
                  )}
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 ${plan.highlighted ? "text-accent" : "text-accent"}`} />
                    <span className={`text-sm ${plan.highlighted ? "text-white/90" : "text-foreground/70"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Link
                href={plan.buttonHref}
                className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium transition-all group ${
                  plan.highlighted
                    ? "bg-white text-primary hover:bg-accent hover:text-white shadow-lg"
                    : "bg-primary text-white hover:bg-secondary"
                }`}
              >
                {plan.buttonText}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>

        {/* Annual discount note */}
        <div className="animate-on-scroll opacity-0 mt-12 text-center animate-delay-500">
          <p className="text-sm text-foreground/60">
            <span className="font-semibold text-accent">Save 20%</span> when you pay annually on any paid plan
          </p>
        </div>
      </div>
    </section>
  );
}
