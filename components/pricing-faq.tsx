"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "Can I switch plans anytime?",
    answer: "Yes. Upgrade or downgrade at any time. Changes take effect at your next billing cycle.",
  },
  {
    question: "Is there a discount for annual billing?",
    answer: "Yes. Pay annually and save 20% on any paid plan.",
  },
  {
    question: "Do you offer discounts for researchers in developing countries?",
    answer: "Absolutely. We offer significant discounts for researchers affiliated with institutions in eligible countries. Contact us to learn more.",
  },
  {
    question: "What happens to my data if I cancel?",
    answer: "Your data remains yours. You can export all your collections, annotations, and notes at any time. We retain encrypted backups for 30 days after cancellation, then permanently delete your data.",
  },
  {
    question: "Is there a free trial?",
    answer: "Yes. All new users get 14 days of full Researcher-tier features, no credit card required.",
  },
];

function FAQAccordion({ item, index }: { item: FAQItem; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`border-b border-border last:border-0 transition-all duration-300 ${
        isOpen ? "bg-muted/30" : ""
      }`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-muted/20 transition-colors"
        aria-expanded={isOpen}
      >
        <span className="text-lg font-medium text-primary pr-4">{item.question}</span>
        <ChevronDown
          className={`w-5 h-5 text-accent flex-shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 pb-6" : "max-h-0"
        }`}
      >
        <div className="px-6 text-foreground/70 leading-relaxed">
          {item.answer}
        </div>
      </div>
    </div>
  );
}

export function PricingFAQ() {
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
    <section ref={sectionRef} className="py-20 lg:py-28 relative">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="animate-on-scroll opacity-0 inline-flex items-center gap-2 px-4 py-1.5 bg-accent/10 border border-accent/20 rounded-full text-sm font-medium text-accent mb-6">
            <HelpCircle className="w-4 h-4" />
            <span>Common Questions</span>
          </div>
          <h2 className="animate-on-scroll opacity-0 text-3xl sm:text-4xl font-serif font-semibold text-primary mb-4 animate-delay-100">
            Pricing FAQ
          </h2>
          <div className="animate-on-scroll opacity-0 w-16 h-0.5 bg-accent mx-auto animate-delay-200" />
        </div>

        {/* FAQ accordion */}
        <div className="animate-on-scroll opacity-0 bg-white rounded-2xl border-2 border-border overflow-hidden shadow-sm animate-delay-300">
          {faqItems.map((item, index) => (
            <FAQAccordion key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
